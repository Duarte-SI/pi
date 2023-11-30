const sequelize = require('sequelize');
const database = require('../db');
const Chamado = require('./Chamado');
const Clinica = require('./Clinica');
const shema="";

class Chamado extends sequelize.Model{}

Chamado.init(
    {
        idChamado:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        idClinica:{
            type: sequelize.INTEGER,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false,
            References:{
                model:'Clinica',
                Key:'idClinica'
            }
        },
        data:{
            type: sequelize.DATE,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false,
        }
    },
    {
        sequelize: database, modelName: 'Chamado',shema
    }
)
Animal.belongsTo(Clinica, { foreignKey: 'idClinica' });
module.exports=Chamado;

