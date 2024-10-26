function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	const length = arr.length;

	for (let i = 1; i < length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	const avg = (sum / length).toFixed(2);

	return {
		min,
		max,
		avg
	};
}


function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
	let maxElement = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}
	let minElement = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < minElement) {
			minElement = arr[i];
		}
	}
	return maxElement - minElement || 0;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 === 0) {

			sumEvenElement += arr[i];
		} else {

			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement || 0;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	return sumEvenElement / countEvenElement || 0;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let arr of arrOfArr) {
		const result = func(...arr);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}
