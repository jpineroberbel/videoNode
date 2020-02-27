var express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var siofu = require("socketio-file-upload");

io.on('connection', function(socket){
  console.log('a user connected');
  var uploader = new siofu();
  uploader.dir = "./public/files";
  uploader.on("complete", function(e){console.log("Envia archivo " + e.file.name)})
  uploader.listen(socket);

  socket.on('stream',function(data){
    socket.broadcast.emit('stream',data);
});
});
app.use(siofu.router).use(express.static(__dirname + '/public'));

http.listen(3000, function () {
      console.log('Example app listening on port 3000!');
});

  