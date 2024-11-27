/**
 * A collection of utility methods for number, string, object, and array manipulations.
 * 
 * @namespace pastaparse
 * @version 1.3.0
 */
let pastaparse = {
    // #region Number Methods

    /** 
     * Clamps number within the inclusive lower and upper bounds.
     * 
     * @memberof pastaparse
     * @since 1.0.0
     * @category Number
     * @param {Number} number The number to clamp.
     * @param {Number} lower The lower bound.
     * @param {Number} upper The upper bound.
     * @returns {Number} The clamped number.
     * @example
     * 
     * pastaparse.clamp(-10, -5, 5);
     * // => -5
     * 
     * pastaparse.clamp(10, -5, 5);
     * // => 5
     * 
     * pastaparse.clamp(2, 1, 3);
     * // => 2
     */
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    /**
     * Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end, the params are swapped to support negative ranges.
     * 
     * @memberof pastaparse
     * @since 1.0.0
     * @category Number
     * @param {Number} number The number to check.
     * @param {Number} [start=0] The start of the range.
     * @param {Number} end The end of the range.
     * @returns {Boolean} True if number is in range, else false.
     * @example
     * 
     * pastaparse.inRange(2, 1, 3);
     * // => true
     * 
     * pastaparse.inRange(4, 8);
     * // => true
     * 
     * pastaparse.inRange(0, 1, 3);
     * // => false
     * 
     * pastaparse.inRange(4, 1, 3);
     * // => false
     * 
     * pastaparse.inRange(3, 4, 2);
     * // => true
     * 
     * pastaparse.inRange(1, 1, 3);
     * // => true
     * 
     * pastaparse.inRange(3, 1, 3);
     * // => false
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

    /**
     * Rounds number to the specified decimal places.
     * 
     * @memberof pastaparse
     * @since 1.1.0
     * @category Number
     * @param {Number} number The number to round.
     * @param {Number} [decimalPlaces=0] The number of decimal places to round to. Default is 0.
     * @returns {Number} The rounded number.
     * @example
     * 
     * pastaparse.roundToDecimalPlace(10);
     * // => 10
     * 
     * pastaparse.roundToDecimalPlace(1.2345, 2);
     * // => 1.23
     * 
     * pastaparse.roundToDecimalPlace(-1.2345, 2);
     * // => -1.23
     * 
     * pastaparse.roundToDecimalPlace(1, 4);
     * // => 1.0000
     */
    roundToDecimalPlace(number, decimalPlaces=0) {
        if (decimalPlaces === 0) {
            return Math.round(number);
        }
        const factor = Math.pow(10, decimalPlaces);
        let roundednumber = Math.round(number * factor) / factor;
        let roundedString = roundednumber.toFixed(decimalPlaces);
        return parseFloat(roundedString);
    },

    // #endregion

    //*-----------------------------------------------------------------------------------------*/

    // #region String Methods

    /**
     * Splits string into an array of its words.
     * 
     * @memberof pastaparse
     * @since 1.0.0
     * @category String
     * @param {String} [string=''] The string to inspect.
     * @returns {String[]} The words of string.
     * @example
     * 
     * pastaparse.words('I like running in the park');
     * // => ['I', 'like', 'running', 'in', 'the', 'park']
     */
    words(string='') {
        const words = string.split(' ');
        return words;
    },

    /**
     * Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
     * 
     * @memberof pastaparse
     * @since 1.0.0
     * @category String
     * @param {String} [string=''] The string to pad.
     * @param {Number} [length=0] The padding length.
     * @returns {String} The padded string.
     * @example
     * 
     * pastaparse.pad('hi', 6);
     * // => '  hi  '
     * 
     * pastaparse.pad('hi', 5);
     * // => ' hi  '
     * 
     * pastaparse.pad('hello', 4);
     * // => 'hello'
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
     * 
     * @memberof pastaparse
     * @since 1.1.0
     * @category String
     * @param {String} string The string to process.
     * @param {String} character The character to count.
     * @param {Boolean} [caseSensitive=true] If true, the search is case sensitive. True by default.
     * @returns {Number} The number of 'character' instances found in 'string'.
     * @example
     * 
     * pastaparse.countChar('Hello', 'l');
     * // => 2
     * 
     * pastaparse.countChar('Aardvark', 'a');
     * // => 2
     * 
     * pastaparse.countChar('Aardvark', 'a', false);
     * // => 3
     */
    countChar(string, character, caseSensitive=true) {
        let count = 0;
        if (!caseSensitive) {
            string = string.toLowerCase();
            character = character.toLowerCase();
        }
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
     * Removes all feet (') and inch (") unit characters from a string.
     * 
     * @memberof pastaparse
     * @since 1.1.0
     * @category String
     * @param {String} feetInchString The string to process.
     * @returns {String} The string with any feet and inch characters removed.
     * @example
     * 
     * pastaparse.removeFeetInchChars('2\' - 6"');
     * // => '2 - 6'
     * 
     * pastaparse.removeFeetInchChars('1\' - 6 1/2"');
     * // => '1 - 6 1/2'
     * 
     * pastaparse.removeFeetInchChars('0\' 6"');
     * // => '0 6'
     * 
     * pastaparse.removeFeetInchChars('0\' 6 1/2"');
     * // => '0 6 1/2'
     */
    removeFeetInchChars(feetInchString) {
        if (feetInchString.includes('\'') || feetInchString.includes('"')) {
            feetInchString = feetInchString.replace('\'', '').replace('"', '');
        }
        return feetInchString;
    },

    /**
     * Attempts to convert a fraction string to a number.
     * 
     * @memberof pastaparse
     * @since 1.1.0
     * @category String
     * @param {String} fraction The fraction string to convert.
     * @returns {Number} The converted number.
     * @throws {Error} If the input string is null or empty.
     * @example
     * 
     * pastaparse.fractionToFloat('1/2');
     * // => 0.5
     * 
     * pastaparse.fractionToFloat('1/4');
     * // => 0.25
     * 
     * pastaparse.fractionToFloat('5/8');
     * // => 0.625
     * 
     * pastaparse.fractionToFloat('3 3/4');
     * // => 3.75
     */
    fractionToFloat(fraction) {
        const number = parseFloat(fraction);
        if (!isNaN(number) && number.toString() === fraction) {
            return number;
        } else {
            let parts = fraction.split('/');
            if (parts.length === 2) {
                let numeratorParts = parts[0].split(' ');
                let whole = 0;
                let numerator = parseFloat(numeratorParts[numeratorParts.length - 1]);
                let denominator = parseFloat(parts[1]);
                if (numeratorParts.length === 2) {
                    whole = parseFloat(numeratorParts[0]);
                }
                let frac = numerator / denominator;
                return whole < 0 ? whole - frac : whole + frac;
            }
            throw new Error('Could not convert the fractional string to a number.');
        }
    },

    /**
     * Converts a string of unit feet and inches to a float value in feet.
     * Accepts the following formats: 2' - 6" ; 1' - 6 1/2" ; 0' 6" ; 0' 6 1/2"
     * 
     * @memberof pastaparse
     * @since 1.1.0
     * @category String
     * @param {String} feetInches The string of feet and inches to convert.
     * @returns {Number} The float value equivalent in feet.
     * @throws {Error} If the input string is null or empty.
     * @example
     * 
     * pastaparse.feetInchesToFloat('2\' - 6"');
     * // => 2.5
     * 
     * pastaparse.feetInchesToFloat('1\' - 6 1/2"');
     * // => 1.5416666666666667
     * 
     * pastaparse.feetInchesToFloat('0\' 6"');
     * // => 0.5
     * 
     * pastaparse.feetInchesToFloat('0\' 6 1/2"');
     * // => 0.5416666666666666
     */
    feetInchesToFloat(feetInches) {
        if (!feetInches || feetInches.trim() === "") {
            throw new Error('Input string is null or empty.');
        }
        const ftInches = this.removeFeetInchChars(feetInches);
        let ft = 0.0;
        let inch = 0.0;
        let fraction = 0.0;
        if (ftInches.includes('-')) {
            let parts = ftInches.split('-');
            ft = this.fractionToFloat(parts[0].trimEnd());
            let inchParts = parts[parts.length - 1].trimStart().split(' ');
            inch = this.fractionToFloat(inchParts[0]);
            if (inchParts.length > 1) {
                fraction = this.fractionToFloat(inchParts[1]);
            }
        } else {
            let parts = ftInches.split(' ');
            ft = this.fractionToFloat(parts[0]);
            inch = this.fractionToFloat(parts[1]);
            if (parts.length > 2) {
                fraction = this.fractionToFloat(parts[parts.length - 1]);
            }
        }
        return ft + ((inch + fraction) / 12);
    },

    /**
     * Removes trailing zeroes from the end of a number string.
     * i.e. "1.25000" -> "1.25"
     * 
     * @memberof pastaparse
     * @since 1.1.0
     * @category String
     * @param {String} numberString The number string to trim.
     * @returns {String} The trimmed number string.
     * @throws {Error} If the input string is null or empty.
     * @throws {Error} If the input string is not a valid number string.
     * @example
     * 
     * pastaparse.trimTrailingZeroes('1.25000');
     * // => '1.25'
     * 
     * pastaparse.trimTrailingZeroes('3.1400');
     * // => '3.14'
     * 
     * pastaparse.trimTrailingZeroes('5.000');
     * // => '5'
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
     * 
     * @memberof pastaparse
     * @since 1.1.0
     * @category String
     * @param {String} string The string to extract numbers from.
     * @returns {Number[]} The array of numbers extracted from the string.
     * @example
     * 
     * pastaparse.extractNumbers('3 little pigs ate 5 apples each making a total of 15 apples.');
     * // => [3, 5, 15]
     * 
     * pastaparse.extractNumbers('14.5 percent of the 20 people in class know that Pi is 3.14.');
     * // => [14.5, 20, 3.14]
     * 
     * pastaparse.extractNumbers('The price is $12.50.');
     * // => [12.5]
     * 
     * pastaparse.extractNumbers('The price is $12.50 and the quantity is 3.');
     * // => [12.5, 3]
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

    //*-----------------------------------------------------------------------------------------*/

    // #region Object Methods

    /**
     * Checks if key is a direct property of object.
     * 
     * @memberof pastaparse
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {String} key The object property to check.
     * @returns {Boolean} True if path exists, else false.
     * @example
     * 
     * const object = { 'a': 1, 'b': 2, 'c': 3 };
     * 
     * pastaparse.has(object, 'a');
     * // => true
     * 
     * pastaparse.has(object, 'd');
     * // => false
     */
    has(object, key) {
        const hasValue = object[key] !== undefined;
        return hasValue;
    },

    /**
     * Creates an object composed of the inverted keys and values provided by object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
     * 
     * @memberof pastaparse
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} The new inverted object.
     * @example
     * 
     * let object = { 'a': 1, 'b': 2, 'c': 1 };
     * 
     * pastaparse.invert(object);
     * // => { '1': 'a', '2': 'b' }
     * 
     * let object = { 'a': 'apple', 'b': 'banana', 'c': 'cherry' };
     * 
     * pastaparse.invert(object);
     * // => { 'apple': 'a', 'banana': 'b', 'cherry': 'c' }
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
     * 
     * @memberof pastaparse
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {*} The key of the matched element, else undefined.
     * @example
     * 
     * const startsWithV = string => string.startsWith('v');
     * 
     * pastaparse.findKey({ 'key': 'value' }, startsWithV);
     * // => 'key'
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

    //*-----------------------------------------------------------------------------------------*/

    // #region Array Methods

    /**
     * Checks if all elements in an array are null.
     * 
     * @memberof pastaparse
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to check.
     * @returns {Boolean} True if all elements in the array are null, False otherwise.
     * @example
     * 
     * pastaparse.allNull([null, null, null]);
     * // => true
     * 
     * pastaparse.allNull([null, null, 1]);
     * // => false
     */
    allNull(array) {
        return array.every(element => element === null);
    },

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     * 
     * @memberof pastaparse
     * @since 1.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {Number} n The number of elements to drop.
     * @returns {Array} The slice of array.
     * @example
     * 
     * pastaparse.drop(["hi", "okay", "yes", "bye"], 2);
     * // => ["yes", "bye"]
     * 
     * pastaparse.drop(["hi", "bye"]);
     * // => ["bye"]
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
     * 
     * @memberof pastaparse
     * @since 1.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} The slice of array.
     * @example
     * 
     * const indexIsSmallerThanElement = (element, index) => index < element;
     * 
     * pastaparse.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement);
     * // => [0, 4]
     */
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    /**
     * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
     * 
     * @memberof pastaparse
     * @since 1.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {Number} [size=1] The length of each chunk.
     * @returns {Array} The new array of chunks.
     * @example
     * 
     * pastaparse.chunk([1, 2, 3, 4], 2);
     * // => [[1, 2], [3, 4]]
     * 
     * pastaparse.chunk([1, 2, 3, 4, 5], 2);
     * // => [[1, 2], [3, 4], [5]]
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
     * 
     * @memberof pastaparse
     * @since 1.1.0
     * @category Array
     * @param {Array} arrays The nested array to equalize.
     * @returns {Array} The equalized nested array containing the same amount of items.
     * @example
     * 
     * pastaparse.equalizeArrayLengths([[], [1], []]);
     * // => [[null], [1], [null]]
     * 
     * pastaparse.equalizeArrayLengths([[1], [3, 2], [], [4, 5, 6]]);
     * // => [[1, 1, 1], [3, 2, 2], [null, null, null], [4, 5, 6]]
     */
    equalizeArrayLengths(arrays) {
        if (!this.isNestedArray(arrays, true) || arrays.every(array => array.length === 0)) {
            return arrays;
        }
        // ***** Find the maximum length among all arrays
        const maxLength = Math.max(...arrays.map(array => array.length));
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
     * 
     * @memberof pastaparse
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to check.
     * @param {Boolean} [strictlyNested=false] If true, checks if the array is strictly nested, meaning all elements are arrays.
     * @returns {Boolean} True if the array is nested, False otherwise.
     * @example
     * 
     * pastaparse.isNestedArray([1, [2, 3, 4], 5]);
     * // => true
     * 
     * pastaparse.isNestedArray([1, [2, 3, 4], 5], true);
     * // => false
     * 
     * pastaparse.isNestedArray([[1, 2], [3, 4, 5], [6]]);
     * // => true
     * 
     * pastaparse.isNestedArray([[1, 2], [3, 4, 5], [6]], true);
     * // => true
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

// ***** Export the module in CommonJS format to be compatible with older versions of Node.js
module.exports = pastaparse;