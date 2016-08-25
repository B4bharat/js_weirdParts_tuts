//****** By Value [Primitives] ******
var a = 3; //a new memory location [referenced with variable 'a'] is created which holds the value '3'
var b; //a new memory location [referenced with variable 'a'] is created

b = a; //Only the value of variable 'a' is passed to b, variable 'b' creates a new memory location of it's own and sits there with the value of 'a'
a = 2; //new value '2' is added to the memory location referenced by variable 'a'

console.log(a); //2
console.log(b); //3

//by reference (all objects including functions)
var object1 = { 'greeting': 'hi' };
var object2;

object2 = object1; //unlike 'passing by value', here object2 will point to the same memory location as 'object1', so will have same value as 'object1' but this also ensures that in future when 'object1's value is changed, it will change 'object2's value as well and vice-versa
console.log(object1); // { 'greeting': 'hi' }
console.log(object2); // { 'greeting': 'hi' }

object1.greeting = 'hello'; //since both 'object1' and 'object2' are pointing to the same memory location, both will have the same value 'hello' now
console.log(object1);// { 'greeting': 'hello' }
console.log(object2); // { 'greeting': 'hello' }

//by reference (even as parameters)
function changeGreeting(obj) {
	obj.greeting = 'Hola';
}

changeGreeting(object2);
console.log(object1); //'Hola'
console.log(object1); //'Hola'

// equals operator sets up new memory space (new address)
object1 = { 'greeting': 'howdy' };
console.log(object1); // 'howdy'
console.log(object2); // 'Hola'
