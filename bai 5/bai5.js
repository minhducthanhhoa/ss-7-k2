"use strict";
let num4 = "Hello";
let num5 = 10;
// Phân biệt kiểu dữ liệu 'any'
console.log(num4.toUpperCase()); // output: "HELLO"
console.log(num4.toFixed(2)); // output: Error: num4.toFixed is not a function
// Phân biệt kiểu dữ liệu 'unknown'
console.log(num5 + 5); // output: Error: Operator '+' cannot be applied to types 'unknown' and 'number'
if (typeof num5 === "number") {
    console.log(num5 + 5); // output: 15
}
