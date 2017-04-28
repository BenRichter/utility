/**
 * Add leading zeros
 *
 * @param {string} num  - number to pad with zeros
 * @param {int}    size - length of number
 *
 * @return {string} padded number string
 */
function pad(num, size = 2) {
    let paddedNum = `${num}`;

    while (paddedNum.length < size) {
        paddedNum = `0${paddedNum}`;
    }
    return paddedNum;
}

/**
 * Format date to dd.mm.yyyy, hh:mm
 *
 * @param {string}  dateString - iso string date
 *
 * @return {string} formatted string
 */
function formatDate(dateString) {
    const date = new Date(dateString);

    return `${pad(date.getDate())}.${pad(date.getMonth())}.${date.getFullYear()},
            ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/**
 * Format Money with point delimiter and fixed to two floats
 *
 * @param {number} price - convert to currency string
 * @param {string} sign  - (optional) currency sign € to be appended
 *
 * @return {string} currency string
 */
function formatMoney(price, sign = '') {
    const pieces = parseFloat(price).toFixed(2).replace('.', ',').split('');
    let ii = pieces.length - 3;

    while ((ii -= 3) > 0) {
        pieces.splice(ii, 0, '.');
    }

    return pieces.join('') + sign;
}

export {formatDate, pad, formatMoney};
