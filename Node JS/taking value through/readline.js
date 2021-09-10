let obj = require("readline");
var r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdoutj
});
r1.question("Enter your name",(name)=>{
    console.log("Your name is "+ name);
    r1.close();
})