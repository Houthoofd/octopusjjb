import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();


// Endpoint pour la vérification de l'utilisateur
router.get('/', (req, res) => {

  const query = 'SELECT * FROM cours WHERE date_cours >= CURDATE() LIMIT 12';

  const client = new SQLClient();

  client.query(query)
    .then(results => {
      if (results.length > 0) {
        res.json(results)
      } else {
        res.status(401).send('Cours non trouvés');
      }
    })
    .catch(err => {
      console.error('Erreur lors du chargement des cours', err);
      res.status(500).send('Erreur lors du chargement des cours');
    });
});


router.post('/inscription', (req, res) => {
  // Extraire les données envoyées dans le corps de la requête
  const { user, cours } = req.body;

  console.log('Utilisateur:', user);
  console.log('Cours:', cours);

  // Vérification des champs nécessaires
  if (!user || !cours || !user.nom || !user.email || !cours.id) {
      return res.status(400).json({ message: "Les données utilisateur ou cours sont manquantes." });
  }

  // Requête pour récupérer l'ID de l'utilisateur en fonction du nom, prénom, et email
  const getUserIdQuery = `
      SELECT id
      FROM utilisateurs
      WHERE last_name = ? AND first_name = ? AND email = ?
  `;

  const client = new SQLClient();

  // Exécuter la requête pour obtenir l'ID de l'utilisateur
  client.query(getUserIdQuery, [user.nom, user.prenom, user.email])
      .then(results => {
          // Si l'utilisateur n'est pas trouvé
          if (results.length === 0) {
              return res.status(404).json({ message: "Utilisateur non trouvé." });
          }

          // Récupérer l'ID de l'utilisateur
          const userId = results[0].id;

          // Vérifier si l'utilisateur est déjà inscrit au cours
          const checkQuery = `
              SELECT * 
              FROM inscriptions 
              WHERE utilisateur_id = ? AND cours_id = ?
          `;

          // Vérification de l'inscription
          client.query(checkQuery, [userId, cours.id])
              .then(results => {
                  if (results.length > 0) {
                      return res.status(200).json({ message: "L'utilisateur est déjà inscrit à ce cours." });
                  } else {
                      // Ajouter l'inscription de l'utilisateur
                      const insertQuery = `
                          INSERT INTO inscriptions (utilisateur_id, cours_id, date_inscription)
                          VALUES (?, ?, NOW())
                      `;

                      client.query(insertQuery, [userId, cours.id])
                          .then(() => {
                              res.status(201).json({ message: "Inscription réussie !" });
                          })
                          .catch(insertError => {
                              console.error('Erreur lors de l\'inscription:', insertError);
                              res.status(500).json({ message: "Erreur lors de l'inscription." });
                          });
                  }
              })
              .catch(err => {
                  console.error('Erreur lors de la récupération des inscriptions:', err);
                  res.status(500).json({ message: "Erreur serveur" });
              });
      })
      .catch(err => {
          console.error('Erreur lors de la récupération de l\'utilisateur:', err);
          res.status(500).json({ message: "Erreur serveur" });
      });
});





export default router;