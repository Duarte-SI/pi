const Sequelize = require('sequelize');
const Usuario = require('./Usuario'); 
const { DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mssql://duarteBruno:banco1pi2@localhost:1433/HemoPatas');

class Pessoa extends Model {}

Pessoa.init(
    {
        idPessoa:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        Nome:{
            type: DataTypes.CHAR,
            autoIncrement:false,
            allowNull: false
        }
    },
    {
        sequelize: sequelize, modelName:'Pessoa'
    }
)

module.exports=Pessoa;
