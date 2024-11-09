import express from 'express';
import bcrypt from 'bcrypt'; 
import { Client as SQLClient } from '../packages/db/client';

const router = express.Router();

// Endpoint de connexion utilisateur
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  // Validation des champs obligatoires
  if (!email || !password) {
    return res.status(400).send('Email et mot de passe sont requis');
  }

  const client = new SQLClient();

  try {
    // Requête pour obtenir l'utilisateur par email
    const query = 'SELECT * FROM utilisateurs WHERE email = ?';
    const values = [email];

    const results = await client.query(query, values);

    // Vérifier si l'utilisateur existe
    if (results.length === 0) {
      return res.status(401).send('Utilisateur non trouvé');
    }

    const user = results[0]; // Récupération du premier résultat (l'utilisateur correspondant à l'email)


    console.log(password,user.password)

    const match = await bcrypt.compare(password, password);
    if (match) {
      // Le mot de passe est correct
      console.log("Connexion réussie !");
    }else {
      // Le mot de passe est incorrect
      console.log("Échec de la connexion !");
    }

    // Structure des données utilisateur à envoyer dans la réponse
    const userData = {
      email: user.email,
      last_name: user.last_name,
      first_name: user.first_name,
      role: user.status // Assurez-vous que la colonne de rôle s'appelle bien 'status' dans votre base de données
    };

    console.log('Utilisateur connecté :', userData);
    res.status(200).json({ message: 'Connexion réussie', userData });

  } catch (err) {
    console.error('Erreur lors de la vérification de l\'utilisateur', err);
    res.status(500).send('Erreur lors de la vérification de l\'utilisateur');
  }
});


export default router;
