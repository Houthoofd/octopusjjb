import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();



router.post('/', async (req, res) => {
  const utilisateurs = req.body; // Récupérer le tableau des utilisateurs

  const client = new SQLClient(); // Créer une instance du client à l'extérieur de la boucle

  try {

      for (const utilisateur of utilisateurs) {
          const { nom, email, cours } = utilisateur; // Récupérer les données de l'utilisateur

          // Étape 1: Insérer l'utilisateur dans la table `utilisateurs`
          const userQuery = `INSERT INTO utilisateurs (first_name, email) VALUES (?, ?)`;
          const userValues = [nom, email];

          const userResult = await client.query(userQuery, userValues);
          const utilisateurId = userResult.insertId; // Récupérer l'ID de l'utilisateur

          console.log("Utilisateur inséré avec succès, ID:", utilisateurId);

          // Étape 2: Créer la réservation pour chaque cours associé à l'utilisateur
          for (const cour of cours) {
              const { id: coursId } = cour; // Récupérer l'ID du cours depuis la requête

              // Étape 3: Créer la réservation
              await client.query(
                  'INSERT INTO reservations (utilisateur_id, cours_id) VALUES (?, ?)', 
                  [utilisateurId, coursId]
              );

              console.log(`Réservation créée pour l'utilisateur ID: ${utilisateurId} et le cours ID: ${coursId}`);
          }
      }

      res.status(201).json({ message: 'Utilisateurs et réservations créés avec succès.' });
  } catch (error) {
      console.error('Erreur lors de la création des utilisateurs et réservations:', error);
      res.status(500).json({ error: 'Erreur serveur lors de la création.' });
  }
});






export default router;