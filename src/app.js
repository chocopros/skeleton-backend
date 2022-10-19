//? Dependencies
const express = require('express')
const db = require('./utils/database')
//? Initials Configs
const app = express()
//? Used file json
app.use(express.json())
//? FILES
const {port} = require('./config')
const Users = require('./models/users.models')
//? IMPORT Routes
const userRouter = require('./users/users.routers')
const authRouter = require('./auth/auth.router')
const initModels = require('./models/initModels')


//DATABASE AUTH AND SYNC
db.authenticate()
    .then(() => console.log('DATABASE AUTHENTIFICATED'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('DATA BASE SYNCED!!'))
    .catch(err => console.log(err))


    
app.get('/',( req, res ) => {
    res.status(200).json({
        message: 'OK!!',
        users: `localhost:${port}/api/v1/users`
    })
})

initModels()

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)




app.listen(port, () => {
    console.log(`SERVER STARTED AT PORT ${port}`)
})