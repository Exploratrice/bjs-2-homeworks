"use strict"

function solveEquation(a, b, c) {
	const discriminant = (b ** 2) - (4 * a * c);
	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		const x = -b / (2 * a);
		return [x];
	} else {
		const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [x1, x2];
	}
}

console.log(solveEquation(1, 5, 4));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 2, 10));




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (
		typeof percent !== "number" ||
		typeof contribution !== "number" ||
		typeof amount !== "number" ||
		typeof countMonths !== "number"
	) {
		return "Ошибка ввода данных";
	}

	if (percent < 0 || percent > 100) {
		return "Процентная ставка должна быть в диапазоне от 0 до 100";
	}

	const percentPerMonth = percent / 100 / 12;

	const loanBody = amount - contribution;

	const monthlyPayment = loanBody * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1));

	const totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));

	return totalAmount;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 20000, 20000, 48));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));