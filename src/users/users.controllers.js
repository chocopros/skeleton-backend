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
const getuserById = async () => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    });
    return data
};

// CREATE USER

const createUser = async data => {
    const newUser = await Users.create({
        id: uuid.v4(),
        password: hashPassword(data.password)
    });
    return newUser
};