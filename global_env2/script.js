var a = "Hello World!";

function b() {
	// body...
}

/*
- During the execution phase, when the execution context is created, it will attach these variables a and b to the global object [since it is sitting in the global environment lexically]
- Everything that is lexically sitting in the global environment will get attached to the global object.
- So, you can access these them using window.a and window.b or simply as a and b

- Execution context contains these 4 things
	- Relevant Object [In Global env, its the Global object which is 'windows']
	- a special 'this' variable
	- a reference to the 'outer environment'
	- the written code that needs to be executed
*/
