let fs = require("fs");
let emp = {"id":101,name:"Ramesh", age:24}
fs.writeFile("emp.json",emp,(err)=> {
    if(!err){
        console.log("Data store infile");
    }
})