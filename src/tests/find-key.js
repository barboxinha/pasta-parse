const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.findKey()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.findKey()', pastaparse.findKey);

if (!pastaparse.findKey) {
    assert.terminateTestBlock();
    return;
}

const startsWithV = string => string.startsWith('v');
assert.equals(TEST_NAME, 'Returns the corresponding key of a value that returns truthy from the predicate function', 'pastaparse.findKey({"key": "value"}, startsWithV)', pastaparse.findKey({ "key": "value" }, startsWithV), "key");
assert.equals(TEST_NAME, 'Returns undefined if an object has no values that return truthy from the predicate function', 'pastaparse.findKey({"key": "notValue"}, startsWithV)', pastaparse.findKey({ "key": "notValue" }, startsWithV), undefined);

assert.endTestBlock();