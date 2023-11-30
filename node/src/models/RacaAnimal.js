const sequelize = require('sequelize');
const database = require('../db');
const RacaAnimal = require('./RacaAnimal');
const shema="";

class RacaAnimal extends sequelize.Model{}

RacaAnimal.init(
    {
        idRacaAnimal:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },
 
        descricao:{
            type: sequelize.CHAR,
            allowNull: false,
            primaryKey:false,
            autoIncrement:false
        },
   
    },
    {
        sequelize: database,modelName:'RacaAnimal',shema
    }
)
module.exports=RacaAnimal;