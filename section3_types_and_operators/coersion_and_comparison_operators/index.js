console.log(3 < 2 < 1);
/**
 * Since both are 'less than' operators so the operator precedence is same, so associativity will decide the execution order of these operators.
 * since 'less than' operators are 'left associative', the '3 < 2' will execute first which will return false.
 * 'false < 1' is the present state of this operation, so false will be coerced to 0 because javascript coerces values in an operator if they are of dissimilar type
 * so 0 < 1 returns true
 */