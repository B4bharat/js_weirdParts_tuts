function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	};

}

var sayHowdy = greet('Howdy');
/*
	'greet' function is invoked, so a greet() execution context is created which as we know sets up it's own variable environment, reference to outer env, special 'this' and 'arguments' keyword.
	when 'greet' function is invoked, it sets the 'whattosay' argument's value as 'Howdy', returns an anonymous function to sayHowdy variable and finishes execution so the execution context is popped off the call stack.
	But Tony Alicea says that local variables remain in the memory, which is a bit fishy, but we will roll on. So 'whattosay' variable remains in the memory.
	//=============================\\
				EXECUTION CONTEXT
	greet() popped off, but 'whattosay' remains in the memory
	global execution context
	//=============================\\
*/

sayHowdy('Bharat');
/*
	sayHowdy as we know it contains a function which was returned by 'greet' function. So as we know it with function objects, we can invoke it using parenthesis.
	When we invoke it, it creates it's own execution context, so the execution contexts will presently look like this -
	sayHowdy's Execution Context
	----------------------------
	greet's local variables [only 'whattosay' in this example]
	----------------------------
	Global Execution context
	Line #4 wants the value of 'whattosay', so sayHowdy's Execution Context which has reference to the variables in the outer environment will look for it in it's scope chain and will stumble upon 'whattosay' since greet is it's immediate parent.
	Armed with taking the value of 'whattosay' from the memory and 'name' from the function invocation, it will log the appropriate result.
*/
