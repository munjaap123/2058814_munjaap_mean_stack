//const {constants } = require("buffer");
let fs = require("fs");
let msg = "Welcome to file handling with synchronous";
//fs.writeFileSync("demo2.txt",msg);
fs.writeFileSync("demo2.txt",msg,{flag:"a+"});
console.log("Data Stored");
console.log("Normal Statement1");
console.log("Normal Statement1");