/**
 * Add leading zeros
 *
 * @param {string} num  - number to pad with zeros
 * @param {int}    size - length of number
 * @return {string}     - padded number string
 */
export const pad = (num, size = 2) => {
    let paddedNum = `${num}`;

    while (paddedNum.length < size) {
        paddedNum = `0${paddedNum}`;
    }
    
    return paddedNum;
};


/**
 * Format date to dd.mm.yyyy, hh:mm
 *
 * @param {string}  dateString - iso string date
 * @return {string}            - formatted string
 */
export const formatDate = (dateString) => {
    // catch wrong date format
    if (isNaN(Date.parse(dateString))) {
        return '-';
    }
    
    const date = new Date(dateString);

    return `${pad(date.getDate())}.${pad(date.getMonth())}.${date.getFullYear()},
            ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};


/**
 * Format Money with point delimiter and fixed to two floats
 *
 * @param {number} price - convert to currency string
 * @param {string} sign  - (optional) currency sign € to be appended
 * @return {string}      - currency string
 */
export const formatMoney = (price, sign = '') => {
    const pieces = parseFloat(price).toFixed(2).replace('.', ',').split('');
    let ii = pieces.length - 3;

    while ((ii -= 3) > 0) {
        pieces.splice(ii, 0, '.');
    }

    return pieces.join('') + sign;
};


/**
 * Clear arrays of any type from duplicate entries in this set
 * https://twitter.com/_ericelliott/status/832065642987524096?lang=de
 *
 * @param {Array} arr - array with duplication [1,1,3]
 * @return {Array}    - new array without duplications [1,3]
 */
export const unique = (arr) => [...new Set(arr)];
