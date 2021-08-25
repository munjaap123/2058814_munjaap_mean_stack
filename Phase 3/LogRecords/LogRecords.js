
let readinput= require("readline-sync");
let fs = require("fs");

let fname = readinput.question("first Name: ")
let lname = readinput.question("last name: ");
let gender = readinput.question("Gender: ")
let emailId = readinput.questionEMail("Email id")


//let fs = require("fs");
//let record = JSON.parse(fs.readFileSync("readinput.js").toString());
let record = [];
record.push(fname);
record.push(lname);
record.push(gender);
record.push(emailId);


let employeeString = JSON.stringify(record);
fs.writeFileSync("record.json",employeeString);

console.log("First Name "+fname);
console.log("Last Name "+lname);
console.log("Gender: "+gender);
console.log("Your email id is "+emailId);