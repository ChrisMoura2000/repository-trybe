const express = require('express')
const app = express()

const httpServer = require('http').createServer(app);

const port = 3000

const socketIO = require('socket.io');
const io = socketIO(httpServer)

app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    io.on('connection', (socket) => {
        socket.emit('ConfigSetup', 'Testando configuração do sockt')
    })
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port port!`))