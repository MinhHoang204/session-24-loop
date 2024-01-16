Console.Write("Nhập số nguyên a: ");
let a = Convert.ToInt32(Console.ReadLine());

Console.Write("Nhập số nguyên b: ");
let b = Convert.ToInt32(Console.ReadLine());

let result = (let)Math.Pow(a, b);
Console.WriteLine("Kết quả của biểu thức ab là: " + result);

Console.ReadKey();