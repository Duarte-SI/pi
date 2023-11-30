const sequelize = require('sequelize');
const database = require('../db');
const Tutor = require('./Tutor');
const Pessoa = require('./Pessoa');
const shema="";

class Tutor extends sequelize.Model{}

Tutor.init(
    {
        idTutor:{
            type: sequelize.INTEGER,
            autoIncrement: false,
            allowNull: false,
            primaryKey:true,
            references:{
                model: 'Pessoa',
                key: 'idPessoa'
            },
        },
    },
    {
        sequelize: database, modelName: 'Tutor',shema
    }
)
module.exports=Tutor;


Tutor.belongsTo(Pessoa,{foreignKey: 'idTutor'});