/* task 1 - functions with ? and || */
function checkAge (age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Parents agree?');
	}
}

/* First method */
function checkAge (age) {
	return (age > 18) ? true : confirm('Parents agree?')
}

/* Second method */
function checkAge (age) {
	return (age > 18) || confirm('Parents agree?');
}
