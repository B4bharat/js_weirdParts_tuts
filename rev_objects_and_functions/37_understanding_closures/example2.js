function closureFunc(param1) {

  var returnFunc = function() {
    console.log('pure paramter', param1+1);
  }

  param1 += 1;

  return returnFunc;

}

var holdClosureFunc = closureFunc(1);
holdClosureFunc();

/*=========Execution Flow=============*/
/*
  - Global Execution Context
    - contains variable 'holdClosureFunc' which holds the value of 'closureFunc'
    - when 'closureFunc' is called by passing an argument = 1, it creates 'closureFunc' execution context
  - closureFunc's Execution context
    - var[function parameter/basically a placeholder] 'param1' is local to 'closureFunc' scope and contains the value 1 passed at line#13
    - var 'returnFunc' contains a function
    - line#7 increments the 'param1' by 1, thus its new value is 2
    - line#9 returns the function in the 'returnFunc' variable and 'closureFunc' exits the execution context, but as we know it all the variables inside the 'closureFunc' function remain in the memory
  - holdClosureFunc recieves the function returned by 'closureFunc' at line#13
  - line#14 executes 'holdClosureFunc' thereby creating 'holdClosureFunc' execution context
  - 'holdClosureFunc' Execution Context
     - contains a console statement which wants the value of 'param1', 'param1' as we know it was sitting lexically outside of the 'holdClosureFunc' function while it was created/declared
     - Javascript references 'param1' whose current value is 2 and thus the console statement is executed and thereby we get the result = 3
*/