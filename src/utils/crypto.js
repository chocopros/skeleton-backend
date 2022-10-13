const bcrypt = require('bcrypt')

// ENCRYP PASSWORD
const hashPassword = plainPassword => {
    const hashedPassword = bcrypt.hashSync( plainPassword, 10 )
    return hashedPassword
}
//TEST
// console.log(hashPassword('jesus'))


// Comparar password si es ('jesus ') = a lo generado
const comparePassword = ( plainPassword, hashedPassword ) => {
    return bcrypt.compareSync( plainPassword, hashedPassword )
}
//TEST
// console.log(comparePassword('jesus','$2b$10$EXJr9E3xASUhAcayLQg6Z.g0nzWoAwhi5Sx/xYxdP1GonqgbS7d2m'))

module.exports = {
    hashPassword,
    comparePassword
}