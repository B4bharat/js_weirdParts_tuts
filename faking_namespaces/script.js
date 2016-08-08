var greet = 'Hello';
var greet = 'Hola';

console.log(greet);

/*
In other programming languages there are namespaces wherein you can use same variable names in different namespaces [maybe files].
If we write the same variable name in different files, it still attaches itself to the global context and thus we can't do that.
In order to fake it, we have written the code below
*/
var english = {};
var spanish = {};
//Declared two objects which will act as namespaces

english.greet = 'Hello';
spanish.greet = 'Hola';
//Added 'greet' variable to both the namespaces

console.log(english);