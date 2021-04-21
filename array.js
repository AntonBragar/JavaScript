"use strict";

const arr = [10, 2, 24, 1, 8, 7, 103, 4, 12, 12, 9, 12];

arr.sort(compareNum);
function compareNum(a, b) {
    return a - b;
}

console.log(arr);

// console.log(arr);

// arr.push(10);
// arr.pop();
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

const str = prompt('', '');
const products = str.split(', ');
products.sort();

console.log(products);
console.log(products.join('; '));


