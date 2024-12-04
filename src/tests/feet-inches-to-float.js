const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.feetInchesToFloat()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.feetInchesToFloat()', pastaparse.feetInchesToFloat);

if (!pastaparse.feetInchesToFloat) {
    assert.terminateTestBlock();
    return;
}

assert.throwsError(TEST_NAME, 'Throws an error when given an empty string', 'pastaparse.feetInchesToFloat("")', pastaparse.feetInchesToFloat, "");
assert.throwsError(TEST_NAME, 'Throws an error when given a Null input', 'pastaparse.feetInchesToFloat(null)', pastaparse.feetInchesToFloat, null);
assert.throwsError(TEST_NAME, 'Throws an error when given only feet', 'pastaparse.feetInchesToFloat("1\'")', pastaparse.feetInchesToFloat, "1\'");
assert.equals(TEST_NAME, 'Returns 1 for 1\' 0"', 'pastaparse.feetInchesToFloat("1\' 0")', pastaparse.feetInchesToFloat("1' 0\""), 1);
assert.equals(TEST_NAME, 'Returns 5.5 for 5\' 6"', 'pastaparse.feetInchesToFloat("5\' 6\"")', pastaparse.feetInchesToFloat("5' 6\""), 5.5);
assert.equals(TEST_NAME, 'Returns 0.5416666666666666 for 0\' 6 1/2"', 'pastaparse.feetInchesToFloat("0\' 6 1/2\"")', pastaparse.feetInchesToFloat("0' 6 1/2\""), 0.5416666666666666);
assert.equals(TEST_NAME, 'Returns 3.75 for 3\' - 9"', 'pastaparse.feetInchesToFloat("3\' - 9\"")', pastaparse.feetInchesToFloat("3' - 9\""), 3.75);
assert.equals(TEST_NAME, 'Returns 15.4895833333333333 for 15\'-5 7/8"', 'pastaparse.feetInchesToFloat("15\'-5 7/8\"")', pastaparse.feetInchesToFloat("15'-5 7/8\""), 15.4895833333333333);

assert.endTestBlock();