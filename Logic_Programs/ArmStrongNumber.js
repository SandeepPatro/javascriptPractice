/* Armstrong Number is a number whose sum of individual digits cube is equal to the number*/

let inp = prompt("Enter number greater than 10");
// temp variable to add the the cube of digits 
let add = 0;
// temp array to store digits
let digits = [];
// variable to store the Input number so later it can be compared with the add variable
let check = inp;

//logic to sepearte digits
for (let i = 0; inp > 0; i++) {
    digits[i] = inp % 10;
    inp = Math.floor(inp / 10);
    console.log(inp);
}

//logic to add the cube of digits
for (let i of digits) {
    add = add + i ** 3;
    console.log(add);
}

// check if the number is Armstrong
if (add == check) {
    document.write(`<h2>${check} is an armstrong number!</h2>`);
} else {
    document.write(`<h2>${check} is not an armstrong number!</h2>`);
}