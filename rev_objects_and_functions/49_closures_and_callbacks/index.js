function sayHiLAter() {

	var greeting = 'Hi';

	setTimeout(function() {
		console.log(greeting);
	}, 3000);
}
sayHiLAter();

/*
We can pass functions around like variables and return them in functions and use them in other functions. When we pass a callback function as an argument to another function, we are only passing the function definition. We are not executing the function in the parameter. In other words, we aren’t passing the function with the trailing pair of executing parenthesis () like we do when we are executing a function.

And since the containing function has the callback function in its parameter as a function definition, it can execute the callback anytime.

Note that the callback function is not executed immediately. It is “called back” (hence the name) at some specified point inside the containing function’s body
*/

function hello(param1, param2, callback) {
	//play around with parameters
	var multiplyResult = param1*param2;
	var divisionResult = param1/param2;
	var average = param1+param2/2;

	callback(param1, param2);
}
hello(3, 4, function(a, b) { console.log(a+b); });
