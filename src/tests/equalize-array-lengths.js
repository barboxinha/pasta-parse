const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.equalizeArrayLengths()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.equalizeArrayLengths()', pastaparse.equalizeArrayLengths);

if (!pastaparse.equalizeArrayLengths) {
    assert.terminateTestBlock();
    return;
}

assert.arrayEquals(TEST_NAME, 'Returns empty array for an empty array', 'pastaparse.equalizeArrayLengths([])', pastaparse.equalizeArrayLengths([]), []);
assert.arrayEquals(TEST_NAME, 'Returns array of empty arrays for an array of empty arrays', 'pastaparse.equalizeArrayLengths([[], [], []])', pastaparse.equalizeArrayLengths([[], [], []]), [[], [], []]);
assert.arrayEquals(TEST_NAME, 'Returns ["Hello", [], 3] for ["Hello", [], 3]', 'pastaparse.equalizeArrayLengths(["Hello", [], 3])', pastaparse.equalizeArrayLengths(["Hello", [], 3]), ["Hello", [], 3]);
assert.arrayEquals(TEST_NAME, 'Returns [[null], [1], [null]] for [[], [1], []]', 'pastaparse.equalizeArrayLengths([[], [1], []])', pastaparse.equalizeArrayLengths([[], [1], []]), [[null], [1], [null]]);
assert.arrayEquals(TEST_NAME, 'Returns [[1, 1, 1], [3, 2, 2], [null, null, null], [4, 5, 6]] for [[1], [3, 2], [], [4, 5, 6]]', 'pastaparse.equalizeArrayLengths([[1], [3, 2], [], [4, 5, 6]])', pastaparse.equalizeArrayLengths([[1], [3, 2], [], [4, 5, 6]]), [[1, 1, 1], [3, 2, 2], [null, null, null], [4, 5, 6]]);

assert.endTestBlock();