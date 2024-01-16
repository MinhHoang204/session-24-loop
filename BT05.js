let n = prompt("Nhập số nguyên dương bất kì");
let sum = 0.0;
for (let i = 2; i < n; i++) {
    sum += 1.0 / (i * i * i);
}
sum += 1.0;
console.log("Kết quả biểu thức S = 1 + 1/2^3 + 1/3^3 + ... + 1/n^3 là:", fixed, setprecision(5), sum);