const { Server } = require('socket.io')

const express = require('express')
const app = express()

app.use(express.json())

const http = require('http')
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost',
        methods: ['GET', 'POST']
    }}
)

const port = process.env.PORT || 2000
server.listen(port)

require('dotenv').config()


app.use('/', express.static('./dist'))

console.log('Port: ' + port)