function makeGreeting(language) {

  return function(firstName, lastName) {

    if (language === 'en') {
      console.log('Hello '+ firstName + ' ' + lastName);
    }

    if (language === 'es') {
      console.log('Hola '+ firstName + ' ' + lastName);
    }

  };
}

/*
====================================
    GLOBAL EXECUTION CONTEXT
- 'makeGreeting' function declaration
- Variables - 'englishGreeting', 'spanishGreeting'
====================================
*/

var englishGreeting = makeGreeting('en');
/*
====================================
'makeGreeting' EXECUTION CONTEXT [1st time]
- local variable 'language' with value as 'en'
- returns an anonymous function which has reference to the 'language' variable CREATED AT THAT TIME[when the value is 'en'] and pops out of the stack
====================================
====================================
    GLOBAL EXECUTION CONTEXT
- 'makeGreeting' function declaration
- Variables - 'englishGreeting', 'spanishGreeting'
====================================
*/
var spanishGreeting = makeGreeting('es');
/*
====================================
'makeGreeting' EXECUTION CONTEXT [2nd time]
- local variable 'language' with value as 'es'
- returns an anonymous function which has reference to the 'language' variable CREATED AT THAT TIME[when the value is 'es'] and pops out of the stack
====================================
====================================
    GLOBAL EXECUTION CONTEXT
- 'makeGreeting' function declaration
- Variables - 'englishGreeting', 'spanishGreeting'
====================================
*/

englishGreeting('Bharat', 'Poptwani');
/*
====================================
'englishGreeting' EXECUTION CONTEXT
- local variables 'firstName' and 'lastName' whose values are 'Bharat' and 'Poptwani' respectively
- reference to the outer environment variable 'language' which was created when 'makeGreeting' was called for the first time
- Uses the value of 'language' variable when 'makeGreeting' was called first time ['en']
- Javascript engine knows that this function object which is returned to 'englishGreeting' was created in the first execution context of 'makeGreeting' function and thats why it points to the value of 'language' during that execution context[which was 'en']
- Once the execution of the 'englishGreeting' function gets over, it pops out of the execution stack
====================================
====================================
    GLOBAL EXECUTION CONTEXT
- 'makeGreeting' function declaration
- Variables - 'englishGreeting', 'spanishGreeting'
====================================
*/
spanishGreeting('Suraj', 'Shetty');
/*
====================================
'spanishGreeting' EXECUTION CONTEXT
- local variables 'firstName' and 'lastName' whose values are 'Suraj' and 'Shetty' respectively
- reference to the outer environment variable 'language' which was created when 'makeGreeting' was called for the second time
- Uses the value of 'language' variable when 'makeGreeting' was called second time ['es']
- Javascript engine knows that this function object which is returned to 'spanishGreeting' was created in the second execution context of 'makeGreeting' function and thats why it points to the value of 'language' during that execution context[which was 'es']
- Once the execution of the 'spanishGreeting' function gets over, it pops out of the execution stack
====================================
====================================
    GLOBAL EXECUTION CONTEXT
- 'makeGreeting' function declaration
- Variables - 'englishGreeting', 'spanishGreeting'
====================================
*/