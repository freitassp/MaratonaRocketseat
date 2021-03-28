const express = require("express")

//const { request } = require("node:http")
const server = express()


//request, response
server.get('/', (request, response) => {
    //console.log(__dirname + "/views/index.html")
    return response.sendFile(__dirname + "/views/index.html")
})

server.listen(3000, () => console.log('rodando'))

