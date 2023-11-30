const sequelize = require('sequelize');
const database = require('../db');
const RegistroDoacao = require('./RegistroDoacao.js');
const shema = "";

class RegistroDoacao extends sequelize.Model{}

RegistroDoacao.init(
    {
        idDoacao:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        idAnimal:{
            type: sequelize.INTEGER,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false,
            references:{
                model:'Animal',
                key:'idAnimal'
            }
        },
        idClinica:{
            type: sequelize.INTEGER,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false,
            references:{
                model:'Clinica',
                key:'idClinica'
            }
        },
        idChamado:{
            type: sequelize.INTEGER,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false,
            references:{
                model:'Chamado',
                key:'idChamado'
            }
        },
        idTutor:{
            type: sequelize.INTEGER,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false,
            references:{
                model:'Tutor',
                key:'idTutor'
            }
        }

    },
    {
        sequelize: database, modelName: 'RegistroDoacao',shema
    }
)
module.exports=RegistroDoacao;