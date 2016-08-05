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

/*
 Operator Associativity
 ======================

 Operator Associativity also helps in determining the order in which the operators are called, but ONLY WHEN the operators have SAME PRECEDENCE
*/

var a = 4, b = 7, d = 10;

b = a = d;
/*
  since all are assignment operators, there is no question of determing the precendence, all have same precedence, so we gotta check the associativity.
  Since assignment operators are right-to-left associative,
  d's value will be assigned to a, so b = 10
  and then b will be assigned the value 10.
*/
console.log('b', b); //should return 10

var associativityResult = 30 + 20 - 15;
/*
  Addition and subtraction operators exhibit left-to-right associativity
  var associativityResult = (30 + 20) - 15;
  var associativityResult = 50 - 15;
  var associativityResult = (50 - 15);
  var associativityResult = 35;
*/
console.log('associativityResult', associativityResult);