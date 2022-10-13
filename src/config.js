//? Dependencies

//access variable de entorno
require('dotenv').config()


const config = {
    port: process.env.PORT || 9000, // process para accerder a las variables de entorno
    nodeEnv: process.env.NODE_ENV || 'development', //? Desarrollo, Tesiting & Produccion
    db: {
        dbName: process.env.DB_NAME,
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'root'
    }
}

module.exports = config


