import path from 'path';
import express from 'express';

const router = express.Router();

import { default as connexionRouter } from './connexion';
import { default as coursRouter } from './cours';
import { default as inscriptionsCoursRouter } from './inscriptions';
import { default as inscriptionsCoursEssaiesRouter } from './reservations';
import { default as profileRouter } from './new-password';
import { default as compteRouter } from './new-password';
import { default as infosRouter } from './new-password';
import { default as newPasswordRouter } from './new-password';

// Routes principales
router.use('/connexion', connexionRouter);
router.use('/cours', coursRouter);
router.use('/inscriptions', inscriptionsCoursRouter);
router.use('/reservations', inscriptionsCoursEssaiesRouter);
router.use('/password', newPasswordRouter);
router.use('/profile', profileRouter);
router.use('/compte', compteRouter);
router.use('/infos', infosRouter);





export default router;
