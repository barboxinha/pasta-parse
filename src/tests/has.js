const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.has()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.has()', pastaparse.has);

if (!pastaparse.has) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns true if an object has a value at a specified key', 'pastaparse.has({"key": "value"}, "key")', pastaparse.has({ "key": "value" }, "key"), true);
assert.equals(TEST_NAME, 'Returns false if an object does not have a value at a specified key', 'pastaparse.has({"key": "value"}, "notKey")', pastaparse.has({ "key": "value" }, "notKey"), false);

assert.endTestBlock();