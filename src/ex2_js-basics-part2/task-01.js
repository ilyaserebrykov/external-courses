function typeChecker(a) {
	if (typeof a === 'string') {
		return 'string';
	}
	
	if (typeof a === 'number') {
		return 'number';
	}
	
	return undefined;
}
module.exports = typeChecker