/* 
	Problem 1: Multiples of 3 and 5
	
	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

	Find the sum of all the multiples of 3 or 5 below 1000.
*/

const limit = 1000;
let i = 3;
let j = 5;
let sumOfThree = 0;
let sumOfFive = 0;

for(i = 3; i < limit; i = i + 3) {
	const lastDigit = i%10;
	if(lastDigit !== 0 && lastDigit !== 5) {
		sumOfThree += i;
	}
}

for(j = 5; j < limit; j = j + 5) {
	sumOfFive += j;
}

console.log(sumOfThree + sumOfFive);
