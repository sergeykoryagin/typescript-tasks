const toSnakeCase = (str: string) => {
    return str
    .replace(/^[A-Z]/, letter => letter.toLowerCase())
    .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};


let str = 'UpperCaseStringG';

console.log(toSnakeCase(str));
