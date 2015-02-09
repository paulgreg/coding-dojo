'use strict';

function RomanToNumeric() {
};

RomanToNumeric.prototype.parse = function(romanNumber) {
    var c = 0,
	numbers = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};
	
    for(var i = 0; i < romanNumber.length; i++) {
       	var current = numbers[romanNumber.charAt(i)];
       	var next = numbers[romanNumber.charAt(i+1)] || 0;

	c += (current < next) ? -current : +current;
    }

    return c;
};
