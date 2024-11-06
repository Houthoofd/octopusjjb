import express from 'express';
import { Client as SQLClient } from '../packages/db/client';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, prenom, nom, role } = req.body; 
  console.log("Requête reçue avec les données :", req.body);

  if (!email || !prenom || !nom || !role) {
    return res.status(400).send('Tous les champs sont requis.');
  }

  const client = new SQLClient();

  try {
    // Requête pour récupérer l'utilisateur
    const query = `
      SELECT * FROM utilisateurs 
      WHERE email = ? AND first_name = ? AND last_name = ? AND status = ?`;
    const values = [email, prenom, nom, role];

    const results = await client.query(query, values);

    if (results.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }

    // L'objet userInfo avec uniquement 'grade' pour le nom du grade, initialisé à null
    const userInfo = {
      email: results[0].email,
      first_name: results[0].first_name,
      last_name: results[0].last_name,
      role: results[0].status,
      gender: results[0].gender,
      date_of_birth: results[0].date_of_birth,
      grade: null // Initialisé à null
    };

    // Requête pour récupérer le nom du grade à partir de l'ID du grade
    const gradeQuery = `
      SELECT grade FROM grades WHERE id = ?`; // Recherche par ID du grade
    const gradeResults = await client.query(gradeQuery, [results[0].grade]);

    if (gradeResults.length > 0) {
      userInfo.grade = gradeResults[0].grade; // Ajout du nom du grade dans 'grade'
    } else {
      userInfo.grade = null; // Valeur par défaut si aucune correspondance
    }

    console.log("Informations utilisateur trouvées :", userInfo);
    return res.status(200).json(userInfo);

  } catch (err) {
    console.error('Erreur lors de la récupération des informations utilisateur:', err);
    return res.status(500).send('Erreur lors de la récupération des informations.');
  }
});




export default router;
