//Strings
/*String literals */
""; //An empty string
"testing";
"Welcome to my crib";
'name= "Myform"';
`"'T'is the season"`;

("one \
two \
three \
line"); // one two three line

`the newline character at the end of this line
is included literally in this string`;

// Working with strings
let msg = "Hello" + "world";
let greeting = "Welcome to my blog" + " " + msg;
const name1 = "Masood";
console.log(name1.length); //6, length of Masood

// Regular expression arguments
let text = "testing 1, 2, 3";
let pattern = /\d+/g; //expression for the existance of numbers (digits)

console.log(pattern.test(text)); //true, text matches the conditions of pattern

console.log(text.search(pattern)); //9, position of the first match, 1

console.log(text.match(pattern)); //['1', '2', '3'], returns an array that mathes the condition

console.log(text.replace(pattern, "#")); //Replaces all matches with the condition ("#")

console.log(text.split(/\D+/)); // Splits nondigits
