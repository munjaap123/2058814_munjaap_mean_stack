var num1 = [10, 20, 30, 40];
console.log(num1);
console.log("using in loop");
for (var x in num1) {
    console.log("indes is" + x);
}
var sum = 0;
for (var _i = 0, num1_1 = num1; _i < num1_1.length; _i++) {
    var i = num1_1[_i];
    console.log(" Value is" + i);
    sum = sum + i
}
console.log("Sum of number is" + sum)
