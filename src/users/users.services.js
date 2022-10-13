const usersControllers = require('./users.controllers')




// GETTING ALL USER
const getAllUsers = ( req, res ) => {
   usersControllers.getAllUsers()
    .then( response => {
        res.status(200).json({
            mainPage: 'LINK',
            count: 0,
            users: response
        })
    })
    .catch( err => {
        res.status(400).json( {message: err.message} )
    })
};

// GETTING USER BY ID
const getUserById = ( req, res ) => {
    const id = req.params.id
    usersControllers.getUserById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json( {message: err.message} )
        })
};