interface Array<T> {
    /**
     * Creates a new array containing the elements of the sub-arrays of the array passed as argument
     * @param this Array
     * @returns {Array<any>}
     */
    toFlat(this: Array<any | Array<any>>): Array<any>;
}

interface Number {
    /**
     * Return the number factorial
     * @param this Number
     * @returns {Number}
     */
    factorial(this: number): number;
}