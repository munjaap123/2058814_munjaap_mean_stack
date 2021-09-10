let express = require("express");

let app = express();
let emp = {id:100,name:"Raj",age:21};
let employees = [
    {id:100,name:"Raj",age:21},
    {id:101,name:"Raju",age:22},
    {id:102,name:"Ramesh",age:23},
    {id:103,name:"Rajesh",age:24}        
]

// http://localhost:9090/sayPlainText
app.get("/sayPlainText",(request,response)=> {
    response.send("Welcome to REST API in plain text format");
});
// http://localhost:9090/sayJson
app.get("/sayJson",(request,response)=> {
    response.json({"msg":"Welcome to Rest api"});
})
// http://localhost:9090/empInfo
app.get("/empInfo",(request,response)=> {
    response.json(emp);
})
// http://localhost:9090/employeesInfo
app.get("/employeesInfo",(request,response)=> {
    response.json(employees);
})
// http://localhost:9090/empInfo
app.get("/employeesInfo",(request,response)=> {
    let name = request.query.name;
    response.send("Welcome user " + name);
})

app.get("/multiPathParam/:id/:name/:salary",(request,response)=>{

    let id = request.params.id;
    let name = request.params.name;
    let salary = request.params.salary;
    response.send();
}
)

app.post("/storeemployee",(request,response)=> {
    let employee = request.body;
    console.log(employee)
    response.send("employee data store")
})
app.listen(9090,()=>console.log("Server running on port number 9090"))