const isSumDigPowEqualNum = (num: number) => {
    const powDigits = num
        .toString()
        .split('')
        .map((num, ind) => (+num)**(ind + 1));
    
    return powDigits.reduce((sum, num) => sum + num) === num;
}

const sumDigPow = (start: number, end: number): number[] => {
    return Array<number>(end - start).fill(0)
        .map((num, ind) => num + ind + start)
        .filter(num => isSumDigPowEqualNum(num));
}


console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(90, 100));
console.log(sumDigPow(1, 1000000));
