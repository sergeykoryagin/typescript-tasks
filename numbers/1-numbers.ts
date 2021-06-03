const isSumDigPowEqualNum = (num: number) => {
    const powDigits = num
        .toString()
        .split('')
        .map((num, ind) => (+num)**(ind + 1));
    
    return powDigits.reduce((sum, num) => sum + num) === num;
}

const sumDigPow = (start: number, end: number): number[] => {
    const result = []
    for (let i = start; i < end; i++) {
        if (isSumDigPowEqualNum(i)){
            result.push(i);
        }
    }
    return result;
}


console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(90, 100));
