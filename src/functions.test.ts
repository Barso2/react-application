import { sumArray } from "./util/functions"
test("test function sumArray", () => {
    const array: number[] = [1,2,3];
    expect(sumArray(array)).toEqual(6); 
})
