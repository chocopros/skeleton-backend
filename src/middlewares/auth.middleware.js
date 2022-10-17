//? Middleware para proteger las rutas

//* 1- Revisar si existe un token 
//* 2- Verificar si el token pertenece a un usuario valido
//* 3- Modificar el req y agregar req.user con la infomacion desencriptada del token


// estrategias diferentes de hacer un login (con facebook, Google, JWT, Github)

const JwtStrategy = require('passport').Strategy;  // Passport maneja estrategias para las diferentes tipos de Autentificaciones
const ExtractJwt = require('passport-jwt').ExtractJwt;  // Extrae los header de la peticion

// Exportando funcioon anonima
module.exports = (passport) => {
    const options = {
        
    }
}



