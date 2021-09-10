const { request, response} = require("express");
let express = require("express");
//let bodyParser = require("body-parser");

let userDetails = [];
let app = express();
//app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (request,response)=>{
    //response.sendFile("Welcome to Express JS Simple model");
    response.send(__dirname);
})

app.get("/aboutus", (request, response)=>{
    response.send("Welcome to about us")
})

app.get("/contactus", (request, response)=>{
    response.send("Welcome to contact us")
})

app.get("/index", (request,response)=> {
    //response.send("Welcome to index page")
    response.send(__dirname+"\\index.html");
})

app.get("/login",(request,response)=>{
       //response.sendFile(__dirname+"\\login.html");
})
app.get("/checkUser",(request,response)=> {
//let user = request.query["user"];
//let pass = request.query["pass"];
})

app.get("/SignUp", (request,response)=> {
    //response.sendFile(__dirname+"\\register.html");
})
//app.post("/register",(request,response)=>{
           // let userDetail = request.body;
           // console.log(userDetail);
           // userDetails.push(userDetail);
           // response.send("Post method...");
//});

app.listen(9090, ()=>console.log("Server running on port number 9090"))

