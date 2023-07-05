/**
 * Creates a new array containing the elements of the sub-arrays of the array passed as argument
 * @returns {Array}
 */

export function toFlat (this: Array<any | Array<any>>): Array<any> {

    const res: Array<any> = [];
    const length = this.length

    let isFlat = true;

    for (const item of this) {
        if (Array.isArray(item)) {
            res.push(...item)
        } else {
            res.push(item)
        }
    }

    for (let i = 0; i < length; i++) {
        this.pop()
    }

    for (const item of res) {
        if (Array.isArray(item)) {
            isFlat = false
            break;
        }
    }

    if (isFlat) {
        this.push(...res)
        return this
    } else {
        return res.toFlat()
    }
}

Array.prototype.toFlat = toFlat