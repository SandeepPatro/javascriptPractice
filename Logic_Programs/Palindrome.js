// A palindromic number is a number that remains the same when its digits are reversed. (e.g. 121,  2345432...)

let num = prompt("Enter a 2 or more digit number for Palindrome Check"); // input
let temp = 0;   // holds the reverse value
let check = num;   // holds input to check after the operation performed on temp
let rem;   // Remainder

while (num > 0) {
    rem = num % 10;     // to get the remainder
    temp = (temp * 10) + rem;   // move the temp by 10th position and add rem to 1st postion
    num = Math.floor(num / 10);  // adds whole number after dividing by temp
    console.log(temp);
}
//Check if the input is equal to the reverse stored in temp
if (temp == check) document.write(`<h2>${check} is a Palindrome number`);
else document.write(`<h2>${check} is not a Palindrome number`);
