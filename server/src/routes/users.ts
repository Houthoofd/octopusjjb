import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();


router.get('/', async (req, res) => {

  const client = new SQLClient();

  try {
    // Requête pour récupérer tous les utilisateurs
    const query = `
      SELECT * FROM utilisateurs`;

    const results = await client.query(query); // Pas besoin de `values` ici

    if (results.length === 0) {
      return res.status(404).send('Aucun utilisateur trouvé.');
    }

    console.log(results);

    // Tableau pour stocker les informations des utilisateurs
    const usersInfo = [];

    // Boucle pour récupérer les informations de chaque utilisateur
    for (const user of results) {
      const userInfo = {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.status,
        gender: user.gender,
        date_of_birth: user.date_of_birth,
        grade: null // Initialisé à null
      };

      // Requête pour récupérer le nom du grade à partir de l'ID du grade
      const gradeQuery = `
        SELECT grade FROM grades WHERE id = ?`;
      const gradeResults = await client.query(gradeQuery, [user.grade]);

      if (gradeResults.length > 0) {
        userInfo.grade = gradeResults[0].grade; // Ajout du nom du grade
      }

      // Ajouter l'objet utilisateur avec le grade au tableau
      usersInfo.push(userInfo);
    }

    console.log("Informations utilisateurs trouvées :", usersInfo);
    return res.status(200).json(usersInfo);

  } catch (err) {
    console.error('Erreur lors de la récupération des informations des utilisateurs :', err);
    return res.status(500).send('Erreur lors de la récupération des informations.');
  }
});






export default router;