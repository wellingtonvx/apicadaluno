import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

import './database/connection';
import { resolve } from 'path';

import express from 'express';
import route from './routes';

const whiteList = ['http://localhost:3000', 'http://35.232.53.93:80'];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use(route);
  }
}

export default new App().app;
