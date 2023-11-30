const sequelize = require("sequelize");
const database = require('../db');
const ListaAnimal = require('./ListaAnimal');
const shema="";

class ListaAnimal extends sequelize.model{}

ListaAnimal.init(
    {
        idAnimal:{
            type: sequelize.INTEGER,
            autoIncrement:false,
            allowNull:false,
            primarykey:true,
            references:{
                model:'Animal',
                key:'idAnimal'
            }
        },
        idTutor:{
            type: sequelize.INTEGER,
            autoIncrement:false,
            allowNull:false,
            primarykey:true,
            references:{
                model:'Tutor',
                key:'idTutor'
            }
        }
    },
    {
        sequelize: database,modelName:'ListaAnimal',shema
    }
)
module.exports=ListaAnimal;