import dotenv from 'dotenv';

dotenv.config();

import './database/connection';
import { resolve } from 'path';

import express from 'express';
import route from './routes';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use(route);
  }
}

export default new App().app;
