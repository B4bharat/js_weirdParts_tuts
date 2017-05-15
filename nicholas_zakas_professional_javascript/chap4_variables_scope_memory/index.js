var name = "Bharat";
name.age = 25; // Primitive values can't have properties added to them, even though attempting to do so won't throw an error
console.log('name.age', name.age); //as you can see it returns undefined

/**
 * Copying Values
 */
//For primitive types
var num = 5;
var num2 = num;
// var num2 just copies the primitive value stored in 'num', both are allocated completely different memory locations.

//For reference types
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Bharat";
console.log(obj2.name);
obj2.age = 25;
console.log(obj1.age);

/**
 * As we can see, when a reference type is copied from one location to another, it not just copies the value, but also starts pointing to the same memory location
 * Thats why when 'obj1' was copied to 'obj2', 'obj2' didn't just become a variable containing reference type, it started pointing to the same location as 'obj1', thats why any change in 'obj1' [e.g. addition of 'name' property] is reflected on 'obj2' as well and vice-versa
 */
