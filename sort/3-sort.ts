const arr1 = [0, 1, 0, 5, 10, 4, 5, 0, 5];
const arr2 = [0, 1, 0, 2, 3, 4, 5, 0, 5, 0, 6, 0, 0];
const arr3 = [5, 5, 3, 5, 5];

const shiftZeros = (arr: number[]): number[] => {
    const zeroCount = arr.filter(num => num === 0).length;
    return arr.filter(num => num != 0).concat(Array(zeroCount).fill(0));
}

console.log(shiftZeros(arr1));
console.log(shiftZeros(arr2));
console.log(shiftZeros(arr3));
