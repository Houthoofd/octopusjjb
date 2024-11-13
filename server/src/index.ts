import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';

import { default as indexRouter } from './routes';

const __server_dirname = process.cwd ? process.cwd() : process.env.PWD as string;

const app = express();

const corsOptions = {
  origin: 'http://localhost:1234',  // L'origine de ton frontend
  credentials: true,  // Permet d'inclure les cookies
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use( express.static(path.join(__server_dirname, '/server/public')) );

app.use(cors(corsOptions));

app.use('/', indexRouter);

app.listen(3000)