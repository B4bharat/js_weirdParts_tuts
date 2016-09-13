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

};

var logPerson = logName.bind(person);
/*
- This basically can be read as bind/reference the 'this' keyword of logName function to the 'person' object.
- The 'bind' method binds the function to an object which is passed in as the first parameter and creates a new copy of that function which is stored in the variable ['logPerson' in our case] it is assigned to.
- 'logName' function in our case is bound to 'person' object and this it's 'this' keyword will now point to the 'person' object and thats why it can access the 'getFullName' method of the 'person' object
*/
logPerson();

