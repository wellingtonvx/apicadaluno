"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _HomeController = require('./controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);
var _UserController = require('./controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _AlunoController = require('./controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _UploadController = require('./controllers/UploadController'); var _UploadController2 = _interopRequireDefault(_UploadController);

var _TokenController = require('./controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

var _loginRequired = require('./middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const route = new (0, _express.Router)();

// Rotas de checagem - tokens - Login
route.post('/login', _TokenController2.default.store);

// rotas da homepage
route.get('/', _HomeController2.default.index);

// rotas do user
// route.get('/users', UserController.index);
// route.get('/users/', UserController.show);

route.post('/users', _UserController2.default.store);
route.put('/users', _loginRequired2.default, _UserController2.default.update);
route.delete('/users', _loginRequired2.default, _UserController2.default.delete);

// rotas de alunos
route.get('/alunos', _AlunoController2.default.index);
route.get('/alunos/:id', _AlunoController2.default.show);
route.post('/alunos', _loginRequired2.default, _AlunoController2.default.store);
route.put('/alunos/:id', _loginRequired2.default, _AlunoController2.default.update);
route.delete('/alunos/:id', _loginRequired2.default, _AlunoController2.default.delete);

// rota de upload
route.post('/upload', _loginRequired2.default, _UploadController2.default.store);

exports. default = route;
