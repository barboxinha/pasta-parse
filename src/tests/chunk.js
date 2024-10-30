const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.chunk()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.chunk()', pastaparse.chunk);

if (!pastaparse.chunk) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns an array', 'pastaparse.chunk([1, 2, 3, 4], 2)', Object.prototype.toString.call(pastaparse.chunk([1, 2, 3, 4], 2)), '[object Array]');

if (Object.prototype.toString.call(pastaparse.chunk([1, 2, 3, 4], 2)) !== '[object Array]') {
    assert.terminateTestBlock();
    return;
}

assert.arrayEquals(TEST_NAME, 'Chunks evenly-divided arrays', 'pastaparse.chunk([1, 2, 3, 4], 2)', pastaparse.chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
assert.arrayEquals(TEST_NAME, 'Chunks unevenly-divided arrays', 'pastaparse.chunk([1, 2, 3, 4, 5], 2)', pastaparse.chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);

assert.endTestBlock();