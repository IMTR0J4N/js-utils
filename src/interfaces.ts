interface Array<T> {
    /**
     * Creates a new array containing the elements of the sub-arrays of the array passed as argument
     * @param this Array
     * @returns {Array<any>}
     */
    toFlat(this: Array<any | Array<any>>): Array<any>;
}

interface String {
    /**
     * Assign a new string instance to an empty variable or reassign a value if not empty
     * @param this String
     * @returns {String}
     */
    assignTo(this: string, arg: string): String;
}