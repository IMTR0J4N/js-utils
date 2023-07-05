interface Array<T> {
    toFlat(this: Array<any | Array<any>>): Array<any>;
}

interface String {
    /**
     * Assign a new string instance to an empty variable or reassign a value if not empty
     * @param this String
     * @param arg String
     * @returns {String}
     */
    assignToString(this: string, arg: string): String;
}