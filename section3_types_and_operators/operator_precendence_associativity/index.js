/**
 * Operator Precedence
 * -------------------
 * 
 * Operator precedence means the order in which operators are applied, the higher the precendency/importance of operators, the early they are taken care of
 * 
 * Operator Associativity
 * ----------------------
 * 
 * If the precedence of the operators are same, associativity determines in which order an operator will be applied. It can either be left-to-right called left associativity or right-to-left called right associativity
 */
var result = 3 + 4 * 5; 
console.log(result);
// Multiplication has higher precedency then addition so 4*5 happened first and then 3 + 20(result of 4*5)