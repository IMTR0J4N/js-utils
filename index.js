import { toFlat } from "./build/Array/functions/toFlat.js";

const toFlatTest = ['234', 4, [24, "i", 35], 45, [323, 34]]
const assignTest = '';

console.log(toFlat(toFlatTest));

console.log(toFlatTest.toFlat());
console.log(assignTest)