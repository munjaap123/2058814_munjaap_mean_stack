let mongoose = require("mongoose");
let express = require("express");
let url = "mongodb://localhost:27017/Courseplatform";
let app = express();


mongoose.connect(url).then(res=>console.log("connected")).catch(err=>console.log(err))


    let db = mongoose.connection;

    let course = mongoose.Schema({
        cid: Number,
        cname: String,
        cdes : String,
        camount: Number,
    })

    let courseModel = mongoose.model("Courses",course);

   // let courseid = request.query["CourseID"];
   // let coursename = request.query["CourseName"];
   // let description = request.query["CourseDes"];
   // let amount = request.query["Cost"];
    

  


app.get("/",(request,response)=> {
    response.sendFile(__dirname+"\\index.html");
})




app.post("/addCourse",(request,response)=> {

    let data = request.body;
   
    let courseEntry = new courseModel({
        cid: data.CourseID, 
        cname: data.CourseName, 
        cdes: data.CourseDes, 
        camount: data.Cost})

  courseModel.insertMany(courseEntry, (err,result) => {
      if(!err){
          console.log(result)
      } else{
          console.log(err);
      }
    })
    response.sendFile(__dirname+"\\addCourse.html");
})


app.get("/updateCourse",(request,response)=> {
    
    let courseid = request.query['CourseID'];
    
   // let amount = request.query["Cost"];
    
    courseModel.updateOne({cid:courseid},(err,result)=> {
        if(!err){
            console.log(result)
            if(result.modifiedCount>0 || result.matchedCount>0){
                    console.log("Course updated successfully")
            }else {
                    console.log("Course didn't update");
            }
        }else {
            console.log(err);
        }
        response.sendFile(__dirname+"\\updateCourse.html");
        mongoose.disconnect();
    })
})




app.get("/fetchCourse",(request,response)=> {
    response.sendFile(__dirname+"\\fetchCourse.html");

    
  
  courseModel.find({},(err,data)=> {
    if(!err){
            data.forEach(courseEntry=>  {
                
               
                tableContent += "<tr><td>" + courseEntry.cid + "</td><td>" + courseEntry.cname + "</td><td>" + courseEntry.cdes + "</td><td>" + courseEntry.camount + "</td></tr>";
                var endtable = "</table>";
                var table = startTable + tableContent + endtable;
                document.write(table);
            })
    }else {
        console.log(err);
    }
    response.sendFile(__dirname+"\\fetchCourse.html");
    mongoose.disconnect();
    })
 })





app.get("/deleteCourse",(request,response)=> {
    
    courseModel.deleteOne({cid: CourseID},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                        console.log("Record deteled successfully");
                }else {
                        console.log("Record not present");
                }
        }else {
                console.log(err)
        }
        mongoose.disconnect();
    })
    response.sendFile(__dirname+"\\deleteCourse.html");
 
})





app.listen(9090,()=>console.log("Server running on port 9090"))




