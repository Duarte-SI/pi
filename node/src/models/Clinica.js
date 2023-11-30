const sequelize = require('sequelize');
const database = require('../db');
const Clinica = require('./Clinica');
const Pessoa = require('./Pessoa');
const shema="";

class Clinica extends sequelize.Model{}

Clinica.init(
    {
        idClinica:{
            type: sequelize.INTEGER,
            autoIncrement: false,
            allowNull: false,
            primaryKey: true,
            references:{
                model: 'Pessoa',
                key:'idPessoa'
            },
        },
        idEndereco:{
            type: sequelize.INTEGER,
            foreignKey:true,
            allowNull:false,
            references:{
                model:'Endereco',
                key:'idEndereco'
            }
        }
    },
    {
        sequelize: database, modelName:'Clinica',shema
    }
)
module.exports= Clinica;


Clinica.belongsTo(Usuario,{foreignKey: 'idUsuario'});