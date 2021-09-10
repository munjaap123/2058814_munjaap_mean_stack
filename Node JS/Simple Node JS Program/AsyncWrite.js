let fs = require("fs");
fs.writeFile("demo1.txt",(err,data)=> {
    if(!err){
        console.log("data stored in file successfully");      // it read from file and display in bufffer format
        //console.log(data.toString())    // convert buffer to string format. 
    }
})