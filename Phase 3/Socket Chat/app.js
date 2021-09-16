let express = require("express");
let app = express();
let http = require("http").Server(app);
let readline = require("readline");
let obj = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
let io = require("socket.io")(http);


    app.get("/",(req,res)=> {
        res.sendFile(__dirname+"\\index.html");
    })

    io.on("connection", (socket) => {
        obj.setPrompt(`Server: `);
        obj.prompt();
        console.log('a user connected');

        socket.on("hello_server", (msg) => {
          let randomMsg = ["Hi how are you?", 
                      "I will find that out for you", 
                      "Can you help me figure this code out?", 
                      "Is there anything you need?", 
                      "Would you like to speak to a representative?", 
                      "Please select from the following options."]
          let randomNumber = Math.floor(Math.random()*randomMsg.length);
          socket.emit("client_connected", randomMsg[randomNumber]);
          console.log(msg);
          //obj.prompt();
      
        })

        socket.on("name", (msg) => {
          console.log("Hello" + msg)
        })

        socket.on("messages", (msg) => {
          console.log('message: ' + msg);
        });
    


    socket.emit("client_connected", "Client connected to server");
    obj.prompt();
    obj.on('line', (msg) => {
          io.emit("chat messages", msg),
          obj.prompt();
        });
      

     /* socket.on('connection', (socket) => {
        console.log('Client connected');
        socket.on('disconnect', () => {
          console.log(' Client disconnected');
        });
      }); */
    })

  http.listen(9090, () => console.log('listening on *:9090'));
  
    
