import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();

interface Cour {
    id: number;
    type_cours: string;
    date_cours: string;
    heure_debut: string;
    heure_fin: string;
    participants?: Participant[];
}
  
interface Participant {
    participant_id: number;
    first_name: string;
    last_name: string;
    email: string;
}


// Endpoint pour la vérification de l'utilisateur
router.get('/', async (req, res) => {
    // Créer une instance du client SQL
    const client = new SQLClient();
  
    try {
      // Première requête : récupérer les cours à venir
      const queryCours = 'SELECT * FROM cours WHERE date_cours >= CURDATE() LIMIT 12';
      const coursResults: Cour[] = await client.query(queryCours); // Récupère tous les cours à venir
  
      if (coursResults.length === 0) {
        return res.status(404).send('Aucun cours trouvé.');
      }
  
      // Pour chaque cours, récupérer les participants
      const coursWithParticipants = await Promise.all(
        coursResults.map(async (cour: Cour) => {
          const queryParticipants = `
            SELECT utilisateurs.id AS participant_id, utilisateurs.last_name, utilisateurs.first_name, utilisateurs.email
            FROM utilisateurs
            JOIN inscriptions ON utilisateurs.id = inscriptions.utilisateur_id
            WHERE inscriptions.cours_id = ?;
          `;
          
          // Exécuter la requête pour obtenir les participants inscrits à ce cours
          const participantsResults: Participant[] = await client.query(queryParticipants, [cour.id]);
  
          // Ajouter les participants au cours
          return { ...cour, participants: participantsResults }; // Utiliser l'opérateur spread pour combiner les données
        })
      );
  
      // Retourner la liste des cours avec leurs participants
      res.json({ cours: coursWithParticipants });
  
    } catch (err) {
      console.error('Erreur lors du chargement des cours et participants:', err);
      res.status(500).send('Erreur lors du chargement des cours et participants.');
    }
});
  
  
  

router.post('/inscription', (req, res) => {
    // Extraire les données envoyées dans le corps de la requête
    const { user, cours } = req.body;
  
    console.log('Utilisateur:', user);
    console.log('Cours:', cours);
  
    // Vérification des champs nécessaires
    if (!user || !cours || !user.nom || !user.prenom || !user.email || !cours.id) {
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
  
        client.query(checkQuery, [userId, cours.id])
          .then(inscriptionResults => {
            if (inscriptionResults.length > 0) {
              // Si l'utilisateur est déjà inscrit
              return res.status(200).json({ message: "L'utilisateur est déjà inscrit à ce cours." });
            } else {
              // Ajouter l'inscription de l'utilisateur au cours
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
          .catch(checkError => {
            console.error('Erreur lors de la vérification de l\'inscription:', checkError);
            res.status(500).json({ message: "Erreur serveur lors de la vérification de l'inscription." });
          });
      })
      .catch(userError => {
        console.error('Erreur lors de la récupération de l\'utilisateur:', userError);
        res.status(500).json({ message: "Erreur serveur lors de la récupération de l'utilisateur." });
      });
});
  







export default router;