import { describe, it } from "node:test";
import { toFlat } from '../src/Array/function/toFlat'

it('toFlat', () => {

    const testToFlat: Array<any | Array<any>> = [5, "TEST", [24, true, 35], false, "34", [255, [{ test: "test" }, 334]]];
    const testToFlat2: Array<any | Array<any>> = ["test", 100, [56, false, [234, 345, true, [345, 56, 45], 35], 345, [33434], 34], 356];
        
    const expected: Array<any> = [5, "TEST", 24, true, 35, false, "34", 255, { test: "test" }, 334];
    const expected2: Array<any> = ["test", 100, 56, false, 234, 345, true, 345, 56, 45, 35, 345, 33434, 34, 356];

    expect(toFlat(testToFlat)).toEqual(expected)
    expect(toFlat(testToFlat2)).toEqual(expected2)
})
