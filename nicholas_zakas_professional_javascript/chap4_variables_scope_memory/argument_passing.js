/**
 * In Javascript, all the arguments are passed by value.
 * It means that the value outside the function is copied into the argument inside the function.
 * So, just like a primitive value is copied into another variable, it will copy primitive values and for reference type values, the argument and the value will point to the same memory location
 */

function addTen(num) {
  num += 10;
  return num;
}

var count = 20;
var result = addTen(count);
console.log(count);
console.log(result);

/**
 * here in function addTen, a local primitive variable 'count' is passed which is copied into 'num'
 * within the function, the value of 'num' changes, but 'count' doesn't changes since count was a primitive value
 */

function setName(obj) {
  obj.name = 'Bharat';
}

var person = new Object();
setName(person);
console.log(person);

/**
 * setName function accepts a single argument
 * 'person' object is passed to setName which copies the value to 'obj' and now both 'obj' and 'person' are pointing to the same memory location just like if any other reference types are copied
 * a new property 'name' is dynamically added to 'obj' and since 'person' references the same memory location, person object gets the same property as well as we can see in line #28
 * This doesn't means that the value was 'passed by reference', it will be cleared in the next section
 */

function setNewName(obj) {
  obj.newName = 'Kalyana';
  obj = new Object();
  obj.newName = 'Aakash';
}

setNewName(person);
console.log(person);

/**
 * As stated before, function arguments in javascript are just passed by value and this example shall prove it
 * when 'person' object is passed to 'setNewName' function, the 'obj' variable copies it and thereby both 'person' and 'obj' are now pointing to/referencing the same memory locations
 * But when 'obj' is initialised to a new object, it breaks its connection with 'person' object because in ECMASCRIPT, function arguments are nothing more than local variables
 */