/**
 * Creates a new array containing the elements of the sub-arrays of the array passed as argument
 * @param {Array} arr Array that you want to flat
 * @returns {Array}
 */

export function toFlat (arr: Array<any | Array<any>>): Array<any> {
    const res = [];
    let isFlat = true;

    for (const item of arr) {
        if (Array.isArray(item)) {
            res.push(...item)
        } else {
            res.push(item)
        }
    }

    for (const item of res) {
        if (Array.isArray(item)) {
            isFlat = false
            break;
        }
    }

    if (isFlat) {
        return res
    } else {
        return toFlat(res)
    }
}