const server = require('./src/server')

const SERVER_PORT = 8090

server.listen(SERVER_PORT, () => {

    console.log(`Inicializado em http://localhost:${SERVER_PORT}`)


})
