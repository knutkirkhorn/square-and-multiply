function getBitRepresentation(number) {
	const representation = [];
	let temporaryNumber = number;

	while (temporaryNumber >= 1) {
		representation.unshift(Math.floor(temporaryNumber % 2));
		temporaryNumber /= 2;
	}

	return representation;
}

export default function squareAndMultiply(x, c, m) {
	const iterations = getBitRepresentation(c);
	let z = 1;

	// eslint-disable-next-line no-restricted-syntax
	for (const iteration of iterations) {
		z **= 2;

		if (iteration === 1) {
			z *= x;
		}

		z %= m;
	}

	return z;
}
