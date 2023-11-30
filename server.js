const express = require('express');

const api = express();

const routes = require("./src/router");

require('./src/models/associacoes');

api.use(express.json());
api.use(routes);

api.listen(4200);