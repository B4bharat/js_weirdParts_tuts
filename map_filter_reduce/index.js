var tasks = [
{
	'name': 'Strength Training',
	'duration': 30
},
{
	'name': 'Cycling',
	'duration': 30
},
{
	'name': 'Watching UFC',
	'duration': 60
}
];

/******EXTRACTING THE TASK NAMES***********/
//1. The Traditional 'for loop' way
var taskNamesForLoop = [];

for (var i = 0; i < tasks.length; i++) {
	taskNamesForLoop.push(tasks[i].name);
}

console.log('taskNamesForLoop', taskNamesForLoop);

//2. The 'forEach' way
var taskNamesForEach = [];

tasks.forEach(function(task) {
	taskNamesForEach.push(task.name);
});

console.log('forEach', taskNamesForEach);

//3. The 'map' way
var taskNamesMap = tasks.map(function(task, index, taskArray) {
	return task.name;
});

console.log('taskNamesMap', taskNamesMap);








