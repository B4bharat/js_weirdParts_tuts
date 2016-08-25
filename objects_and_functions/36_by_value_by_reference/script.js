//****** By Value [Primitives] ******
var a = 3; //a new memory location [referenced with variable 'a'] is created which holds the value '3'
var b; //a new memory location [referenced with variable 'a'] is created

b = a; //Only the value of variable 'a' is passed to b, variable 'b' creates a new memory location of it's own and sits there with the value of 'a'
a = 2; //new value '2' is added to the memory location referenced by variable 'a'

console.log(a); //2
console.log(b); //3
