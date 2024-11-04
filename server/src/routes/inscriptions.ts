import express from 'express';
import bcrypt from 'bcrypt';
import { Client as SQLClient } from '../packages/db/client';

const router = express.Router();

router.post('/', async (req, res) => {
    const { firstName, lastName, email, password, date } = req.body;

    console.log(firstName, lastName, email, password, date)

    if (!firstName || !lastName || !email || !password || !date) {
        return res.status(400).send('Tous les champs sont requis');
    }

    const client = new SQLClient();

    try {
        const userExistsQuery = 'SELECT * FROM utilisateurs WHERE email = ?';
        const existingUsers = await client.query(userExistsQuery, [email]);

        if (existingUsers.length > 0) {
            return res.status(400).send('Un utilisateur avec cet email existe déjà');
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const insertQuery = `
            INSERT INTO utilisateurs (first_name, last_name, email, password, date_of_birth, status, grade)
            VALUES (?, ?, ?, ?, ?, 'user', 'ceinture blanche')
        `;

        await client.query(insertQuery, [firstName, lastName, email, hashedPassword, date]);

        res.status(201).send('Utilisateur enregistré avec succès');

    } catch (error) {
        console.error('Erreur lors de l\'inscription', error);
        res.status(500).send('Erreur lors de l\'inscription');
    }
});

export default router;
