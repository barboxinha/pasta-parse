const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.inRange()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.inRange()', pastaparse.inRange);

if (!pastaparse.inRange) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns true if an in-range value is in range', 'pastaparse.inRange(2, 1, 3)', pastaparse.inRange(2, 1, 3), true);
assert.equals(TEST_NAME, 'Returns false if a too small value is out of range', 'pastaparse.inRange(0, 1, 3)', pastaparse.inRange(0, 1, 3), false);
assert.equals(TEST_NAME, 'Returns false if a too large value is out of range', 'pastaparse.inRange(4, 1, 3)', pastaparse.inRange(4, 1, 3), false);
assert.equals(TEST_NAME, 'Uses end value as start value and start value as 0 if end value is not defined', 'pastaparse.inRange(1, 2)', pastaparse.inRange(1, 2), true);
assert.equals(TEST_NAME, 'Reverses start and end values if start is bigger than end', 'pastaparse.inRange(3, 4, 2)', pastaparse.inRange(3, 4, 2), true);
assert.equals(TEST_NAME, 'Returns true if provided value is same as start value', 'pastaparse.inRange(1, 1, 3)', pastaparse.inRange(1, 1, 3), true);
assert.equals(TEST_NAME, 'Returns false if provided value is same as end value', 'pastaparse.inRange(3, 1, 3)', pastaparse.inRange(3, 1, 3), false);

assert.endTestBlock();