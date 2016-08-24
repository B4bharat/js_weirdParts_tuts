/*
  In Javascript, Functions are first class citizens, that means it can be treated as variables. This means it can be assigned to a variable, returned as a value from another function, can be passed in the parameters of a function etc
*/
/*Example of a function assigned to a variable*/
var subtract = function(a, b) {
  return a - b;
};
var subResult = subtract(10, 5);
console.log(subResult);

/*the following code defines the variable square to refer to a function that produces the square of a given number*/
var square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144


/*Example of a function returned from another function*/
function multiply(a, b) {
  return function() {
    return a*b;
  }
}
var result = multiply(3, 5)();
console.log(result);

/*
  To make functions more powerful, in javascript functions are objects. That means one can add properties to it.
  It contains two built in properties
  - Name
  - Code [which is invocable using '()' paranthesis]
*/