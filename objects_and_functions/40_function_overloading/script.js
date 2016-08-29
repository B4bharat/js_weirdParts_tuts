/*Function Overloading example in Javascript*/

function passingStats(totalPasses, completedPasses, operation) {
  var operationResult;

	switch(operation) {
		case 'passCompletionPercentage': operationResult = completedPasses/totalPasses*100;
			break;
		case 'avgPasses': operationResult = totalPasses/90;
			break;
		default: break;
	}

	return operationResult;
}

function passCompletionPercentage(totalPasses, completedPasses) {
	var passPercentage = passingStats(totalPasses, completedPasses, 'passCompletionPercentage');
	console.log(passPercentage);
}

function avgPasses(totalPasses, completedPasses) {
	var avgPasses = passingStats(totalPasses, completedPasses, 'avgPasses');
	console.log(avgPasses);
}

passCompletionPercentage(120, 90);
avgPasses(100, 70);

