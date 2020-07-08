const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const GranjaController = require('./controllers/GranjaController');
const LoteController = require('./controllers/LoteController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/login', SessionController.create);
routes.post('/cadastro', GranjaController.create);
routes.post('/setor-lote', LoteController.create);
routes.get('/perfil-lote', LoteController.index);
routes.delete('/perfil-lote/:id', LoteController.delete);


module.exports = routes;
