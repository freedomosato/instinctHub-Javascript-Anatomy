let input1El = document.getElementById('input1')
let input2El = document.getElementById('input2')

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);// = 15
console.log(num1 - num2); // = 5
console.log(num1 * num2); // = 50
console.log(num1 / num2); // = 2
console.log(num1 % num2); // = 0
console.log(num1 ** num2); // = 100000

num1++
num2++
console.log(num1); // = 11
console.log(num2); // = 6

num1--
num2--
console.log(num1); // = 10
console.log(num2); // = 5

//using prompt function
let input1 = prompt("How old are you(years)?");
let input2 = prompt("Number of persons in your family?");

input1El.innerHTML = `I am ${input1} years old.`;
input2El.innerHTML = `We are ${input2} in my family.`;

console.log(typeof input1) // string

input1 = parseFloat(input1); // =30
input2 = parseFloat(input2); // =5

console.log(typeof input1) // number

console.log(input1 + input2);// = 35
console.log(input1 - input2); // = 25
console.log(input1 * input2); // = 150
console.log(input1 / input2); // = 6
console.log(input1 % input2); // = 0
console.log(input1 ** input2); // = 24300000


