let express = require("express");
let app = express();
let path = require("path");
let http = require("http").Server(app);
//let readline = require("readline");
/*let reader = readline.createInterface({
input: process.stdin,
output: process.stdout,
})*/
let io = require("socket.io")(http);
let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/chatlog";

mongoose.connect(url).
then(res=>console.log("connected")).
catch(err=>console.log(err))


let db = mongoose.connection;

    let allChats = mongoose.Schema({
        _id: Number,
        name: String,
        message : String,
        
    })


    let chatModel = mongoose.model("ChatBot",allChats);

    app.get("/",(request,response)=> {
        response.sendFile(__dirname+"\\index.html");


    })  



io.on("chat",(msg)=> {
         let questions = [
             'Hello there',
             'How are you',
             'What\'s up',
             'What can i do for you?',
             'Are you having a good day so far?',
             'Check out this new book',
             'Do you listen to music?'
         ];
         const random = Math.floor(Math.random() * questions.length);
         socket.emit("obj1", questions[random]);
         chatModel.insertMany(msg, (err, result)=>{
            if (!err){
                  console.log("Submitted");
            }else{
                console.log(err);
            }
         })
         console.log(msg);
         
      
})
http.listen(9090, ()=>console.log("Server running on 9090"))