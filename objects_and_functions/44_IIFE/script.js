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

