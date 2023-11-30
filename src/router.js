const express = require('express');
const controllerPessoa = require('./controllers/controllerPessoa');
const controllerUsuario = require('./controllers/controllerUsuario');

const routes = express.Router();

routes.get('/List',controllerPessoa.List);
routes.post('/Create',controllerPessoa.Create);
routes.post('/Update/:id',controllerPessoa.Update);
routes.get('/GetOne/:id',controllerPessoa.GetOne);
routes.post('/Delete/:id',controllerPessoa.Delete);

routes.get('/List',controllerUsuario.List);
routes.post('/Create',controllerUsuario.Create);
routes.post('/Update/:id',controllerUsuario.Update);
routes.get('/GetOne/:id',controllerUsuario.GetOne);
routes.post('/Delete/:id',controllerUsuario.Delete);

module.exports = routes;

