const sequelize = require('sequelize');

const database = new sequelize('HemoPatas','duarteBruno','banco1pi2',
{
    dialect:'mssql', host:'localhost', port:1433
});

database.sync();

module.export = database;