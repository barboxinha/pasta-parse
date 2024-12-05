<img src="./docs/images/pastaparse-icon.png" alt="pastaparse icon" height="150"/> <img src="./docs/images/pastaparse-icon-text.png" alt="pastaparse text" height="100"/>

**[Docs](https://barboxinha.github.io/pastaparse/index.html)** | 
**[npm](https://www.npmjs.com/package/pastaparse)** |
**[Wiki](https://github.com/barboxinha/pastaparse/wiki)** | 
**[Changelog](https://github.com/barboxinha/pastaparse/wiki/Changelog)**

## What is Pastaparse?

Pastaparse is a simple, light-weight JavaScript utility library conceived to help you untangle your strings, arrays, numbers and objects.

It burrows some of my favorite data manipulation methods from *[lodash](https://lodash.com/)* as well as provides some unique ones that have come in handy throughout the years. Looking at you *[feetInchesToFloat](https://barboxinha.github.io/pastaparse/pastaparse.html#.feetInchesToFloat)*!

## Installation

- If you don't already have *[Node.js](https://nodejs.org/en)* installed on your machine, please follow the installation steps provided at the link.
- Open a Terminal in your project root folder.

*Using npm:*
```shell
$ npm install --save-dev pastaparse
```

THEN:

*In Node.js:*
```js
// Import the module into your file
var pastaparse = require('pastaparse');
```

That's it! Start using it in your JavaScript projects!

## Usage Examples

```js
// Extract all numbers from a string.
const myString = '87.5 percent of the 20 people in Math class know that Pi is 3.14.';

const numbersInString = pastaparse.extractNumbers(myString);

console.log(numbersInString); // => [87.5, 20, 3.14]


// Equalize the number of items for each array in a nested array.
let arr = [
    [1],
    [3, 2],
    [],
    [4, 5, 6]
];

pastaparse.equalizeArrayLengths(arr);

console.log(arr); // => [[1, 1, 1], [3, 2, 2], [null, null, null], [4, 5, 6]]


// Convert a feet-inch string representation into a floating-point number value.
const feetInches = '3\' - 4 1/2"';

const decimalfeetInches = pastaparse.feetInchesToFloat(feetInches);

console.log(decimalfeetInches); // => 3.375
```

For detailed documentation and examples, check out the [Docs](https://barboxinha.github.io/pastaparse/pastaparse.html).

## Contribute

Pasta and carbs just make the world a better place and so can you!<br>
If interested in contributing, please follow the instructions in the project wiki's [Contribute](https://github.com/barboxinha/pastaparse/wiki/Contribute) section.