// Dependencies
const uuid = require('uuid')
const Users = require ('../models/users.models');
const { hashPassword } = require('../utils/crypto');

// GET ALL USER
const getAllUsers = async () => {
    const data = await Users.findAll()
    return data
};
//TEST GET ALL USER
// getAllUsers()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))



// COUNT USER 
const getCountUsers = async () => {
    const data = await Users.findAll()
    return data.length
};
//TEST COUNT USER
// getCountUsers()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))



// GET ONLY USER
const getUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    });
    return data
};
//TEST GET USER BY ID
// getUserById('4afd90a6-a119-41ea-b0c8-94d50374a11d')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))



// CREATE USER
const createUser = async data => {
    const newUserUUID = uuid.v4()
    const newUser = await Users.create({
        id: newUserUUID,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        email: data.email,
        password: hashPassword(data.password),
        phone: data.phone,
        birthday: data.birthday,
        country: data.country
    });
    console.log('NEW USER CREATE NOW!!!')
    return newUser
};

//TEST CREATE USER

// createUser({
//     firstName: 'anmy',
//     lastName: 'moreno',
//     gender: 'femenino',
//     email: 'anmymoreno@gmail.com',
//     password: 'anmy1234',
//     phone: '+584148989898',
//     birthday: '1990/10/23',
//     country: 'venezuela'
// })


// UPDATE USER
const updateUser = async ( id, data ) => {
    const result = await Users.update(data, {
        where: {
            id: id
        }
    });
    return result
};


//DELETE USER
const deleteUser = async id => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    });
    return data
};

const getUserByEmail = async (email) => {
    //? SELECT * FROM users where email = 'jesus@gmail.com'
    const data = await Users.findOne({
        where: {
            email: email
        }
    });
    return data
};
//TEST GET USER FOR EMAIL
// getUserByEmail('jesuschock93@gmail.com')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail
}