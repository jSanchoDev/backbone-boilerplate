var express = require("express");
var app = express();
var port = 3700;

app.get("/", function(req, res){
    res.send("It works!");
});

var io = require('socket.io').listen(app.listen(port));
console.log("Listening on port " + port);

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });

    //setInterval(function(){
    //    socket.emit('message', { message: 'Heartbeat: ' + new Date().toJSON().slice(0,10) });
    //}, 1000);
});