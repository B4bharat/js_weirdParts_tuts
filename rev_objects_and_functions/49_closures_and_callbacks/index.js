function sayHiLAter() {

	var greeting = 'Hi';

	setTimeout(function() {
		console.log(greeting);
	}, 3000);
}
sayHiLAter();

function hello(param1, param2, callback) {
	callback(param1, param2);
}
hello(3, 4, function(a, b) { console.log(a+b); });
