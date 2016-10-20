function buildFunctions() {
  var arr = []; //This will hold all the anonymous functions that we are gonna keep pushing

  for (var i = 0; i < 3; i++) {
    arr.push( function() {
      console.log(i);
    })
    //When we are pushing functions into the array, always remember the functions aren't getting executed, they are just getting stacked
  }

  return arr;
  //The function buildFunctions leaves the 'execution context', but the variables in its environment [viz i, arr] remain in the memory
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

/*=========Execution Flow=============*/
/*
  - Global Execution context
    contains variable fs
    When 'buildFunctions' is called, 'buildFunctions' execution context gets created
  - buildFunctions' Execution context
    contains a variable arr
    line #4 creates variable i with initial value set to 0
    line #5 keeps pushing anonymous functions into the array but NEVER executes it
    When i reaches has value = 3, the for loop is broken because the conditional statement says 'i < 3'
    buildFunctions returns the arr variable and pops off the stack BUT the variables created inside of it remain in the memory [with value i=3 and arr = [anonymousFucntion1(), anonymousFucntion2(), anonymousFucntion3()]]
  - line #16 executes and fs[0]()'s execution environment is created
  - fs[0]()'s execution environment
    contains variable 'i' which references to i which was lexically sitting in 'buildFunctions' variable environment, since it is in the memory, javasript fetches it's current value which is 3 and executes the console statement thereby returning 3
  - line #17 executes and fs[1]()'s execution environment is created
  - fs[1]()'s execution environment
    contains variable 'i' which references to i which was lexically sitting in 'buildFunctions' variable environment, since it is in the memory, javasript fetches it's current value which is 3 and executes the console statement thereby returning 3
  - line #18 executes and fs[2]()'s execution environment is created
  - fs[2]()'s execution environment
    contains variable 'i' which references to i which was lexically sitting in 'buildFunctions' variable environment, since it is in the memory, javasript fetches it's current value which is 3 and executes the console statement thereby returning 3

*/