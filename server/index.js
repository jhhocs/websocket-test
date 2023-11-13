//https://socket.io/docs/v4/tutorial/step-4

const express = require('express');
const { createServer } = require('http');
//const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require("cors");


const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
    cors: {
        //origin: "http://localhost:3000",
        origin: ["http://localhost:3000", "http://jhhocs.github.io"]
    }
});
// const router = express.Router();

// app.use(express.static(__dirname + '/public/html'));
// app.use(express.static(__dirname + '/public/css'));
// app.use(express.static(__dirname + '/public'));
// app.use('/', router);

// router.get('/', (req, res) => {
//   res.sendFile('/html/index.html');
// });

//module.exports = router;

io.on('connection', (socket) => {
  console.log("User connected: " + socket.id);
  socket.on('clear', () => {
    io.emit('clear');
  });
  socket.on('startStroke', (line) => {
    io.emit('startStroke', line);
 });
 socket.on('endStroke', (line) => {
    io.emit('endStroke', line);
 });
 socket.on('stroke', (line) => {
    io.emit('stroke', line);
 });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3001, () => {
  console.log('server running at http://localhost:3001');
});