function greet(name) {
	name = name || "<You Name Here>";
	/*
	 a 'logical OR' operator returns a truthy value
	 so for e.g. if its undefined || "hello", it will return "hello"
	 likewise, 0 || 1 -> 1
	 null || "Bharat" -> "Bharat"

	 So this technique can be used to set default values, although in ES6 there is a 'default parameters' feature
	*/
	console.log("Hello " + name);
}

greet('Bharat');
greet();
