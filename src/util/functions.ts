export function sumArray(array: number[]): number {
    return array.reduce((res, cur) => res + cur);
}
export function minEvenNumber(array: number[]): number | undefined {
    let res: number | undefined;
    const evenNumbers: number[] = array.filter(n => n % 2 == 0)
    if (evenNumbers.length != 0) {
        res = Math.min(...evenNumbers)
    }
    return res;
}