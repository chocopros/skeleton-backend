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
            res.status(404).json( {message: err.message} )
        })
};

// REGISTER USER
const registerUser = ( req, res ) => {

    const { firstName, lastName, gender, email, password, phone, birthday, country } = req.body

    if ( firstName && lastName && gender && email && password && phone && birthday && country ) {
        usersControllers.createUser({firstName, lastName, gender, email, password, phone, birthday, country})
        .then(data => {
            res.status(200).json({message: 'New User ha sido creado'})
        })
        .catch(err => {
            res.status(400).json( {message: err.message} )
        })
    } else {
        res.status(400).json( {
            message: 'All fields must be completed', 
            fields: {
                firstName: 'string',
                lastName: 'string',
                gender: 'string',
                email: 'example@dominio.com',
                password: 'string',
                phone: '+584148888888',
                birthday: 'YYYY/MM/DD',
                country: 'string'
            }
        })
    }
}


// PACTH USER BY ID
const patchUser = ( req, res ) => {
    const id = req.params.id
    const { firstName, lastName, phone, gender, country } = req.body

    usersControllers.updateUser( id, {firstName, lastName, phone, gender, country} )
        .then(data => {
           if (data[0]) {
            res.status(200).json( {message: `User with ID:${id}, edited succesfully!`} )
           } else {
            res.status(404).json( {message: 'Invalid ID or Not exist'} )
           }
        })
        .catch(err => {
            res.status(400).json( {message: err.message} )
        })

};


// DELETE USER BY ID
const deleteUser = ( req, res ) => {
    const id = req.params.id
    usersControllers.deleteUser(id)
        .then(data => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(400).json({message: 'Invalid ID or Not exist'})
            }
        })
        .catch(err => {
            res.status(400).json( {message: err.message} )
        })
};



// My User services
const getMyUser = ( req, res ) => {

    const id = req.user.id //req.user contiene la informacion del token desencriptado
    
    usersControllers.getUserById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch( err => res.status(400).json({message: err.message}))
}



module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    patchUser,
    deleteUser,
    getMyUser
}