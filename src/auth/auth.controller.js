//* email & password of user
//? the email is unique in my DB

const { getUserByEmail } = require("../users/users.controllers")
const { comparePassword } = require('../utils/crypto')


const loginUser = async ( email, password ) => {
    //*Este controlador tiene 2 posibles respuestas
    //*1 Las credenciales son validas y retornamos el usuario
    //*2 Las credenciales son validas y retonarmos false  

    try {
        const user = await getUserByEmail(email)
        //? user,password contiene la contraseña encriptada
        const verifyPassword = comparePassword(password, user.password)
        if (verifyPassword) {
            return user
        } else {
            return false
        }

    } catch (err) {
        return false
    }
}
//TEST LOGIN USER
loginUser('jesuschock93@gmail.com','jesus12345')
    .then(res => console.log(res))
    .catch(err => console.log(err))


module.exports = {
    loginUser
}