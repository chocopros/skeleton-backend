// Dependencies
const uuid = require('uuid')
const Users = require ('../models/users.models');
const { hashPassword } = require('../utils/crypto');

// GET ALL USER
const getAllUsers = async () => {
    const data = await Users.findAll()
    return data
};


// COUNT USER
const getCountUsers = async () => {
    const data = await Users.findAll()
    return data.length
};


// GET ONLY USER
const getUserById = async () => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    });
    return data
};


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
    return newUser
};


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

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}