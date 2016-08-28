var UFC = [
	1,
	false,
	[
		{
			'name': 'Conor McGregor',
			'weightClass': 'FeatherWeight',
			'nickName': 'Notorious',
			'bestQuote': 'We are not here to take part, we are here to take over'
		},
		{
			'name': 'Michael Bisping',
			'weightClass': 'MiddleWeight',
			'nickName': 'The Count',
			'bestQuote': 'Conceive. Believe. Achieve. SHUT THE FUCK UP!'
		}
	],
	function(name) {
		function getUFCFighter(UFCFighter) {
			return UFCFighter.name === name;
		}
		return UFC[2].find(getUFCFighter);
	},
	{
		'president': 'Dana White',
		'share': '30%'
	},
	'Sellout Crowd'
];
var result = UFC[3]('Conor McGregor');
console.log(result.weightClass);
