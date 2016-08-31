(function (global, name) {
	var greeting = 'Hello '+ name;
	/*Since IIFE creates a function scope, this 'greeting' variable is in the function scope, it dooesn't tinkers with the 'greeting' variable in script.js which is in the 'global scope'*/
	console.log(greeting);

	global.greeting = 'Hello';
	/*
		When you puposefully want to modify a variable in the global execution context or make something available globally(publicly)
	*/
}(window, 'Bharat'));

console.log(greeting); //will log the value of the variable 'greeting' which is in the 'global scope' which is 'Hola'
