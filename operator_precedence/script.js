/*
  Operator Precedence
  ===================

  Operator Precedence means the order in which operators are called when multiple operators are used in a statement.
  Operator Precedence table - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

var result = 3 + 7 * 5;
/*
  In this scenario since multiplication has higher precedence, so it will be called first, so the first step would be
    var result = 3 + 35;
  then addition operator would be called, so
    var result = 38;
  and then assignment operator will assign the value 38 to result
*/
console.log('result', result); //should print 38