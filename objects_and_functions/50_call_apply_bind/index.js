var person = {
  'firstName': 'Bharat',
  'lastName': 'Poptwani',
  'getFullName': function() {

    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
};

/*var logName = function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName());
  // This will return undefined because as we know it, in a function statement or function expression, the 'this' keyword points to the global object ['window' object in browser environment and 'global', 'process' object in node environment]
  // When a function object is created, it's prototype contains three methods attached to it - call, bind and apply which controls where the 'this' keyword should point to

};
logName();*/

var logName = function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('---------------------------------');

};

var logPerson = logName.bind(person);
/*
- This basically can be read as bind/reference the 'this' keyword of logName function to the 'person' object.
- The 'bind' method binds the function to an object which is passed in as the first parameter and creates a new copy of that function which is stored in the variable ['logPerson' in our case] it is assigned to.
- 'logName' function in our case is bound to 'person' object and this it's 'this' keyword will now point to the 'person' object and thats why it can access the 'getFullName' method of the 'person' object.
- Bind never invokes a function, it merely creates a new copy of the function
- We could've alse written the function this way::-
  var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
  }.bind(person);
  This does the same thing, it creates a function on the fly which is bound to the 'person' object which returns a new copy of the function
*/
logPerson('en'); //Since its still a function object, the bind method only affected 'logName's 'this' keyword and nothing else, it can be invoked with arguments

console.log('----- call method -----');
logName.call(person, 'es', 'en');
/*
- The call method works just like bind, but instead of creating a new copy of the function it is attached to, it immediately invokes the function it is attached to.
- the first argument of 'call' method is the object one wishes the function's 'this' keyword to be attached to, the subsequent arguments are the values that needs to be passed to the function's arguments
*/

console.log('----- Apply method -----');
logName.apply(person, ['es', 'es']);
/*
- 'Apply' method is exactly like call i.e. it immediately invokes the function it is attached to, but the only difference is that it takes the values of the arguments that needs to be passed to the function as an 'Array'
*/

/*
Trick the syntax parser by making it realise that its not a normal function statement, its a function expression by adding a 'grouping' operator around
*/
(function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('---------------------------------');

}).apply(person, ['en', 'es']);



