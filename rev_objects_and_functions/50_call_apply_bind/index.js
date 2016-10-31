var person = {
	'firstName': 'Bharat',
	'lastName': 'Poptani',
	'fullName': function () {
		console.log('fullName = ' + this.firstName + ' ' + this.lastName);
	}
};

 var logName = function(lang1, lang2) {
 	console.log('Arguments '+ lang1 + ' ' + lang2);
 	this.fullName();
 	console.log('----------------------');
 };

 var logFullName = logName.bind(person, 'sindhi', 'gujrati');

 logFullName();

 logName.call(person, 'sindhi', 'gujrati');
 logName.apply(person, ['sindhi', 'marathi']);

