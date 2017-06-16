//Define functional objects to hold persons in javascript
var Person = function(name) {
  this.name = name;
};

//Add a new getter method to the person object
Person.prototype.getName = function() {
  return this.name;
};

//Create a new object of type person
var John = new Person('john');

//Try the getter
console.log(John.getName());

//Add a new method to the person object
Person.prototype.sayName = function() {
  console.log('Hi, my name is '+ this.name);
};

//use the 'sayname' method on john object
John.sayName();