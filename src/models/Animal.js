const sequelize = require('sequelize');
const database = require('../db');
const Animal = require('./Animal');
const Tutor = require('./Tutor');
const EspecieAnimal = require('./EspecieAnimal');
const shema="";

class Animal extends sequelize.Model{}

Animal.init(
    {
        idAnimal:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },
        idTutor:{
            type: sequelize.INTEGER,
            autoIncrement:false,
            allowNull:true,
            primaryKey:true,
            references:{
                Model: 'Tutor',
                key:'idTutor'
            }
        },
        Nome:{
            type: sequelize.CHAR,
            allowNull: false,
            primaryKey:false,
            autoIncrement:false
        },
        idade:{
            type: sequelize.TINYINT,
            autoIncrement: false,
            allowNull: false,
            primaryKey:false
        },
        Peso:{
            type: sequelize.DECIMAL,
            autoIncrement: false,
            allowNull: false,
            primaryKey:false
        },
        idEspecieAnimal:{
            type: sequelize.INTEGER,
            autoIncrement: false,
            allowNull: false,
            primaryKey:false,
            references:{
                Model:'EspecieAnimal',
                key: 'idEspecieAnimal'
            }
        }
    },
    {
        sequelize: database,modelName:'Animal',shema
    }
)
Animal.belongsTo(Tutor, { foreignKey: 'idTutor' });
Animal.belongsTo(EspecieAnimal, { foreignKey: 'idEspecieAnimal' });
module.exports=Animal;