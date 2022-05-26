const express = require("express");
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');
console.log(publicPath);

app.use(express.static(publicPath));

let connectedSocket = null;
const io = new Server(server);
io.listen(5000);
io.on('connection', (socket) => {
    let arrAux = [];
    console.log('client connected');
    connectedSocket = socket;
      console.log("cliente")
      console.log(socket.client.id)
  
    
    const onMessage = (asd) => {
      arrAux.push(asd);
      console.log(arrAux)
      socket.broadcast.emit('message', asd)
      if (asd.message === 'ping') {
        // socket.send(arrAux);
      }
    }
    const onDisconnect = (reason) => {
      console.log('client disconnected: ', reason);
      connectedSocket = null;
      socket.off('message', onMessage);
      socket.off('error', onError);
    };
    const onError = (e) => {
      connectedSocket = null;
      socket.off('message', onMessage);
      socket.off('disconnect', onDisconnect);
    };
    socket.on('message', onMessage);
    socket.once('disconnect', onDisconnect);
    socket.once('error', onError);
  });
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
 });
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });