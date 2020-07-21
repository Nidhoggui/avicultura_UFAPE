const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const GranjaController = require('./controllers/GranjaController');
const LoteController = require('./controllers/LoteController');
const SessionController = require('./controllers/SessionController');
const AlbúmenController = require('./controllers/AlbúmenController');
const CascaController = require('./controllers/CascaController');
const GemaController = require('./controllers/GemaController');
const OvoController = require('./controllers/OvoController');

const routes = express.Router();

routes.post('/login', SessionController.create);

routes.post('/cadastro', GranjaController.create);
routes.get('/listar-granjas',GranjaController.index);

routes.post('/setor-lote', LoteController.create);
routes.get('/perfil-lote', LoteController.index);
routes.delete('/perfil-lote/:id', LoteController.delete);

routes.post('/albumen', AlbúmenController.create);
routes.delete('/revisar-ovo/albumen/:id', AlbúmenController.delete);
routes.put('/revisar-ovo/albumen/:id', AlbúmenController.update);
routes.post('/casca', CascaController.create);
routes.delete('/revisar-ovo/casca/:id', CascaController.delete);
routes.put('/revisar-ovo/casca/:id', CascaController.update);
routes.post('/gema',GemaController.create);
routes.get('/lista-gemas', GemaController.index);
routes.delete('/revisar-ovo/gema/:id', GemaController.delete);
routes.put('/revisar-ovo/gema/:id', GemaController.update);

routes.post('/ovo', OvoController.create);
routes.get('/perfil-ovos' , OvoController.index);
routes.delete('/perfil-ovos/:id', OvoController.delete);
routes.put('/perfil-ovos/:id', OvoController.update);

module.exports = routes;
