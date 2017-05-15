function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();

/**
 * Execution Context
 * 
 * Global Execution Context contains:
 * - function a in memory
 * - function b in memory
 * - variable myVar with value 1
 * - Global object [Window for browser]
 * - a special variable 'this'
 * -------------------------------------
 * function a's execution context
 * - var 'myVar' with value 2
 * - a special variable 'this'
 * -------------------------------------
 * function b's execution context
 * - var 'myVar' with value 'undefined' set during the 'creation' phase of the execution context
 * - a special variable 'this'
 */