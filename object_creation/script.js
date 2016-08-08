var person = new Object();

/*Computed Member Access Operator*/
person['firstName'] = 'Bharat';
person['lastName'] = 'Poptwani';

var firstNameProperty = 'firstName';

console.log(person);
console.log(person[firstNameProperty]);

/*Member Access Operator*/
console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
person.address.street = "Lokmanya Nagar";

/*Accessing through both Member Access Operator and Computed Member Access Operator*/
console.log(person.address.street);
console.log(person['address']['street']);
