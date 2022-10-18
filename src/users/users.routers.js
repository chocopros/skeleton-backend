const route = require('express').Router()
const passport = require('passport') //proteger Rutas
const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport) // para proteger rutas

// Ruta raiz
route.get('/' , passport.authenticate('jwt', {session: false}) , userServices.getAllUsers)

//TODO el registerUser ira en la ruta /auth/register




// rutas dinamicas por ID /users/:id
//FORMA PASADA
// router.get('/:id')
// router.path('/:id')
// router.put('/:id')
// router.delete('/:id') --------> FORMA PASADA

 
//? Rutas Dinamicas por ID
route.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)


    
module.exports = route
