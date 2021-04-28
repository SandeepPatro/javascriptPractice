let num1 = 0, num2 = 1, temp
console.log(num1);
for (let i = 1; i < 20; i++) {
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
    console.log(num1);
}
console.log(num2);
