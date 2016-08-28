function clubInfo(name, currentStanding, foundationYear) {
	console.log(name);
	console.log(currentStanding);
	console.log(foundationYear);
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

