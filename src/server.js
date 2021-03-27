const express = require("express")
//const { request } = require("node:http")
const server = express()


//request, response
server.get('/', (request, response) => {
    return response.send('OIIII!!!!')
})

server.listen(3000, () => console.log('rodando'))

