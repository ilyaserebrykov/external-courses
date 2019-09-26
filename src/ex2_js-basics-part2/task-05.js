function findMax (arr) {
let max = arr[0];

for (var i = 1; i<arr.lenght; i++) {
	if (max < arr[i]) {
		max = arr[i];
		}
	}
return max
}
module.exports = findMax;