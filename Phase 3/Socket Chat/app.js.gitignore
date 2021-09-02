let express = require("express");
let app = express();
let http = require("http");
let server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



/* let randomMsg = ["Hi how are you?", "I will find that out for you", "Can you help me figure this code out?", "Is there anything you need?", "Please let me know how I can help.", "If you are struggling with something, please select a topic."]
let randomNumber = Math.floor(Math.random()*randomMsg.length);
socket.emit("obj1", randomMsg[randomNumber]); */


    app.get("/",(req,res)=> {
        res.sendFile(__dirname+"\\index.html");
    })

    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on("chat", (msg) => {
        var item = document.createElement('li');
        item.textContent = msg;
        //document.getElementById
    })
})

    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
          console.log('message: ' + msg);
        });
    });


    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
          io.emit('chat message', msg);
        });
      });

      io.on('connection', (socket) => {
        console.log('Client connected');
        socket.on('disconnect', () => {
          console.log(' Client disconnected');
        });
      });

    app.listen(9090, () => 
            console.log('listening on *:9090'));
  
    
