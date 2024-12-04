const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.trimTrailingZeroes()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.trimTrailingZeroes()', pastaparse.trimTrailingZeroes);

if (!pastaparse.trimTrailingZeroes) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns 0 for 0', 'pastaparse.trimTrailingZeroes("0")', pastaparse.trimTrailingZeroes("0"), '0');
assert.equals(TEST_NAME, 'Returns 1 for 1', 'pastaparse.trimTrailingZeroes("1")', pastaparse.trimTrailingZeroes("1"), '1');
assert.equals(TEST_NAME, 'Returns 2 for 2.000', 'pastaparse.trimTrailingZeroes("2.000")', pastaparse.trimTrailingZeroes("2.000"), '2');
assert.equals(TEST_NAME, 'Returns 3.14 for 3.1400', 'pastaparse.trimTrailingZeroes("3.1400")', pastaparse.trimTrailingZeroes("3.1400"), '3.14');

assert.endTestBlock();