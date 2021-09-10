
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");


let app = express();

app.use(bodyParser.json())
app.use(cors)

let customers = [
    {cid:100,cname: "Raj", age:21},
    {cid:100,cname: "Raj", age:21}
]


app.get("/findCustomerById/:cid",(request,response)=> {
    let cid = request.params.cid;
    let customer = customers.find(c=>c.cid==cid);
    if(customer==undefined){
        response.json({"msg":"Customer not present with id "+cid})
    }else {
        response.json(customer);
    }
})

app.get("/allCustomerDetails",(request,response)=> {
    response.json(customers);
})


app.post('/storeCustomerInfo',(request,response)=> {
    let cust = request.body;
    let customer = customer.find(c=>c.cid==cust.id);
    if(customer==undefined){
        customers.push(cust);
        response.json({"msg":"Customer record dded successfully"})
    }else{
        response.json({"msg":"customer id must be unique"});
    }
})
app.put("/updateCustomerAge",(request,response)=> {
    let cust = request.body;
    let customer = customer.find(c=>c.cid==cust.id);
    if(customer==undefined){
        customers.push(cust);
        response.json({"msg":"Customer record dded successfully"})
    }else{
        response.json({"msg":"customer id must be unique"});
    }
})


app.delete("/deleteCustomerInfo/:cid", (request,response)=> {
    let cid = request.params.cid;
    let index = customers.findIndex(c=>c.cid==cid);
    if(index==-1){
        response.json({"msg":"No customer present with id"+cid})
    }else{
        customers.splice(index,1);
        response.json({"msg":"Customer deleted successfully"});
    }
})
