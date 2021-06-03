const sortString = (str: string) => str.split('').sort().join('');

const isAnagrams = (str1: string, str2: string) => {
    return sortString(str1.toLowerCase()) === sortString(str2.toLowerCase());
};

console.log(isAnagrams('gallery', 'allergy'));
console.log(isAnagrams('lemon', 'melon'));
console.log(isAnagrams('gallery', 'alergy'));
