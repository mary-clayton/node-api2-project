const server = require('./server.js')

const host = 8000; 

server.listen(8000, () => {
    console.log(`Server running on Server ${host}`)
})