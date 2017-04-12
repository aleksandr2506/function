;(function(){
	'use strict';

	var a = +prompt('Делай мне a:');
	var b= +prompt('Делай мне b:');

	function min(a, b) {
  	return a < b ? a : b;
	}

	console.log(min(a, b));

	var a = +prompt('Крайнее число диапазона:');

	variable:
  	for (var i = 2; i < a; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue variable;
    }

    alert( i ); 
  }

})();