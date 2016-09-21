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
