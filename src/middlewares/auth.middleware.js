//? Middleware para proteger las rutas

//* 1- Revisar si existe un token 
//* 2- Verificar si el token pertenece a un usuario valido
//* 3- Modificar el req y agregar req.user con la infomacion desencriptada del token


// estrategias diferentes de hacer un login (con facebook, Google, JWT, Github)

const JwtStrategy = require('passport-jwt').Strategy;  // Passport maneja estrategias para las diferentes tipos de Autentificaciones
const ExtractJwt = require('passport-jwt').ExtractJwt;   // Extrae los header de la peticion

const { jwtSecret } = require('../config'); //importando la clave secreta
const { getUserById } = require('../users/users.controllers');

// Exportando funcioon anonima
module.exports = (passport) => {
    const options = {
        jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: jwtSecret
    }
    passport.use(
        new JwtStrategy(options, async(decoded, done) => {
            //? done(error, decoded)
            try {
                const response = await getUserById(decoded.id)
                if(!response){
                    return done(null, false)
                }
                console.log('decoded JWT', decoded)
                return done(null, decoded)
            } catch (error) {
                return done(error, false)
            }
        })
    )
}




