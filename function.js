//Write a function that takes two numbers as arguments and returns their sum.
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 3));
//Write a function that takes a string as an argument and returns the string reversed.
function reverseStr(str) {
    let splitStr = str.split('');
    splitStr.reverse();
    let joinStr = splitStr.join('')
    return joinStr;
}
console.log(reverseStr("chai"))
//Write a function to check if a given number is even or odd.
function checkNum(num) {
    if (num % 2 == 0) {
        return "even";
    }
    return "odd";
}
console.log(checkNum(21))
//Write a function to find the maximum value in an array of numbers.
let arr = [33, 25, 65, 8, 51];
function maxArr(arr) {
    let max = 0;
    for (const num of arr) {
        if (max < num) {
            max = num
        }
    }
    return max;
}
console.log(maxArr(arr))
//Write a function that takes a string as an argument and returns the number of vowels in the string.
let str = "hello ashu";
let newStr = str.toLowerCase()
let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
function getVowel(str) {
    let count = 0;
    for (const char of str) {
        if (vowels.has(char)) {
            count++
        }
    }
    return count;
}
console.log(getVowel(str))
//Write a function that takes two arguments, a base and an exponent, and returns the base raised to the power of the exponent.
function powerExponent(base,exponent){
    return base ** exponent;
}
console.log(powerExponent(2,2));
