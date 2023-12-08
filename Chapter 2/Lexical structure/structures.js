//Unicode escape sequences
let café = 1;
console.log(café); //Evaluates to 1 (cafe var)
console.log(café); //Same thing happens
// For emojis
console.log("\u{1F600}");

// Unicode normalization
/*Observe but note these two are entirely different identifiers*/
// const caf\u{e9} = 1;
// const caf\u{301} = 2;

//Literals
1.1;
1;
let x;
x = 1;
("Hello");
("Welcome");
