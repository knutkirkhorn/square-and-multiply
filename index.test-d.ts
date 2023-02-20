import {expectType} from 'tsd';
import squareAndMultiply from './index.js';

expectType<number>(squareAndMultiply(14, 27, 37));
expectType<number>(squareAndMultiply(23, 22, 86));
expectType<number>(squareAndMultiply(2991, 388, 5912));
