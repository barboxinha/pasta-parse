const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.roundToDecimalPlace()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.roundToDecimalPlace()', pastaparse.roundToDecimalPlace);

if (!pastaparse.roundToDecimalPlace) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Rounds 50 to 50', 'pastaparse.roundToDecimalPlace(50)', pastaparse.roundToDecimalPlace(50), 50);
assert.equals(TEST_NAME, 'Rounds 0.123456789 to 0.1', 'pastaparse.roundToDecimalPlace(0.123456789, 1)', pastaparse.roundToDecimalPlace(0.123456789, 1), 0.1);
assert.equals(TEST_NAME, 'Rounds 0.123456789 to 0.12', 'pastaparse.roundToDecimalPlace(0.123456789, 2)', pastaparse.roundToDecimalPlace(0.123456789, 2), 0.12);
assert.equals(TEST_NAME, 'Rounds 0.123456789 to 0.123', 'pastaparse.roundToDecimalPlace(0.123456789, 3)', pastaparse.roundToDecimalPlace(0.123456789, 3), 0.123);
assert.equals(TEST_NAME, 'Rounds 1 to 1.0000', 'pastaparse.roundToDecimalPlace(1, 4)', pastaparse.roundToDecimalPlace(1, 4), 1.0000);
assert.equals(TEST_NAME, 'Rounds -1.2345 to -1.23', 'pastaparse.roundToDecimalPlace(-1.2345, 2)', pastaparse.roundToDecimalPlace(-1.2345, 2), -1.23);
assert.equals(TEST_NAME, 'Rounds -73.235274284402 to -73.235', 'pastaparse.roundToDecimalPlace(-73.235, 3)', pastaparse.roundToDecimalPlace(-73.235274284402, 3), -73.235);

assert.endTestBlock();