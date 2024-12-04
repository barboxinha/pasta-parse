const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.pad()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.pad()', pastaparse.pad);

if (!pastaparse.pad) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns evenly-padded strings', 'pastaparse.pad("hi", 6)', pastaparse.pad("hi", 6), "  hi  ");
assert.equals(TEST_NAME, 'Returns oddly-padded strings with extra padding on right side', 'pastaparse.pad("hi", 5)', pastaparse.pad("hi", 5), " hi  ");
assert.equals(TEST_NAME, 'Returns strings longer than provided length un-padded', 'pastaparse.pad("hello", 4)', pastaparse.pad("hello", 4), "hello");

assert.endTestBlock();