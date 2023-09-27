import { toFlat } from "./build/Array/functions/toFlat.js";
import { factorial } from "./build/Number/functions/factorial.js";

const toFlatTest = ['234', 4, [24, "i", 35], 45, [323, 34]]
const factorialTest = 60;

// console.log(toFlat(toFlatTest));

// console.log(toFlatTest.toFlat());

console.log(factorial(factorialTest))

console.log(factorialTest.factorial())