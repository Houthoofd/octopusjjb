import path from 'path';
import express from 'express';
const router = express.Router();

import { default as usersRouter } from './users';
import { default as apiRouter } from './api';

router.use( '/users' , usersRouter );
router.use( '/api' , apiRouter );

export default router;
