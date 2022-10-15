//? Dependencies
const express = require('express')
//? Initials Configs
const app = express()
//? Used file json
app.use(express.json())
//? FILES
const {port} = require('./config')
//? IMPORT Routes
const userRouter = require('./users/users.routers')


app.get('/', ( req, res ) => {
    res.status(200).json({
        message: 'OK!!',
        users: `localhost:${port}/api/v1/users`
    })
})

app.use('/api/v1/users', userRouter)


app.listen(port, () => {
    console.log(`SERVER STARTED AT PORT ${port}`)
})