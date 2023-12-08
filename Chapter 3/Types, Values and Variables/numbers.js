//Section 3.1 === Numbers
/*Integer literals */
0;
3;
10000000;
//You can represent Hexadecimal values with 0X/0x[0-F]
0xff; // 255
0xbadcafe; //195939070
//And binary(base 2) and octal(base 8) values begin with 0b & 0o
0b10101; //21
0o377; // 255

/*Floating-point literals */
3.14;
2345.6789;
0.3333333;
6.02e23; //6.02 x 10 exponent 23;
1.4738223e-32; // 1.4738223 x 10 exponent -32

//You can also use "_" as seperators in numeric literals
let billion = 1_000_000_000;
let bytes = 0x89_ab_cd_ef;

// Properties of the Math object
Math.pow(2, 10); //For the power of number (2 exponent 10)
Math.PI; //For the circumference of a circle
Math.abs(-10); // 10, for the absolute of a number
/*And many more, all this and more can be found in ES6 of JS */

//When a numeric operation exceeds the largest or the smallest representable number

/*Overflow and Undeflow */
//In overflow, JS returns Infinity when a numeric operation exceeds the largest representable number.
Infinity;
-Infinity;
Number.MAX_VALUE * 2; //Infinity - overflow

//In underflow, JS returns 0 when a numeric operation exceeds the smallest representable number.
-0;
Number.MIN_VALUE / 2; //0 - underflow
0 / 0; //NaN - not a number is returned

//Division by 0, does not return an error but Infinity or Negative Infinity
1 / 0; //Infinity
-1 / 0; //-Infinity

//Date and Times
let now = new Date();
let iso = now.toISOString();
console.log(iso);
