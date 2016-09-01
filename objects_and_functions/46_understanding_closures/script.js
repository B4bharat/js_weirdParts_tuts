function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	};

}

var sayHowdy = greet('Howdy');
sayHowdy('Bharat');
