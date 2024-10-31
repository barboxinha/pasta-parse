const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.allNull()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.allNull()', pastaparse.allNull);

if (!pastaparse.allNull) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns true for an array containing all null items', 'pastaparse.allNull([null, null, null])', pastaparse.allNull([null, null, null]), true);
assert.equals(TEST_NAME, 'Returns true for an empty array', 'pastaparse.allNull([])', pastaparse.allNull([]), true);
assert.equals(TEST_NAME, 'Returns false for an array containing one non-null item', 'pastaparse.allNull([null, 1, null])', pastaparse.allNull([null, 1, null]), false);
assert.equals(TEST_NAME, 'Returns false for an array containing one null item', 'pastaparse.allNull([20, null, 345])', pastaparse.allNull([20, null, 345]), false);

assert.endTestBlock();