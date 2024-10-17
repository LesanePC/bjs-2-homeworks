"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x1;
	let x2;
	let d = b ** 2 - 4 * a * c;

	if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d === 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	}
	return arr;
}

console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = percent / 100 / 12;
	let loanAmount = amount - contribution;
	let monthlyPayment = loanAmount * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1));
	let totalPayment = monthlyPayment * countMonths;
	totalPayment = Number(totalPayment.toFixed(2));

	return totalPayment;


}
