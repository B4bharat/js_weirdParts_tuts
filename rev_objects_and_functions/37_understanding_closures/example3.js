function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
    	(function(j) {
    		return function() {
      		console.log(j);
    		};
    	}(i))

    	/*
    	line 6-10 is Kinda like:
    	function function_name(param1){
				return function() {
					console.log('parameter one', param1);
				}
    	}
    	let function_store = function_name('Hello');
    	function_store();
    	let function_store1 = function_name('Holla');
    	function_store1();
    	let function_store2 = function_name('Hellano');
    	function_store2();
    	 */
    );
  }

  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();
