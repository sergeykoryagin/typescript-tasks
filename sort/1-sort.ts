const isSorted = (arr: number[]) => {
    let result = true;
    arr.forEach((val, i) => {
        if (arr[i + 1] && arr[i + 1] < val) {
            result = false;
            return;
        }
    });
    return result;
};

console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));
