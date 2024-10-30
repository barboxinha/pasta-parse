const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.drop()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.drop()', pastaparse.drop);

if (!pastaparse.drop) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns an array', 'pastaparse.drop(["hi", "bye"])', Object.prototype.toString.call(pastaparse.drop(["hi", "bye"])), '[object Array]');

if (Object.prototype.toString.call(pastaparse.drop(["hi", "bye"])) !== '[object Array]') {
    assert.terminateTestBlock();
    return;
}

assert.arrayEquals(TEST_NAME, 'Drops the specified number of elements from the beginning of an array', 'pastaparse.drop(["hi", "okay", "yes", "bye"], 2)', pastaparse.drop(["hi", "okay", "yes", "bye"], 2), ["yes", "bye"]);
assert.arrayEquals(TEST_NAME, 'Drops one element if no number is specified', 'pastaparse.drop(["hi", "bye"])', pastaparse.drop(["hi", "bye"]), ["bye"]);

assert.endTestBlock();