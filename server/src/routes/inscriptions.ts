import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();


// Endpoint pour la vérification de l'utilisateur
router.post('/', (req, res) => {
    res.send({message: "ljflzeg"})
//   const { first_name } = req.body;

//   if (!first_name) {
//     return res.status(400).send('Le prénom est requis');
//   }

//   const query = 'SELECT * FROM utilisateurs WHERE first_name = ?';

//   const client = new SQLClient();

//   client.query(query, [first_name])
//     .then(results => {
//       if (results.length > 0) {
//         res.json(results);
//       } else {
//         res.status(404).send('Utilisateur non trouvé');
//       }
//     })
//     .catch(err => {
//       console.error('Erreur lors du chargement des utilisateurs', err);
//       res.status(500).send('Erreur lors du chargement des utilisateurs');
//     });
});

export default router;