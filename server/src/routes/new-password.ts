import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();


// Endpoint pour la vérification de l'utilisateur
router.get('/', (req, res) => {
  res.send('toto')
});

export default router;