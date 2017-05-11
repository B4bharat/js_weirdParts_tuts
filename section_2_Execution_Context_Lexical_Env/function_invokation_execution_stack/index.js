function b() {

}

function a() {
  b();
}

a();

/**
 * Execution Stack
 * 
 * function b's execution context
 * ------------------------------
 * function a's execution context
 * ------------------------------
 * global execution context
 * contains:
 * - Global object: Window
 * - 'this' variable
 * - add 'a' and 'b' in memory during the 'creation' phase of the execution context
 */