/*
An example of a function statement can be seen below.
It creates a 'greet' function object which has a name property set to 'greet' and code property[According to Tony Alicia, doesn't really happens other we could access it with functionName.code] having value - console.log('Hello from inside function statement');
*/

function greet() {
	console.log('Hello from inside function statement');
}
/*
The greet property according to Tony Alicia is invocable by paranthesis, so line no. 20 does exactly that, it invokes greet function's code property
*/
greet();

/*
- The right side of the 'assignment' operator creates a function object and saves it in the memory and the variable 'anonymousGreet' points to that place in memory.
- The name property of this function has no value as we can clearly see the function isn't given any name, so its an anonymous function.
- The code property contains the console.log statement and can be invoked using the variable that is pointing towards it.
*/
var anonymousGreet = function() {
	console.log('hello from inside a function expression baby!');
};

/*
	Function invocation statement below
*/
anonymousGreet();

/*
Functions are a first class citizen in javascript so we can do with it whatever we can do with a normal variable i.e. we can assign it to a variable, create it on the fly as in line #37 and as the example below pass it as the arguments for another function.
This sets up interesting avenues such as functional programming.
*/
function log(a) {
	//variable 'a' points to the spot in memory where the anonymous function on line #37 was created and thus as with function objects, its code property can be invoked using the paranthesis
	a();
}

log(function() {
	console.log('functions are first class citizens in javascript ho hooy!');
});
