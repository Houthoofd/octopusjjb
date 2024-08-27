import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();


// Endpoint pour la vérification de l'utilisateur
router.get('/', (req, res) => {

  // Requête SQL paramétrée pour éviter les injections SQL
  const query = 'SELECT * FROM cours LIMIT 12';

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

export default router;