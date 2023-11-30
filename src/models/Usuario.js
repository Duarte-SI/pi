const sequelize = require('sequelize');
const database = require('../db');
const Tutor = require('./Tutor');
const Clinica = require('./Clinica');
const shema="";

class Usuario extends sequelize.Model{}

Usuario.init(
    {
        idUsuario:{
            type: sequelize.INTEGER,
            autoIncrement:false,
            allowNull:false,
            primaryKey:true,
            references: {
                model:'Pessoa',
                key: 'idPessoa',
            },
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
        sequelize: database, modelName:'Usuarios',shema
    }
)
module.exports=Usuario;

