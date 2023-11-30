const { DataTypes, Model } = require('sequelize');
const db = require('../db'); // Supondo que 'db' seja a instância do Sequelize
const Usuario = require('./Usuario');
const Pessoa = require('./Pessoa');

class Tutor extends Model {}

Tutor.init(
    {
        idTutor: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Pessoa',
                key: 'idPessoa'
            },
        },
    },
    {
        sequelize: db,
        modelName: 'Tutor'
    }
);



module.exports = Tutor;
