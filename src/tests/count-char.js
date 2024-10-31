const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.countChar()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.countChar()', pastaparse.countChar);

if (!pastaparse.countChar) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns 0 for empty string and valid char', 'pastaparse.countChar("", "a")', pastaparse.countChar("", "a"), 0);
assert.equals(TEST_NAME, 'Returns 0 for empty string and empty char', 'pastaparse.countChar("", "")', pastaparse.countChar("", ""), 0);
assert.equals(TEST_NAME, 'Returns 0 for empty char', 'pastaparse.countChar("a", "")', pastaparse.countChar("a", ""), 0);
assert.equals(TEST_NAME, 'Returns 0 for no matches', 'pastaparse.countChar("a", "b")', pastaparse.countChar("a", "b"), 0);
assert.equals(TEST_NAME, 'Returns 1 for one match', 'pastaparse.countChar("Hello", "e")', pastaparse.countChar("Hello", "e"), 1);
assert.equals(TEST_NAME, 'Returns 2 for two matches', 'pastaparse.countChar("Hello", "l")', pastaparse.countChar("Hello", "l"), 2);
assert.equals(TEST_NAME, 'Returns 3 for three matches with no case-sensitivity', 'pastaparse.countChar("Aardvark", "a", false)', pastaparse.countChar("Aardvark", "a", false), 3);
assert.equals(TEST_NAME, 'Returns 4 for four matches with no case-sensitivity', 'pastaparse.countChar("Alabama", "a", false)', pastaparse.countChar("Alabama", "a", false), 4);

assert.endTestBlock();