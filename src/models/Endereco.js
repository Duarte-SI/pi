const sequelize = require('sequelize');
const database = require('../db');
const Endereco = require('./Endereco');
const Cidade = require('./Cidade');
const TipoLogradouro = require('./TipoLogradouro');
const shema = "";

class Endereco extends sequelize.Model{}

Endereco.init(
    {
        idEndereco:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        idTipoLogradouro:{
            type: sequelize.SMALLINT,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false,
            references:{
                model:'TipoLogradouro',
                key:'idTipoLogradouro'
            }
        },
        idCidade:{
            type: sequelize.SMALLINT,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false,
            references:{
                model:'Cidade',
                key:'idCidade'
            }
        },
        numeroEndereco:{
            type: sequelize.INTEGER,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false
        },
        complemento:{
            type: sequelize.CHAR,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false
        },
        bairro:{
            type: sequelize.CHAR,
            allowNull:false,
            autoIncrement:false,
            primaryKey:false
        },

    },
    {
        sequelize: database, modelName: 'Endereco',shema
    }
)
Endereco.hasOne(TipoLogradouro, { foreignKey: 'idTipoLogradouro' });
Endereco.hasOne(Cidade, { foreignKey: 'idCidade' });
module.exports=Endereco;