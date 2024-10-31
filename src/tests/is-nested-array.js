const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.isNestedArray()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.isNestedArray()', pastaparse.isNestedArray);

if (!pastaparse.isNestedArray) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns true if a partially nested array is partially nested', 'pastaparse.isNestedArray([1, [2, 3, 4], 5])', pastaparse.isNestedArray([1, [2, 3, 4], 5]), true);
assert.equals(TEST_NAME, 'Returns true if a strictly nested array is not partially nested', 'pastaparse.isNestedArray([[1, 2], [3, 4, 5], [6]])', pastaparse.isNestedArray([[1, 2], [3, 4, 5], [6]]), true);
assert.equals(TEST_NAME, 'Returns true if a strictly nested array is strictly nested', 'pastaparse.isNestedArray([[1, 2], [3, 4, 5], [6]], true)', pastaparse.isNestedArray([[1, 2], [3, 4, 5], [6]], true), true);
assert.equals(TEST_NAME, 'Returns false if a partially nested array is not strictly nested', 'pastaparse.isNestedArray([1, [2, 3, 4], 5], true)', pastaparse.isNestedArray([1, [2, 3, 4], 5], true), false);

assert.endTestBlock();