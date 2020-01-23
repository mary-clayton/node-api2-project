const server = require('./server.js')
require('dotenv').config()

const host = process.env.PORT; 

server.listen(host, () => {
    console.log(`Server running on Server ${host}`)
})