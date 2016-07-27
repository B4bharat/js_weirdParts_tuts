/*
	The key fundamental to understand here is that functions create its own execution context with it's own memory space for variables
	As soon as a function is invoked it creates it's own execution context and is put to the top of the execution stack.
	So when below function a is invoked, the code below the invocation statement doesn't executes until a finishes its execution

	EXECUTION STACK
	function a's execution context
	------------------------------
	Global Execution context

	likewise when b is invoked, this is how the execution stack will look like
	function b's execution context
	------------------------------
	function a's execution context
	------------------------------
	Global Execution context
*/

function b() {
	var myVar;
	/*
		myVar in this case is in b's execution context and during the creation phase of b's execution context, it was encountered and assigned the value 'undefined'. During the execution phase, no assignment to the myVar variable is seen so the value undefined will remain and will print the same below.
		As soon as its printed, b's execution context will be popped off the stack and the control will return to a's execution context
	*/
	console.log(myVar);
}

function a() {
	var myVar = 2;
	console.log(myVar); //Should print 2 because myVar's value in a's execution context as we can see above is 2
	b(); //Will invoke b and create b's execution context and thereby put it to the top of the execution stack
}

var myVar = 1;
console.log(myVar); //Should print 1 because myVar's value in the global execution context is 1
a(); // Invokes function a so a new execution context (function a's execution context) is created and put to the top of the execution stack, the next line isn't run until a finishes because the javascript engine is now in a's execution context
console.log(myVar);
