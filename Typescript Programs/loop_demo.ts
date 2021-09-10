let num1:number[]=[10,20,30,40];
console.log(num1);
console.log("using in loop");
for(let x in num1){
       console.log("indes is" +x);
}
let sum = 0;
for(let i of num1){
    console.log(" Value is" +i);
    sum = sum + i
}
console.log("Sum of number is" + sum)