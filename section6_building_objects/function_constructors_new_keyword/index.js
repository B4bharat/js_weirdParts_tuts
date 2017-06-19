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

let Akash = new Person('Akash', 'Kunder');
console.log(Akash);

let Amogh = new Person('Amogh', 'Joshi');
console.log(Amogh);