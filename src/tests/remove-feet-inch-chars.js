const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.removeFeetInchChars()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.removeFeetInchChars()', pastaparse.removeFeetInchChars);

if (!pastaparse.removeFeetInchChars) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns empty string for empty string', 'pastaparse.removeFeetInchChars("")', pastaparse.removeFeetInchChars(""), "");
assert.equals(TEST_NAME, 'Returns given string for no matches', 'pastaparse.removeFeetInchChars("Hello")', pastaparse.removeFeetInchChars("Hello"), "Hello");
assert.equals(TEST_NAME, 'Returns given string with no feet or inch marks', 'pastaparse.removeFeetInchChars("5\' 9")', pastaparse.removeFeetInchChars('5\' 9"'), "5 9");
assert.equals(TEST_NAME, 'Returns 3 - 6 1/2 for 3\' - 6 1/2"', 'pastaparse.removeFeetInchChars("3\' - 6 1/2"")', pastaparse.removeFeetInchChars('3\' - 6 1/2"'), "3 - 6 1/2");

assert.endTestBlock();