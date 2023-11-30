const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mssql://duarteBruno:banco1pi2@localhost:1433/HemoPatas');
const Usuario = require('./Usuario'); // Importando o model Usuario
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
Pessoa.hasOne(Usuario,{foreignKey:'idUsuario'});
module.exports=Pessoa;
