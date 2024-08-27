import path from 'path';
import express from 'express';

const router = express.Router();

import { default as usersRouter } from './users';
import { default as apiRouter } from './api';
import { default as connexionRouter } from './connexion';
import { default as coursRouter } from './cours';
import { default as inscriptionsCoursRouter } from './inscriptions';

// Routes principales
router.use('/users', usersRouter);
router.use('/api', apiRouter);
router.use('/connexion', connexionRouter);
router.use('/cours', coursRouter);
router.use('/inscriptions', inscriptionsCoursRouter);

export default router;
