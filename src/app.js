//? Dependencies
const express = require('express')
//? Initials Configs
const app = express()
//? Used file json
app.use(express.json())
//? FILES
const {port} = require('./config')



app.get('/', ( req, res ) => {
    res.status(200).json({
        message: 'OK!!',
        users: `localhost:${port}/api/v1/users`
    })
})



app.listen(port, () => {
    console.log(`SERVER STARTED AT PORT ${port}`)
})