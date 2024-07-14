const express = require('express');
const socket = require('socket.io');
const http = require('http');
const path = require('path');
const {Chess} = require('chess.js');
const { log } = require('console');
const { title } = require('process');

const app = express();

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let player = {};
let currentPlayer = 'w';

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) =>{
    res.render('index', {title:' Chess Game'});
})

io.on('connection', (uniquesocket) =>{
    console.log('connected');
})


server.listen(8080 , ()=>{
    console.log('listening on port 8080');
})