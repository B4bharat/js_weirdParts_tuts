function clubInfo(name, currentStanding, foundationYear) {
	console.log(name);
	console.log(currentStanding);
	console.log(foundationYear);
	console.log(arguments);
	/*
		'arguments' object is a special keyword just like 'this' which javascript's engine sets up for us during the 'Creation Phase' of the 'Execution Context'
		'arguments' is an 'array-like' structure which contains all the values passed to the paramters of a function
		'array-like' because it doesn't have all the methods of a javascript array associated with it
		The arguments object has an array-like structure with an indexed property for each passed argument and a length property equal to the total number of parameters supplied by the caller
	*/
	console.log('--------------');
}
clubInfo(); // will log undefined, undefined, undefined
/*
	Unlike other programming languages, its not compulsory to pass values to EVERY argument of a function.
	As soon as a function is loaded into the memory, it loads up all it's arguments into the memory as well and sets their value to 'undefined' just like a normal variable would.
	Thus when clubInfo function is invoked without any arguments on line no. 6, it returns 'undefined' for each of it's arguments
*/
clubInfo('Arsenal'); // will log 'Arsenal', undefined, undefined
clubInfo('Chelsea', 1); //will log 'Chelsea', 1, undefined
clubInfo('Arsenal', 5, 1886); //will log 'Arsenal', 5, 1886

(function(a) {
	console.log(arguments[0] === a); //true
	console.log(a);

	//modify argument property
	arguments[0] = 10;
	console.log(a); //10

	//modify named paramter variable
	a = 20;
	console.log(arguments[0]); //20

})(1, 2);
/*
	The above example shows how every argument is tightly coupled with their corresponding named parameter
	If you change the value of a named paramter, the value of the corresponding index's argument also changes and vice-versa
*/
console.log('--------------------------');

(function(a, b, c) {
	//'arguments' has two members
	console.log(arguments.length); //2

	//Updating arguments[2] should not modify named parameters
	arguments[2] = 10;
	console.log(c); //undefined
})(1, 2);
/*
Argument properties whose index is greater than or equal to the number of formal parameters (i.e. additional arguments which do not correspond to named parameters) are not bound to any named parameter value
*/


/*
Similarly if a function call does not supply an argument for every named paramter, the unfulfilled parameters should not be bound to the arguments object and their values cannot be updated by modifying the arguments objects
*/

(function(a, b, c) {
	c = 10;
	console.log('2' in arguments); //false
})(1, 2);
