import { toFlat } from "./build/Array/functions/toFlat.js";

const toFlatTest = ['234', 4, [24, "i", 35], 45, [323, 34]]

console.log(toFlat(toFlatTest));

console.log(toFlatTest.toFlat());