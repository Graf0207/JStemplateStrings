/*--------NEW FUNCTION------------*/

function greet(name) {
	console.log(`Hello ${name}`);
}
greet('Mark');

/*--------NEW FUNCTION------------*/

function createEmail (to, from, subject, message) {
	console.log (`
		To: ${to}
		From: ${from}
		Subject: ${subject}
		Message: ${message}
	`);
}
createEmail ('bill@gmail.com', 'mark@gmail.com', 'Hello!', 'How are you doing?');

/*--------NEW FUNCTION------------*/

function sum (x, y) {
	console.log(`${x} + ${y} = ${x + y}`);
}
sum(5, 20);

/*--------NEW FUNCTION------------*/

let name = 'Bill';
console.log(upperName`Hello ${name}`);
function upperName(literals, value) {
	return literals[0] + value.toUpperCase();
}