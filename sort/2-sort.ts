let array1 = [10, 0, 3, 4, 5, 1, 5, 6, 9, 4, 7, 2]
let array2 = [1, 3, 5, 7, 9];
let array3 = [5, 8, 5, 6, 7, 2];

const sortEvenNumbers = (arr: number[]): number[] => {
    const sortedEvenNumbers = arr
        .filter(num => num % 2 === 0)
        .sort((a, b) => a - b);
    
    let index = 0;

    return arr
        .map(num => num % 2 ? num: null)
        .map(item => {
            if(item === null) {
                return sortedEvenNumbers[index++];
            }
            return item;
    });
}

console.log(sortEvenNumbers(array1));
console.log(sortEvenNumbers(array2));
console.log(sortEvenNumbers(array3));