
/*
- Even when no code is written, the javascript engine creates an execution context.
- The Execution context creates two things pre-emptively for us
	- A relevant environment specific object. [In case of the browser environment, the global object is 'Windows' which is created]
	- A  special 'this' variable.
- When you run this code in the browser and check the 'this' variable in the console, you should see it pointing to the 'window' object
*/
