const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.extractNumbers()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.extractNumbers()', pastaparse.extractNumbers);

if (!pastaparse.extractNumbers) {
    assert.terminateTestBlock();
    return;
}

assert.arrayEquals(TEST_NAME, 'Returns empty array for an empty string', 'pastaparse.extractNumbers("")', pastaparse.extractNumbers(""), []);
assert.arrayEquals(TEST_NAME, 'Returns empty array for a string with no numbers', 'pastaparse.extractNumbers("Hello, world!")', pastaparse.extractNumbers("Hello, world!"), []);
assert.arrayEquals(TEST_NAME, 'Returns [0] for "0"', 'pastaparse.extractNumbers("0")', pastaparse.extractNumbers("0"), [0]);
assert.arrayEquals(TEST_NAME, 'Returns [1000, 2000, 2] for "1000 seagulls by the sea made a total 2000 of 2 wings each."', 'pastaparse.extractNumbers("1000 seagulls by the sea made a total 2000 of 2 wings each.")', pastaparse.extractNumbers("1000 seagulls by the sea made a total 2000 of 2 wings each."), [1000, 2000, 2]);
assert.arrayEquals(TEST_NAME, 'Returns [14.5, 20, 3.14] for "14.5 percent of the 20 people in class know that Pi is 3.14."', 'pastaparse.extractNumbers("14.5 percent of the 20 people in class know that Pi is 3.14.")', pastaparse.extractNumbers("14.5 percent of the 20 people in class know that Pi is 3.14."), [14.5, 20, 3.14]);

assert.endTestBlock();