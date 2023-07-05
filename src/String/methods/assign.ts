export function assignToString(this: string, str: string) {
    if (typeof str !== 'string') throw new Error(`Invalid argument type : ${typeof str}`)

    return new String(str)
}

String.prototype.assignToString = assignToString;