let http = require("http");
let fs = require("fs");
//let reader = require("readline");
let url = require("url");


let Addtask = 
`<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
    <h2>Add Task</h2>
    <form action="addTasks">
        <label>Emp Id</label>
        <input type="text" name="empId"/><br/>
        <label>Task Id</label>
        <input type="text" name="taskId"/><br/>
        <label>Task</label>
        <input type="text" name="tasks"/><br/>
        <label>Password</label>
        <input type="date" name="deadline"/><br/>
        <input type="submit" id = "submitTask" value="Add Tasks"/>
        <input type="reset" value="reset"/> 
    </form>
    <a href = "delete">Delete Task</a>
    <a href = "display">Show Tasks</a>

`

let deletetask = `
  <h2> Delete Task</h2>
  <form action="/deleteTasks">
  <label>Task Id:</label>
  <input type="text" name="TaskId"/><br/>
  <input type="submit" name = "DeleteTask" value="Delete" click = "delete()"/>
  </form> 
  <a href = "display">Show Tasks</a>`

let listoftasks = `
  <h2> List of Tasks </h2>
  <form action="/listTasks">
  <input type="button" id = "ListTask" value="List Tasks"/>
  <div>
  
  </div>
  
  </form>
  </html>
`

 http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    console.log(urlInfo);
    if(urlInfo.path != "/favicon.ico"){


        if(urlInfo.path == "/addTasks"){
            let newTasks = urlInfo.query;
            let alltasks = JSON.parse(fs.readFileSync("all-tasks.json").toString())
            let result = alltasks.find(t=>t.tid == newTasks.taskId)

            response.writeHead(200, {"content-type":"text/html"});
            if (result = undefined){
              let empId = newTasks.empId;
              let taskId = newTasks.taskId;
              let tasks = newTasks.tasks;
              let deadline = newTasks.deadline;


              let taskstoAdd = {eid: empId, tid:taskId, tk: tasks, dl: deadline }
            alltasks.push(taskstoAdd);
            fs.writeFileSync("all-tasks.json",JSON.stringify(alltasks));
            response.write(Addtask);
          }
          else {
            response.write("Task id is already used")
            response.write(Addtask)
          }
        }
        else if(urlInfo.path == "/display"){
          mytasks = JSON.parse (fs.readFile("all-tasks.json").toString());
             var tablecontent = "";
             var startTable = `<table border = '1' ><tr><th>emp id</th><th>task id</th><th>task details</th><th> details</th></tr>`;
              
              mytasks.forEach( e  => {
               tablecontent+= `<tr><td>`+ e.empId + `</td><td>` + e.taskId + `</td><td>` + e.tasks + `</td><td>` + e.deadline + `</td></tr>`;
                
              });
              var endtable = `</table>`
              response.write(listoftasks + startTable + tablecontent + endtable);
             }
        }

        else if(urlInfo.pathname == "/delete"){
          respond.write(deletetask);
         let items = JSON.parse(fs.readFileSync("all-tasks.json"))
         console.log(items);
         

        }else{
         response.write(Addtask); 
        
       } 
      }).listen(9090,console.log("Server running on port number 9090"));
    //fs.
//let urlInfo = url.parse(request.url,true);
//let user = request.query["empId"];
//let pass = request.query["TaskId"]
      
