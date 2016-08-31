(function (name) {
	var greeting = 'Hello '+ name;
	/*Since IIFE creates a function scope, this 'greeting' variable is in the function scope, it dooesn't tinkers with the 'greeting' variable in script.js which is in the 'global scope'*/
	console.log(greeting);
}('Bharat'));
