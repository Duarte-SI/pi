const sequelize = require('sequelize');
const database = require('../db');
const Cidade = require('./Cidade');
const UnidadeFederativa = require('./UnidadeFederativa');
const shema="";

class Cidade extends sequelize.Model{}

Cidade.init(
    {
        idCidade:{
            type: sequelize.SMALLINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        UF:{
            type: sequelize.CHAR,
            allowNull:false,
            primaryKey:false,
            references:{
                model:'UnidadeFederativa',
                key:'UF'
            }
        },
        nome:{
            type: sequelize.CHAR,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false
        },
        CEP:{
            type: sequelize.INTEGER,
            allowNull: false,
            autoIncrement:false,
            primaryKey:false
        }
    },
    {
        sequelize: database,modelName:'Cidade',shema
    }
)
Cidade.belongsTo(UnidadeFederativa, { foreignKey: 'UF' });
module.exports=Cidade;

