import { Router } from 'express';

import homeController from './controllers/HomeController';
import UserController from './controllers/UserController';
import AlunoController from './controllers/AlunoController';
import UploadController from './controllers/UploadController';

import TokenController from './controllers/TokenController';

import LoginRequired from './middlewares/loginRequired';

const route = new Router();

// Rotas de checagem - tokens - Login
route.post('/login', TokenController.store);

// rotas da homepage
route.get('/', homeController.index);

// rotas do user
// route.get('/users', UserController.index);
// route.get('/users/', UserController.show);

route.post('/users', LoginRequired, UserController.store);
route.put('/users', LoginRequired, UserController.update);
route.delete('/users', LoginRequired, UserController.delete);

// rotas de alunos
route.get('/alunos', AlunoController.index);
route.get('/alunos/:id', AlunoController.show);
route.post('/alunos', LoginRequired, AlunoController.store);
route.put('/alunos/:id', LoginRequired, AlunoController.update);
route.delete('/alunos/:id', LoginRequired, AlunoController.delete);

// rota de upload
route.post('/upload', LoginRequired, UploadController.store);

export default route;
