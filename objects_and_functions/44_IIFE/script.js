// Function Statement
function passComplPercentageCalc(totalPasses, complPasses) {
	console.log(complPasses/totalPasses*100);
}
passComplPercentageCalc(120, 105);

//Using a function expression
/*
	The part after the assignment operator is a function expression, it returns a function object.
	And it gets assigned to variable 'passComplPercentage', as we know it, the code property of the function object can be invoked using paranthesis '()' and that's why passComplPercentage invokes/runs the code when we do this - passComplPercentage()
*/
var passComplPercentage = function(totalPasses, complPasses) {
	console.log(complPasses/totalPasses*100);
};
passComplPercentage(120, 105);

//Immediately invoked function expression
/*eslint-disable*/
var passComplPercentageIIFE = function(totalPasses, complPasses) {
	return complPasses/totalPasses*100;
}(120,105);
/*eslint-enable */
console.log(passComplPercentageIIFE);
/*
	The function expression on line #19 as we can see was immedietly invoked with parameter values 120, 105.
	It was achievable because as we know it the function expression on line #19 returns a function object which has a code property which can be invoked/run using paranthesis.
	Since the function expression was immedietly invoked after it's definition, its called Immedietly invoked function expression [IIFE]
*/

//One can just simply write javascript expressions, it doesn't necessarily needs to be stored in a variable. see examples below
3; // A Number expression
"I am a string expression"; // A String expression
{
	name: 'Bharat Poptwani'
}; //An Object Literal

//What about function?
//The code below will throw an error - Unexpected token - (
/*function(totalPasses, complPasses) {
	console.log(complPasses/totalPasses*100);
}*/
/*
	This is because as soon as the javascript's syntax parser seens the keyword 'function', it expects that a name for it to be written for it to qualify as a statement like so:
	function passCompletionPercentage(totalPasses, complPasses) {
		console.log('pass completion stat');
	}
 */

/*
	So we trick the syntax parser by writing a bracket operator around the function expression.
	So the syntax parser thinks that the expression inside the bracket operator needs to be evaluated.
	Remember only expressions can be added inside a bracket operator
*/
(function(name) {
	console.log(name);
});

/*
	Since function expression can be added inside bracket operator which returns a function object, as we know it about the function object, it can be invoked using paranthesis, so let's do it
*/
(function passComplPercentageIIFE2(complPasses, totalPasses) {
	console.log('classic IIFE example');
	console.log(complPasses/totalPasses*100);
}(93, 100));
