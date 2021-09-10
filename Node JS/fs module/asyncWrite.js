let fs = require("fs");
var msg = "Hi";
//fs.writeFile("demo1.txt",msg, (err)=>{
    //if (!err){
       // console.log("Data stored in file successfully")
    //}
//})

fs.writeFile("demo1.txt",msg, {flag:"a+"}, (err)=>{
    if (!err){
        console.log("Data stored in file successfully")
    }
})