function sayHiLater() {

  var greeting = 'Hi!';

  setTimeout(function() {

    console.log(greeting);

  }, 3000);
}

sayHiLater();
/*
=================================
'setTimeout' EXECUTION CONTEXT
- 'setTimeout' closes over 'greeting' variable [it's outer reference environment has reference to 'greeting' variable]
- 'setTimeout' passes a callback as the first parameter, a callback is a function which is passed by another function to be executed when the function that passed it has finished exection, it basically calls back the function that passed it.
- example: setTimeout will finish execution in 3 secs [since 3000ms is passed as the second parameter] and since it has passed a callback function, that callback function will call setTimeout after it has executed and then only it[callback function] will be executed.
- When the callback function is executed, it has reference to 'greeting' variable because setTimeout closes over it. setTimeout is a closure
=================================
=================================
'sayHiLater' EXECUTION CONTEXT
- variable 'greeting' with value 'Hi!'
- invokes setTimeout and finishes the execution
- after invoking setTimeout, its no longer active and is popped off the stack
=================================
=================================
GLOBAL EXECUTION CONTEXT
- Contains 'sayHiLater' function object
=================================
*/