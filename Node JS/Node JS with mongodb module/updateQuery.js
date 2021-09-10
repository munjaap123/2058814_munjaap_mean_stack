
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected")
        let db = client.db("tcsmean");
        //let cursor = db.collection("Employees").find();
        db.collection("Employees").updateOne({_id:4},{$set:{city:"Mumbai"}},(err,result)=> {
            if (!err){
                if(result.modifiedCount>0){
                    console.log("Record updated successfully")
                }else {
                    console.log("Record not present")
                }
            }else{
                console.log(err);
            }
            client.close();
        })
    }else {
        console.log(err);
    }
})