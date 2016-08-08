/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation
 We can access object's properties in two ways
 - dot notation
 - Bracket notation

 When accessing properties with bracket notation, always ensure that the property names are mentioned as 'strings'.
 because if they are NOT, it can lead to very undesirable result as we will see below
*/

var foo = {
  'unique_prop': 1
};

var bar = {
  'unique_prop': 2
};

var object = {};

object[foo] = "value";

console.log(object[bar]); //This will return "value"

/*
  Unreal right?
  Makes no sense!

  Lets walk the code line by line

  Line 10, we are declaring 'foo' as an object with a property 'unique_prop' and it's value 1

  Line 14, we are declaring 'bar' as an object with a property 'unique_prop' and it's value 2

  Line 15, we are declaring and empty object literal

  Line 20, we are assigning 'foo' as a property of 'object' Object, now since we haven't written property name 'foo' as a string, it converts it to a string.
  This is basically what happens behind the scenes
  object[foo.toString()] = 'value'

  Now since foo is already declared as an object on line 10, so foo.toString() converts to '[object object]', you can check by doing console.log(foo.toString())

  So Line 20 basically becomes
  object = {
    '[object object]' = 'value'
  }

  Now, when we are trying to access bar property in line no 22, again we aren't accessing it as a string, so again it does console.log(object[bar.toString()]); behind the scenes

  Line 22 basically is console.log(object['[object object]']);
  And since on line 20 '[object object]' property was set to 'value', line 22 returns 'value'
*/