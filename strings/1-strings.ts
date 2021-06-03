const uncapitalize = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

const toSnakeCase = (str: string) => {
    return uncapitalize(str)
        .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};


let str = 'UpperCaseWord';

console.log(toSnakeCase(str));
