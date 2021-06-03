const toOneWord = (str: string) => str.replace(/\W|\s/g, '').toLowerCase();

const isPalindrome = (str: string) => {
    return toOneWord(str) === toOneWord(str).split('').reverse().join('');
};

console.log(isPalindrome('Madam im Adam.'));
console.log(isPalindrome('Was it a cat I saw?'));
console.log(isPalindrome('not palindrome'));
