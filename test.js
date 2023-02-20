// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import squareAndMultiply from './index.js';

test('square and multiply some numbers', t => {
	t.is(squareAndMultiply(14, 27, 37), 6);
	t.is(squareAndMultiply(23, 22, 86), 23);
	t.is(squareAndMultiply(2991, 388, 5912), 41);
});
