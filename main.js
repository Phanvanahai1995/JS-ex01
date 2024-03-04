// Bài 1: Hoán vị 2 số

// Cách 1:
var a = 4;
var b = 6;
a = b - a;
b = b - a;
a = a + b;
console.log(a, b);
// Cách 2:
var a = 5;
var b = 7;
var c;
c = a;
a = b;
b = c;
console.log(a, b);
// Cách 3
var a = 8;
var b = 10;
[a, b] = [b, a];
console.log(a, b);

// Bài 2: Thực hiện phép toán
// S =  10 + 20 + 5^10 / 2

var s = 10 + 20 + 5 ** 10 / 2;
console.log(s);

// Bài 3: Tìm số lớn nhất
// a, b, c

var a = 10;
var b = 15;
var c = 12;
if (a >= b && a >= c) {
  console.log(`Số lớn nhất là ${a}`);
} else if (b >= c && b >= a) {
  console.log(`Số lớn nhất là ${b}`);
} else if (c >= a && c >= b) {
  console.log(`Số lớn nhất là ${c}`);
}

// Bài 4: Kiểm tra số cùng dấu
var a = 0;
var b = -2;
if ((a >= 0 && b >= 0) || a * b > 0) {
  console.log('Hai số cùng dấu');
} else {
  console.log('Hai số ngược dấu');
}
// Bài 5: Sắp xếp 3 số

var a = 5;
var b = -12;
var c = -9;

if (a >= b && a >= c && b >= c) {
  console.log(c, b, a);
} else if (a >= b && a >= c && c >= b) {
  console.log(b, c, a);
} else if (b >= a && b >= c && a >= c) {
  console.log(c, a, b);
} else if (b >= a && b >= c && c >= a) {
  console.log(a, c, b);
} else if (c >= a && c >= b && b >= a) {
  console.log(a, b, c);
} else if (c >= a && c >= b && a >= b) {
  console.log(b, a, c);
}
