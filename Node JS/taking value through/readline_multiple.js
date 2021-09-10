let obj = require("readline");
var r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdoutj
});
r1.question("Enter your name",(name)=>{
    r1.question("Enter your name",(id)=>{
        r1.question("Enter your name",(age)=>{
    console.log("Your name is "+ name);
    console.log("ID is "+ id);
    console.log("Age is "+ age);
    r1.close();
        })
    })
})