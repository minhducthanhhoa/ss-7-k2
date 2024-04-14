"use strict";
function printDataType(data) {
    console.log(typeof data);
}
printDataType(42); // Kết quả: "number"
printDataType("Hello"); // Kết quả: "string"
printDataType(true); // Kết quả: "boolean"
printDataType([1, 2, 3]); // Kết quả: "object"
printDataType({ name: "John", age: 30 }); // Kết quả: "object"
