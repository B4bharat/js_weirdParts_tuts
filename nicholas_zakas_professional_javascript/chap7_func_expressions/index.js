//A simple function expression example
var shoot = function(arg1, arg2) {
  //function body
}
shoot();

/*
shoot()
var shoot = function(arg1, arg2) {
  //function body
}

This won't execute because the following sequence of actions will happen:
1. During the 'Execution Context [CREATION PHASE]', the variable 'shoot' will be added to the memory and javascript engine will set 'undefined' as the value for it.
2. During the 'Execution Context [EXECUTION PHASE]', when line #8 will try to call the 'shoot' function, it presently has the value 'undefined', so we will get an error 'undefined is not a function' and the execution will stop
3. On line #9 finally the 'shoot' variable will have a value [function in this case], so undefined will be replaced with that value in the memory where 'shoot' is stored.
*/

var suraj = function dheeraj() {
  //function body
}
console.log(suraj.name); //will return 'dheeraj'

var suraj = function() {
  //function body
}
console.log(suraj.name); //will return '' (empty string)
console.log(typeof suraj.name); //will return string
