const getMoney = (n: number) => {
    if (n < 0 || n > 1500) {
        return -1;
    }

    let count = 0;
    let currentMoney = n;
    const banknotes = [1000, 500, 200, 100, 50];

    banknotes.forEach(b => {
        count += Math.floor(currentMoney / b);
        currentMoney %= b;
    })

    return !currentMoney ? count: -1;
};

console.log(getMoney(950));