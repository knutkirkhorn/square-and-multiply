import test from 'ava';
import m from '.';

test('square and multiply some numbers', t => {
    t.is(m(14, 27, 37), 6);
    t.is(m(23, 22, 86), 23);
    t.is(m(2991, 388, 5912), 41);
});