const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.words()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.words()', pastaparse.words);

if (!pastaparse.words) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns an array', 'pastaparse.words("hi ho")', Object.prototype.toString.call(pastaparse.words("hi ho")), '[object Array]');

if (Object.prototype.toString.call(pastaparse.words("hi ho")) !== '[object Array]') {
    assert.terminateTestBlock();
    return;
}

assert.arrayEquals(TEST_NAME, 'Returns an array of words from a string with one word', 'pastaparse.words("hi")', pastaparse.words("hi"), ["hi"]);
assert.arrayEquals(TEST_NAME, 'Returns an array of words from a string with two words', 'pastaparse.words("hi there")', pastaparse.words("hi there"), ["hi", "there"]);
assert.arrayEquals(TEST_NAME, 'Returns an array of words from a string with three words', 'pastaparse.words("hi there you")', pastaparse.words("hi there you"), ["hi", "there", "you"]);

assert.endTestBlock();