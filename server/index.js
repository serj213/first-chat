const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const server = require('http').Server(app);
const io = require('socket.io')(server, { cors: { origin: '*' } })


const PORT = 5000;

const rooms = new Map()

app.get('/', (req, res) => {
    console.log('sssss')
    res.send('Start')
})

io.on('connection', socket => {
    console.log('socket ', socket.id);
})


server.listen(PORT, () => {
    try {
        console.log('server started'); 
    } catch (error) {
        console.log('ошибка сервера ', error);
    }
    
})