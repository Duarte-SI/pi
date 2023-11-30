const sequelize = require("sequelize");
const database = require('../db');
const EspecieAnimal = require('./EspecieAnimal');
const RacaAnimal = require('./RacaAnimal');
const shema="";

class EspecieAnimal extends sequelize.model{}

EspecieAnimal.init(
    {
        idEspecieAnimal:{
            type: sequelize.INTEGER,
            primarykey:true,
            autoIncrement:true,
            allowNull:false
        },
        idRacaAnimal:{
            type: sequelize.INTEGER,
            autoIncrement:false,
            allowNull:false,
            primarykey:false,
            references:{
                model:'RacaAnimal',
                key:'idRacaAnimal'
            }
        },
        descricao:{
            type: sequelize.CHAR,
            allowNull:false,
            primarykey:false,
            autoIncrement:false
        }
    },
    {
        sequelize: database,modelName:'EspecieAnimal',shema
    }
)
EspecieAnimal.belongsTo(RacaAnimal, { foreignKey: 'idRacaAnimal' });
module.exports=EspecieAnimal;