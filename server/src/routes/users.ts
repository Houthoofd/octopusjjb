import express from 'express';
import jwt from 'jsonwebtoken';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();

// Middleware pour vérifier le token JWT
const verifyToken = (req:any, res:any, next:any) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).send('Token manquant, veuillez vous connecter.');
  }

  const secretKey = process.env.TOKEN_SECRET;
  if (!secretKey) {
    return res.status(500).send('Clé secrète JWT manquante.');
  }

  jwt.verify(token, secretKey, (err:any, decoded:any) => {
    if (err) {
      return res.status(403).send('Token invalide ou expiré.');
    }

    req.user = decoded;  // Ajoute l'utilisateur décodé à la requête
    next();
  });
};

router.get('/', verifyToken, async (req, res) => {

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
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        gender: user.gender,
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

router.post('/infos', verifyToken, async (req, res) => {
  const { user_id } = req.body; 
  console.log("Requête reçue avec les données :", req.body);


  const client = new SQLClient();

  try {
     // Requête pour récupérer un utilisateur en fonction de son ID
     const query = `SELECT * FROM utilisateurs WHERE id = ?`;

     const results = await client.query(query, [user_id]); // Utilisation de l'ID de l'utilisateur

    if (results.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }

    const userInfo = {
      email: results[0].email,
      first_name: results[0].first_name,
      last_name: results[0].last_name,
      role: results[0].status,
      gender: null,
      date_of_birth: results[0].date_of_birth,
      grade: null,
      abonnement: null
    };

    // Requête pour récupérer le nom du grade à partir de l'ID du grade
    const gradeQuery = `SELECT grade FROM grades WHERE id = ?`;
    const gradeResults = await client.query(gradeQuery, [results[0].grade]);

    if (gradeResults.length > 0) {
      userInfo.grade = gradeResults[0].grade; // Ajout du nom du grade dans 'grade'
    }

    // Requête pour récupérer le nom du genre à partir de l'ID du genre
    const genreQuery = `SELECT genre_name FROM genres WHERE id = ?`;
    const genreResults = await client.query(genreQuery, [results[0].gender]);

    if (genreResults.length > 0) {
      userInfo.gender = genreResults[0].genre_name; // Ajout du nom du genre dans 'gender'
    }

    // Requête pour récupérer le type d'abonnement à partir de l'ID d'abonnement
    const abonnementQuery = `SELECT nom_plan FROM plans_tarifaires WHERE id = ?`;
    const abonnementResults = await client.query(abonnementQuery, [results[0].abonnement]);

    if (abonnementResults.length > 0) {
      userInfo.abonnement = abonnementResults[0].nom_plan; // Ajout du nom du plan d'abonnement
    }

    console.log("Informations utilisateur trouvées :", userInfo);
    return res.status(200).json(userInfo);

  } catch (err) {
    console.error('Erreur lors de la récupération des informations utilisateur:', err);
    return res.status(500).send('Erreur lors de la récupération des informations.');
  }
});


// Route pour récupérer et mettre à jour les informations utilisateur
router.patch('/update', async (req, res) => {
  const { new_email, new_first_name, new_last_name, current_mail } = req.body;

  // Vérification que l'email actuel est présent
  if (!current_mail) {
    return res.status(400).json({ success: false, message: 'L\'email actuel est requis pour la mise à jour.' });
  }

  try {
    const client = new SQLClient();

    // Étape 1: Récupérer les informations actuelles de l'utilisateur
    const selectQuery = `SELECT * FROM utilisateurs WHERE email = ?;`;
    const resultUtilisateur = await client.query(selectQuery, [current_mail]);

    // Vérifier si l'utilisateur existe
    if (resultUtilisateur.length === 0) {
      return res.status(404).json({ success: false, message: 'Utilisateur non trouvé.' });
    }

    const user = resultUtilisateur[0];  // Informations actuelles de l'utilisateur

    // Étape 2: Mettre à jour les informations de l'utilisateur
    const updatedFirstName = new_first_name || user.first_name;
    const updatedLastName = new_last_name || user.last_name;
    const updatedEmail = new_email || user.email;

    const updateQuery = `
      UPDATE utilisateurs
      SET first_name = ?, last_name = ?, email = ?
      WHERE email = ?;
    `;

    // Exécution de la mise à jour avec les nouvelles données
    const updateResult = await client.query(updateQuery, [updatedFirstName, updatedLastName, updatedEmail, current_mail]);

    if (updateResult.affectedRows === 0) {
      return res.status(500).json({ success: false, message: 'La mise à jour a échoué.' });
    }

    // Étape 3: Récupérer les informations mises à jour
    const updatedRows = await client.query(selectQuery, [updatedEmail]);

    const userInfo = {
      email: updatedRows[0].email,
      first_name: updatedRows[0].first_name,
      last_name: updatedRows[0].last_name,
      role: updatedRows[0].status
    };

    if (updatedRows.length === 0) {
      return res.status(500).json({ success: false, message: 'Erreur lors de la récupération des données mises à jour.' });
    }


    // Répondre avec les informations mises à jour
    res.status(200).json({ success: true, message: 'Utilisateur mis à jour avec succès.', data: userInfo });
  } catch (error) {
    console.error('Erreur lors de la mise à jour des informations utilisateur:', error);
    res.status(500).json({ success: false, message: 'Erreur serveur.' });
  }
});












export default router;