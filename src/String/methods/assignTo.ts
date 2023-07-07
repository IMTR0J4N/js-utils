export function assignTo(this: string, arg: string): String {
    if (typeof arg !== 'string') throw new Error(`Invalid argument type : ${typeof arg}`)

    return new String(arg)
}

String.prototype.assignTo = assignTo;