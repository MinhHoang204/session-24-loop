let n = parseInt(prompt("Nhập vào một số nguyên dương bất kỳ: "));

console.log("Các bình phương số nguyên dương chẵn từ 1 đến " + n + ":");
for (let i = 1; i = n; i++) {
  if (i % 2 == 0) {
    console.log(i * i);
  }
}