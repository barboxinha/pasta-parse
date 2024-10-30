const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.clamp()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.clamp()', pastaparse.clamp);

if (!pastaparse.clamp) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns in-range values unclamped', 'pastaparse.clamp(2, 1, 3)', pastaparse.clamp(2, 1, 3), 2);
assert.equals(TEST_NAME, 'Clamps values by lower bound', 'pastaparse.clamp(0, 1, 3)', pastaparse.clamp(0, 1, 3), 1);
assert.equals(TEST_NAME, 'Clamps values by upper bound', 'pastaparse.clamp(5, 1, 3)', pastaparse.clamp(5, 1, 3), 3);

assert.endTestBlock();