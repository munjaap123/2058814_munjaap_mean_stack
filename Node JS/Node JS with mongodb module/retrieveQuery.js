
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected")
        let db = client.db("tcsmean");
        //let cursor = db.collection("Employees").find();
        let cursor = db.collection("Employees").find({salary:{$gt:30000}});

        cursor.forEach(doc=> {
            console.log("Name "+doc.name+" Salary " +doc.salary);
            client.close();
        })
    }else {
        console.log(err);
    }
})