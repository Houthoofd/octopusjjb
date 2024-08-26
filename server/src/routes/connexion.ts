import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();


// Endpoint pour la vérification de l'utilisateur
router.post('/', (req, res) => {
  const { email, password } = req.body; // Récupération des données du corps de la requête

  // Requête SQL paramétrée pour éviter les injections SQL
  const query = 'SELECT * FROM utilisateurs WHERE email = ? AND password = ?';
  const values = [email, password];

  const client = new SQLClient();

  client.query(query, values)
    .then(results => {
      if (results.length > 0) {
        res.json(results)
      } else {
        res.status(401).send('Utilisateur non trouvé ou mot de passe incorrect');
      }
    })
    .catch(err => {
      console.error('Erreur lors de la vérification de l\'utilisateur', err);
      res.status(500).send('Erreur lors de la vérification de l\'utilisateur');
    });
});

export default router;