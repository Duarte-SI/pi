const sequelize = require('sequelize');
const database = require('../db');
const Telefone = require('./Telefone');
const shema = "";

class Telefone extends sequelize.Model{}

Telefone.init(
    {
        sequencia:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        idUsuario:{
            type: sequelize.INTEGER,
            allowNull:false,
            autoIncrement:false,
            primaryKey:true,
            references:{
                model:'Usuario',
                key:'idUsuario'
            }
        },
        numeroTelefone:{
            type: sequelize.INTEGER,
            allowNull:false,
            primaryKey:false,
            autoIncrement:false
        },
        DDD:{
            type: sequelize.TINYINT,
            allowNull:false,
            primaryKey:false,
            autoIncrement:false
        },
        DDI:{
            type: sequelize.SMALLINT,
            allowNull:false,
            primaryKey:false,
            autoIncrement:false
        }

    },
    {
        sequelize: database, modelName: 'Telefone',shema
    }
)
Telefone.belongsTo(Usuario, { foreignKey: 'idUsuario' });
module.exports=Telefone;