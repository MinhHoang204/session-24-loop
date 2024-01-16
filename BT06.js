let n = prompt("Nhập số nguyên dương bất kì");
let reversed = 0;
while (n > 0){
    let remainder = n % 10;
    reversed = reversed * 10 + remainder;
    n /= 10;
}
console.log("Số đảo ngược của" + n + "là" + reversed);