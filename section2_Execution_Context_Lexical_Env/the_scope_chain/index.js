function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
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
 * - no reference to outer environment as this is the outermost it gets
 * -------------------------------------
 * function a's execution context
 * - var 'myVar' with value 2
 * - a special variable 'this'
 * - reference to the outer environment depending on the lexical scope [lexical environment is where the code sits physically]
 * -------------------------------------
 * function b's execution context
 * - reference to outer environment which would be global environment 
 * so it will grab 'myVar' variable from global env
 */