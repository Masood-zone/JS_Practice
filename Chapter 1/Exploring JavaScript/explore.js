//Working with statements and expressions

let points = [
  { x: 0, y: 0 },
  { x: 3, y: 2 },
];

let newValue = (points[0].x = 1);

console.log("The first element of the first object: " + newValue);

points.dist = function () {
  let p1 = this[0];
  let p2 = this[1];

  let a = p2.x - p1.x;
  let b = p2.y - p1.y;

  return Math.sqrt(a * a + b * b);
};

console.log(points.dist());

//Functions in the form of control structures and statements
//A function that returns the absoulte value of a value
function abs(x) {
  if (x >= 0) {
    return x;
  } else return -x;
}

console.log(abs(-9));

//Compute the sum of the elements of the array
function sum(array) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return "The sum of the array " + "[" + array + "]" + " is: " + sum;
}

let primes = [1, 3, 5, 7, 9];
console.log(sum(primes));

//A function to find the factorial of a number
function factorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
}

console.log(factorial(5)); //1 x 4 x 3 x 2

// Another way for factorial
function factorial2(n) {
  let i,
    product = 1;
  for (i = 2; i <= n; i++) product *= i;
  return product;
}

console.log(factorial2(5)); // 1 x 2 x 3 x 4 x 5

//OOP in JS
//A class to compute the distance between two points
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let p = new Point(1, 2);
console.log(p.distance());
