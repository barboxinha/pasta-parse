let pastaparse = {
    // #region Number Methods

    /** 
     * Clamps number within the inclusive lower and upper bounds.
     * @param {number} number The number to clamp.
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} The clamped number.
     */
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    /**
     * Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end, the params are swapped to support negative ranges.
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} True if number is in range, else false.
     */
    inRange(number, start=0, end) {
        if (typeof end === 'undefined') {
            end = start;
            start = 0;
        }
        if (start > end) {
            let endValue = end;
            end = start;
            start = endValue;
        }
        const isInRange = start <= number && number < end;
        return isInRange;
    },

    // #endregion

    // #region String Methods

    /**
     * Splits string into an array of its words.
     * @param {string} [string=''] The string to inspect.
     * @returns {Array} The words of string.
     */
    words(string='') {
        const words = string.split(' ');
        return words;
    },

    /**
     * Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @returns {string} The padded string.
     */
    pad(string='', length=0) {
        if (length <= string.length) {
            return string;
        }
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },

    /**
     * Counts the amount of instances of a certain character found within a given string.
     * @param {string} string The string to process.
     * @param {string} character The character to count.
     * @returns {number} The number of 'character' instances found in 'string'.
     */
    countChar(string, character) {
        let count = 0;
        if (string.includes(character)) {
            for (let c of string) {
                if (c === character) {
                    count++;
                }
            }
        }
        return count;
    },

    /**
     * Removes trailing zeroes from the end of a number string.
     * i.e. "1.25000" -> "1.25"
     * @param {string} numberString The number string to trim.
     * @returns {string} The trimmed number string.
     */
    trimTrailingZeroes(numberString) {
        if (!numberString || numberString.trim() === '') {
            return numberString;
        }
        // ***** Check number string is not a sentence or is a number
        if (this.countChar(numberString, '.') > 1 || isNaN(numberString)) {
            throw new Error('Input is not a valid number string.');
        }
        let trimmedString = numberString.includes('.') 
            ? numberString.replace(/0+$/, '').replace(/\.$/, '') 
            : numberString;
        return trimmedString;
    },

    /**
     * Extracts all the numbers from a given string.
     * Useful for extracting numbers within a string as an array of numbers.
     * @param {string} string The string to extract numbers from.
     * @returns {Array} The array of numbers extracted from the string.
     */
    extractNumbers(string) {
        // ***** Regular expression to match numbers (including decimals)
        const regex = /[-+]?\d*\.\d+|\d+/g;
        const matches = string.match(regex);
        const numbers = [];
        if (matches) {
            for (let match of matches) {
                let number = parseFloat(match);
                if (!isNaN(number)) {
                    numbers.push(number);
                }
            }
        }
        return numbers;
    },

    // #endregion

    // #region Object Methods

    /**
     * Checks if key is a direct property of object.
     * @param {object} object The object to query.
     * @param {string} key The object property to check.
     * @returns {boolean} True if path exists, else false.
     */
    has(object, key) {
        const hasValue = object[key] !== undefined;
        return hasValue;
    },

    /**
     * Creates an object composed of the inverted keys and values provided by object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
     * @param {object} object The object to invert.
     * @returns {object} The new inverted object.
     */
    invert(object) {
        const invertedObject = {};
        for (let key in object) {
            let originalValue = object[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },

    /**
     * Finds the key of the first element matching the predicate instead of the element itself.
     * @param {object} object The object to inspect.
     * @param {function} predicate The function invoked per iteration.
     * @returns {*} The key of the matched element, else undefined.
     */
    findKey(object, predicate) {
        let firstKey = undefined;
        for (let key in object) {
            let keyValue = object[key];
            if (predicate(keyValue)) {
                firstKey = key;
                break;
            }
        }
        return firstKey;
    },

    // #endregion

    // #region Array Methods

    /**
     * Checks if all elements in an array are null.
     * @param {Array} array The array to check.
     * @returns {boolean} True if all elements in the array are null, False otherwise.
     */
    allNull(array) {
        return array.every(element => element === null);
    },

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     * @param {Array} array The array to process.
     * @param {number} n The number of elements to drop.
     * @returns {Array} The slice of array.
     */
    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        const droppedArray = array.slice(n);
        return droppedArray;
    },

    /**
     * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
     * @param {Array} array The array to process.
     * @param {function} predicate The function invoked per iteration.
     * @returns {Array} The slice of array.
     */
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    /**
     * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk.
     * @returns {Array} The new array of chunks.
     */
    chunk(array, size=1) {
        if (size === undefined) {
            size = 1;
        }
        const arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    },

    /**
     * Determines the maximum length of the given arrays. 
     * Then, iterates through each array and appends the last item of the array until its length matches the maximum length.
     * @param {Array} arrays The nested array to equalize.
     * @returns {Array} The equalized nested array containing the same amount of items.
     */
    equalizeArrayLengths(arrays) {
        if (!this.isNestedArray(arrays, true)) {
            return arrays;
        }
        // ***** Find the maximum length among all arrays
        const maxLength = Math.max(arrays.map(array => array.length));
        // ***** Duplicate the last item in each array to match the maximum length
        for (let array of arrays) {
            while (array.length < maxLength) {
                if (array.length > 0) {
                    array.push(array[array.length - 1]);
                } else {
                    array.push(null);
                }
            }
        }
        return arrays;
    },

    /**
     * Checks if an array is a nested array.
     * @param {Array} array The array to check.
     * @param {boolean} [strictlyNested=false] If true, checks if the array is strictly nested, meaning all elements are arrays.
     * @returns {boolean} True if the array is nested, False otherwise.
     */
    isNestedArray(array, strictlyNested=false) {
        if (strictlyNested) {
            return array.every(element => Array.isArray(element));
        } else {
            return array.some(element => Array.isArray(element));
        }
    }

    // #endregion
};

module.exports = pastaparse;