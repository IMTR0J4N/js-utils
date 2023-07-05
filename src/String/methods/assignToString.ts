export function assignToString(this: string, arg: string) {
    if (typeof arg !== 'string') throw new Error(`Invalid argument type : ${typeof arg}`)

    return new String(arg)
}

String.prototype.assignToString = assignToString;