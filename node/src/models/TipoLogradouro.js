const sequelize = require('sequelize');
const database = require('../db');
const TipoLogradouro = require('./TipoLogradouro');
const shema = "";

class TipoLogradouro extends sequelize.Model{}

TipoLogradouro.init(
    {
        idTipoLogradouro:{
            type: sequelize.SMALLINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        descricao:{
            type: sequelize.CHAR,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false
        },

    },
    {
        sequelize: database, modelName: 'TipoLogradouro',shema
    }
)
module.exports=TipoLogradouro;