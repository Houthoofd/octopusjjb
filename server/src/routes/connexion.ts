import express from 'express';
import bcrypt from 'bcrypt';  // Importation de bcrypt pour le hachage des mots de passe
import { Client as SQLClient } from '../packages/db/client';

const router = express.Router();

// Endpoint de connexion utilisateur
router.post('/', async (req, res) => {
  const { email, password } = req.body;  // Récupération de l'email et du mot de passe

  // Validation des champs obligatoires
  if (!email || !password) {
    return res.status(400).send('Email et mot de passe sont requis');
  }

  const client = new SQLClient();

  try {
    // Requête pour récupérer l'utilisateur via l'email
    const query = 'SELECT * FROM utilisateurs WHERE email = ?';
    const values = [email];

    const results = await client.query(query, values);

    if (results.length === 0) {
      return res.status(401).send('Utilisateur non trouvé');
    }

    const user = results[0];  // Récupération de l'utilisateur trouvé dans la base de données

    // Comparaison du mot de passe saisi avec le mot de passe haché stocké
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).send('Mot de passe incorrect');
    }

    // Si le mot de passe est correct, renvoyer une réponse de succès
    res.status(200).json({ message: 'Connexion réussie', user });

  } catch (err) {
    console.error('Erreur lors de la vérification de l\'utilisateur', err);
    res.status(500).send('Erreur lors de la vérification de l\'utilisateur');
  }
});

export default router;
