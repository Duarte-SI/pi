const sequelize = require('sequelize');
const database = require('../db');
const Adm = require('./Adm');
const Pessoa = require('./Pessoa');
const shema="";

class Adm extends sequelize.Model{}

Adm.init(
    {
        idPessoa:{
            type: sequelize.INTEGER,
            autoIncrement:false,
            allowNull:false,
            primaryKey:true,
            references:{
                model:'Pessoa',
                key: 'idPessoa'
            }
        },
        email:{
            type: sequelize.CHAR,
            allowNull: false
        },
        senha:{
            type: sequelize.CHAR,
            allowNull:false
        }
  
    },
    {
        sequelize: database, modelName:'Adm',shema
    }
)
Adm.belongsTo(Pessoa, { foreignKey: 'idPessoa' });
module.exports=Adm;
