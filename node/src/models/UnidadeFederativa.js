const sequelize = require('sequelize');
const database = require('../db');
const UnidadeFederativa = require('./UnidadeFederativa');
const shema = "";

class UnidadeFederativa extends sequelize.Model{}

UnidadeFederativa.init(
    {
        UF:{
            type: sequelize.CHAR,
            autoIncrement: false,
            allowNull: false,
            primaryKey:true
        },
        nomeEstado:{
            type: sequelize.CHAR,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false
        },

    },
    {
        sequelize: database, modelName: 'UnidadeFederativa',shema
    }
)
module.exports=UnidadeFederativa;