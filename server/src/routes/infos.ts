import express from 'express';
import jwt from 'jsonwebtoken';
import { Client as SQLClient } from '../packages/db/client';

const router = express.Router();

// Middleware pour vérifier le token JWT
// const verifyToken = (req:any, res:any, next:any) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(403).send('Token manquant, veuillez vous connecter.');
//   }

//   const secretKey = process.env.TOKEN_SECRET;
//   if (!secretKey) {
//     return res.status(500).send('Clé secrète JWT manquante.');
//   }

//   jwt.verify(token, secretKey, (err:any, decoded:any) => {
//     if (err) {
//       return res.status(403).send('Token invalide ou expiré.');
//     }

//     req.user = decoded;  // Ajoute l'utilisateur décodé à la requête
//     next();
//   });
// };

router.post('/', async (req, res) => {
  // Tester sans vérifier les permissions
  console.log("Requête reçue avec les données :", req.body);

  const { email, first_name, last_name } = req.body;
  if (!email || !first_name || !last_name) {
    return res.status(400).send('Tous les champs sont requis.');
  }

  const client = new SQLClient();
  try {
    const query = `
      SELECT * FROM utilisateurs 
      WHERE email = ? AND first_name = ? AND last_name = ?`;
    const values = [email, first_name, last_name];
    const results = await client.query(query, values);

    if (results.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }

    const userInfo = {
      email: results[0].email,
      first_name: results[0].first_name,
      last_name: results[0].last_name,
      role: results[0].status,
      gender: results[0].gender,
      date_of_birth: results[0].date_of_birth,
      grade: null,
      abonnement: null
    };

    // Récupérer le grade, le genre et l'abonnement ici...
    return res.status(200).json(userInfo);
  } catch (err) {
    console.error('Erreur lors de la récupération des informations utilisateur:', err);
    return res.status(500).send('Erreur lors de la récupération des informations.');
  }
});


// Appliquer le middleware de vérification du token sur ce routeur
router.get('/abonnement', async (req, res) => {
  const client = new SQLClient();

  try {
    // Requête pour récupérer les noms des abonnements et leurs prix
    const query = `
      SELECT nom_plan, prix
      FROM plans_tarifaires`;
    
    const results = await client.query(query);

    if (results.length === 0) {
      return res.status(404).send('Aucun plan tarifaire trouvé.');
    }

    // Extraire les noms des abonnements et les prix sous forme d'objets
    const abonnements = results.map(plan => ({
      nom_plan: plan.nom_plan,
      prix: plan.prix
    }));

    console.log("Plans tarifaires trouvés :", abonnements);
    return res.status(200).json(abonnements);

  } catch (err) {
    console.error('Erreur lors de la récupération des plans tarifaires:', err);
    return res.status(500).send('Erreur lors de la récupération des plans tarifaires.');
  }
});

// Appliquer le middleware de vérification du token sur ce routeur
router.get('/gender', async (req, res) => {
  const client = new SQLClient();

  try {
    // Requête pour récupérer les noms des abonnements et leurs prix
    const query = `
      SELECT genre_name
      FROM genres`;
    
    const results = await client.query(query);

    if (results.length === 0) {
      return res.status(404).send('Aucun plan tarifaire trouvé.');
    }

    // Extraire les noms des abonnements et les prix sous forme d'objets
    const genres = results.map(genre => ({
      genre: genre.genre_name
    }));

    console.log("Plans genres trouvés :", genres);
    return res.status(200).json(genres);

  } catch (err) {
    console.error('Erreur lors de la récupération des plans tarifaires:', err);
    return res.status(500).send('Erreur lors de la récupération des plans tarifaires.');
  }
});

// Appliquer le middleware de vérification du token sur ce routeur
router.get('/grade', async (req, res) => {
  const client = new SQLClient();

  try {
    // Requête pour récupérer les noms des abonnements et leurs prix
    const query = `
      SELECT *
      FROM grades`;
    
    const results = await client.query(query);

    if (results.length === 0) {
      return res.status(404).send('Aucun plan tarifaire trouvé.');
    }

    console.log("grades trouvés :", results);
    return res.status(200).json(results);

  } catch (err) {
    console.error('Erreur lors de la récupération des plans tarifaires:', err);
    return res.status(500).send('Erreur lors de la récupération des plans tarifaires.');
  }
});




export default router;
