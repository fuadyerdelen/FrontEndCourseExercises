function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function sum(arr) {
	let result = 0;

	arr.forEach(function (number) {
		result += number;
	})
	return result;
}

function multiply() {
	let result = 1;

	arr.forEach(function (number) {
	    	result *= number;
	})
	return result;
}

function power() {
	return Math.pow(power, number);
}

function factorial() {
	let result = 1;

	for (let i = 1; i <= num; i++) {
	    result *= i;
	};

	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}