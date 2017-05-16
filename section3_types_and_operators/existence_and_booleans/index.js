/**
 * This demonstration shows how to use coersion to our advantage
 * 
 * Boolean(undefined) = false
 * Boolean(null) = false
 * Boolean("") = false
 * 
 * basically Boolean Wrapper Type returns false for every falsy values
 */

var a;

//some async method which makes an async call and returns a value which is assigned to 'a'
a = "hello";

if(a) {
  console.log('a is assigned a value');
}
/**
 * Since every value inside an if statement is coerced to Boolean, we can take advantage to check if a value exists or not inside a variable
 */