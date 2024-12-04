const pastaparse = require('../pastaparse.js');
const assert = require('./assert.js');

const TEST_NAME = 'pastaparse.dropWhile()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, 'pastaparse.dropWhile()', pastaparse.dropWhile);

if (!pastaparse.dropWhile) {
    assert.terminateTestBlock();
    return;
}

const indexIsSmallerThanElement = (element, index) => index < element;

assert.equals(TEST_NAME, 'Returns an array', 'pastaparse.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement)', Object.prototype.toString.call(pastaparse.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement)), '[object Array]');

if (Object.prototype.toString.call(pastaparse.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement)) !== '[object Array]') {
    assert.terminateTestBlock();
    return;
}

assert.arrayEquals(TEST_NAME, 'Drops elements until predicate function returns falsy', "pastaparse.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement", pastaparse.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement), [0, 4]);

assert.endTestBlock();