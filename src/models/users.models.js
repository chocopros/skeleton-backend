// DataTypes --> type of dates (integer, varchar, char) a way to access them from javascript
const { Field } = require('pg-protocol/dist/messages')
const {DataTypes} = require ('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
    
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active',
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'normal',
        allowNull: false
    },
    isValidated: {
        field: 'is_validated',
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false   
    }
});

module.exports = Users