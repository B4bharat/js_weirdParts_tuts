/*
Expression - Any operation that results in a value. It doesn't necessarily be saved to a variable, but one thing is certain an expression is something that returns a value.
for e.g.
1 + 2 //returns 3
5 * 3 //returns 15
1 === 2 //returns false
var a = { greeting: 'hi' }; //equality operator returns { greeting: 'hi' }

Statement - A stetement is something which doesn't returns a value, it just executes a single or bunch of commands
for e.g.
if( 1 === 1 ) {
	console.log('true');
}
can NEVER do var a = if(1 === 1) { console.log('true'); } becuase it never returns a value.
*/

/*
Function Statement example
*/
defender(); /* As we know it, when 'Execution Context' [Global Execution context in this case] is created, during the 'creation phase', all the variables are placed in the memory, function statement alongwith the commands/statements inside are placed in the memory during the 'creation phase'.
During the 'execution phase', they are therefore available and that's why we can call/invoke a function 'STATEMENT' before their definition
*/

function defender() {
	console.log('defend your area');
}
