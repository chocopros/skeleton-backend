//Create conection to DATABASE
const { Sequelize } = require("sequelize");
//import configs
const config = require('../config')

const db = new Sequelize({
    dialect: 'postgres',
    host: config.db.host, //variable de entorno host
    username: config.db.username, //variable de entorno user o usuario
    password: config.db.password, //variable de entorno contraseña
    database: config.db.dbName   //variable de entorno data base
})

module.exports = db

