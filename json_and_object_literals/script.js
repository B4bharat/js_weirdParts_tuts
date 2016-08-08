/*
Javascript Object Literals and JSON are used interchangeably and is confusing for most of the developers but they are very different from each other.

In the earlier days of web development, the data over the network was passed in XML format like so
<objectToPass>
  <firstName>Bharat</firstName>
  <lastName>Poptwani</lastName>
</objectToPass>

People quickly realised this isn't the most efficient way, because as we can clearly see we are writing a single property twice just to send one value.
So instead people looked at javascript's object literals and felt this is the better way and hence the name Javascript Object Notation [JSON]

JSON has stricter syntax than javascript's object literals as you can see from over here - http://json.org/
*/

var objectLiteral = {
  firstName: 'Bharat',
  lastName: 'Poptwani'
};

//JSON.stringify converts a javascript object to a valid JSON string
console.log(JSON.stringify(objectLiteral));
//converts to {"firstName":"Bharat","lastName":"Poptwani"}

var JSONValue = '{ "firstName": "Bharat", "lastName": "Poptwani" }';

//JSON.parse parses a valid JSON string into a javascript object literal
console.log(JSON.parse(JSONValue));
//converts to Object {firstName: "Bharat", lastName: "Poptwani"}