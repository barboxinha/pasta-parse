const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.invert()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.invert()', pastaparse.invert);

if (!pastaparse.invert) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns an object with key and value inverted for a single key-value pair', 'pastaparse.invert({originalKey: "originalValue"})["originalValue"])', pastaparse.invert({ originalKey: "originalValue" })['originalValue'], 'originalKey');
assert.equals(TEST_NAME, 'Original key is not present after the key-value pairs have been inverted', 'pastaparse.invert({originalKey: "originalValue"})["originalKey"])', pastaparse.invert({ originalKey: "originalValue" })['originalKey'], undefined);
assert.equals(TEST_NAME, 'Returns an object with all keys and values inverted', 'pastaparse.invert({originalKey: "originalValue"})["originalKey"])', pastaparse.invert({ originalKey: "originalValue", anotherKey: "anotherValue" })['anotherValue'], 'anotherKey');

assert.endTestBlock();