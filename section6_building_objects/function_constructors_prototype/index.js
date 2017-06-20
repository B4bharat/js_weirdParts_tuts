function Person(firstName, lastName) {

  /**
   * Since the Person function is invoked with a 'new' keyword, the 'this' will be set to a new empty object literal
   */
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;

  /**
   * NEVER return anything from a function constructor, it will defeat the purpose of it
   * return {
   *    firstName: 'Canelo',
   *    lastName: 'Alvarez'
   * }
   */
}

//Person('KalyanaSundaram', 'NachiAppan');

Person.prototype.sayHello = function() {
  return this.firstName + ' ' + this.lastName;
};
//Whenever a function constructor is called with the 'new' keyword, it creates a new object, that new object will always have all the properties and methods attached the 'prototype' (object) of the function constructor
//So below Akash and Amogh will be able to access 'sayHello' method because after they are created using the 'new' keyword, this 'sayHello' method will get attached to their '__proto__' property
//It won't however be attached to the function's '__proto__' property

let Akash = new Person('Akash', 'Kunder');
console.log(Akash);

let Amogh = new Person('Amogh', 'Joshi');
console.log(Amogh);