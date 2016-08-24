function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
var twice = multiplier(2);
var result = twice(5); //10
console.log(result);
var thrice = multiplier(3);
var thriceResult = thrice(5); //15
console.log(thriceResult);

/*
A function which has the ability to reference/access a specific instance of a local variable in a function call is called 'closure'.

********Simplified explanation**********
- on line #6, when multiplier was called with the value of 'factor' parameter as '2', it was the first 'instance' when it was called. As we know function arguments are local variables [locally scoped to that function], factor's value is set to '2' and it can't be accessed outside of the multiplier function.
- multiplier function returns a function, so the variable 'twice' on line #6 has a value/is now referencing the function inside multiplier function.
- when twice is invoked on line #7, it invoked the inner function which performed the multiplication and as you can see, it still had access to the value of local variable 'factor' and thats why it was a 'closure'.

A function that 'closes over' a local variable is called a 'closure'

Similarly when multiplier is called again on line #9, the function inside now has the access to the new instance(3) of the local variable 'factor'.

*/

function Person(pName) {
  var _name = pName;

  this.getName = function() {
    return _name;
  };
}

var me = new Person('Bharat');

console.log(me.getName()); //This gets access to the private 'local variable' - '_name' outside of the Person function declaration and hence its a 'closure'