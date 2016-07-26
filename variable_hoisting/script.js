/*
	Execution Context is created in two phases [Creation Phase and Execution Phase]
	CREATION PHASE:
		During the creation phase, the execution context creates a global object, a 'this' variable, reference to the outer environment AND sets up memory space for variables and functions
		When it sets up memory space for variables, it sets it's initial value to 'undefined'.
		When it sets up memory space for function statement [not expression because expression i.e. var b = function() { } is again a variable only], it keeps it in it's entirety i.e. it keeps the code inside its body
	EXECUTION PHASE:
		After the creation phase, it enters the execution phase and that's when the code is run line by line.
		That is when below console.log(a) [line 15] is printed as 'undefined' because during the creation phase, the javascript engine encountered it and set it's memory space and set its initial value to undefined. Later when it encountered var a [Line 17], the javascript engine set it's value to "Good Morning" and that's why on line 19 it outputs "Good Morning"

		As I said function statement is stored in it's entirety in the memory during the execution phase, that's why it prints the code body when it is invoked on line 13
*/
b();

console.log(a);

var a = "Good Morning";

console.log(a);

function b() {
	console.log('Called b!');
}
