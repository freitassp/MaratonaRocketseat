const express = require("express")
const server = express()

//habilitar arquivos statics
server.use(express.static("public"))

//request, response
server.get('/', (request, response) => {
    //console.log(__dirname + "/views/index.html")
    return response.sendFile(__dirname + "/views/index.html")
})

server.listen(3000, () => console.log('rodando'))

