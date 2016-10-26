function makeGreeting(language) {
	return function(firstName, lastName) {
		if (language === 'en') {
			console.log('Hello '+firstName+' '+lastName);
		}

		if (language === 'es') {
			console.log('Hola '+firstName+' '+lastName);
		}
	};
}

var englishGreeting = makeGreeting('en');
var spanishGreeting = makeGreeting('es');

englishGreeting('Bharat', 'Poptwani');
spanishGreeting('Proshonjit', 'Mitra');
