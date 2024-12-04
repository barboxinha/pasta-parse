const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'PastaParse Object';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse', pastaparse);

if (!pastaparse) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'The value of pastaparse is an object', 'pastaparse', Object.prototype.toString.call(pastaparse), '[object Object]');

assert.endTestBlock();