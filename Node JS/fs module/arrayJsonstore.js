let fs = require("fs");
let employees = [];
let emp1 = {"id":100,name:"Raj", age:24};
let emp2 = {"id":101,name:"Ramesh", age:24}
let emp3 = {"id":102,name:"Rajesh", age:24}
//let emp3 = {"id":102,name:"Rajesh", age:24}
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);

let employeeString = JSON.stringify(employees);
fs.writeFileSync("employees.json", employeeString);
console.log("Data stored in file");

let emp4 = {"id":102,name:"Rajesh", age:24};
employees.push(emp4);
let employeeString = JSON.stringify(employees);
fs.writeFileSync("employees.json", employeeString);
console.log("Data stored in file");