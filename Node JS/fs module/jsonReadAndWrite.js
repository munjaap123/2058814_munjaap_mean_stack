let fs = require("js");
let employees = JSON.parse(fs.readFileSync("employees.json").toString());
employees.push({id:103, name:"Ajay", age:34});
fs.writeFileSync("employees.json",JSON.stringify(employees));
console.log();