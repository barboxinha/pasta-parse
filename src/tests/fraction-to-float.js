const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.fractionToFloat()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.fractionToFloat()', pastaparse.fractionToFloat);

if (!pastaparse.fractionToFloat) {
    assert.terminateTestBlock();
    return;
}

assert.throwsError(TEST_NAME, 'Throws an error when given an empty string', 'pastaparse.fractionToFloat("")', pastaparse.fractionToFloat, "");
assert.equals(TEST_NAME, 'Returns 1 for 1. Given a whole number.', 'pastaparse.fractionToFloat("1")', pastaparse.fractionToFloat("1"), 1);
assert.equals(TEST_NAME, 'Returns 0.5 for 1/2.', 'pastaparse.fractionToFloat("1/2")', pastaparse.fractionToFloat("1/2"), 0.5);
assert.equals(TEST_NAME, 'Returns 0.5 for 2/4.', 'pastaparse.fractionToFloat("2/4")', pastaparse.fractionToFloat("2/4"), 0.5);
assert.equals(TEST_NAME, 'Returns 0.25 for 1/4.', 'pastaparse.fractionToFloat("1/4")', pastaparse.fractionToFloat("1/4"), 0.25);
assert.equals(TEST_NAME, 'Returns 0.625 for 5/8.', 'pastaparse.fractionToFloat("5/8")', pastaparse.fractionToFloat("5/8"), 0.625);
assert.equals(TEST_NAME, 'Returns 3.75 for 3 3/4.', 'pastaparse.fractionToFloat("3 3/4")', pastaparse.fractionToFloat("3 3/4"), 3.75);

assert.endTestBlock();