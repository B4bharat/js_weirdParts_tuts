var person = {
	'firstName': 'Bharat',
	'lastName': 'Poptani',
	'fullName': function () {
		console.log('fullName = ' + this.firstName + ' ' + this.lastName);
	}
};

 var logName = function(lang1, lang2) {
 	this.fullName();
 };

 var logFullName = logName.bind(person);

 logFullName();
