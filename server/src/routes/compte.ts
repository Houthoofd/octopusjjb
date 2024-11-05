import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();


router.get('/', (req, res) => {
  res.send('compte')
});

export default router;