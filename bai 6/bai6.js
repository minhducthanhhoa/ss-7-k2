"use strict";
/*
    1.Kiểu trả về void:
    - Kiểu void đại diện cho việc không có giá trị trả về từ một hàm hoặc phương thức.
    - Một hàm được khai báo với kiểu trả về void có thể không có câu lệnh return hoặc có
      câu lệnh return mà không trả về bất kỳ giá trị cụ thể nào.
    - Kiểu void thường được sử dụng khi hàm hoặc phương thức chỉ thực hiện các tác vụ như
      thay đổi trạng thái, gọi hàm khác, hoặc in ra kết quả mà không trả về giá trị cụ thể.
 */
function greet(name) {
    console.log(`Hello, ${name}!`);
}
function calculateSum(a, b) {
    const sum = a + b;
    console.log(`Sum: ${sum}`);
}
greet("John"); // output: "Hello, John!"
calculateSum(5, 3); // output: "Sum: 8"
/*
    2. Kiểu trả về never:
    - Kiểu never đại diện cho các hàm hoặc phương thức không bao giờ hoàn thành việc thực thi
      hoặc luôn ném ra một ngoại lệ.
    - Một hàm được khai báo với kiểu trả về never không thể có câu lệnh return hoặc câu lệnh
      return chỉ có thể là một ngoại lệ (exception) hoặc một vòng lặp vô hạn.
    - Kiểu never thường được sử dụng trong các trường hợp như xử lý lỗi, ngoại lệ, hoặc khi
      một phương thức bị kết thúc bởi một hàm như throw hoặc while (true).
 */
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
// Sử dụng kiểu never trong một phương thức khác
function processResult(result) {
    if (typeof result === "string") {
        return result.toUpperCase();
    }
    else if (typeof result === "number") {
        return result.toFixed(2);
    }
    else {
        throwError("Invalid result type");
    }
}
