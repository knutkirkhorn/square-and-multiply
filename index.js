'use strict';

function getBitRepresentation(number) {
    const representation = [];
    let tempNumber = number;

    while (tempNumber >= 1) {
        representation.unshift(Math.floor(tempNumber % 2));
        tempNumber /= 2;
    }

    return representation;
}

function squareAndMultiply(x, c, m) {
    const iterations = getBitRepresentation(c);
    let z = 1;

    for (let i = 0; i < iterations.length; i++) {
        // eslint-disable-next-line no-restricted-properties
        z = Math.pow(z, 2);

        if (iterations[i] === 1) {
            z *= x;
        }

        z %= m;
    }

    return z;
}

module.exports = (x, c, m) => squareAndMultiply(x, c, m);
