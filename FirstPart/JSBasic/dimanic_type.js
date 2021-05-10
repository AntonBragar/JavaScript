"use strict";

// To String

// 1)

console.log(typeof(String(null)));

// 2)

console.log(typeof(null + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

console.log(typeof(Number('5')));

console.log(typeof(+'5'));


// 3)
console.log(typeof(parseInt("15px", 10)));
console.log(parseInt("15px", 10));

let answ = +prompt('Hello', '');

// To Boolean
// 1)

let switcher = null;

if (switcher) {
    console.log('Working....');
}

switcher = 1;

if (switcher) {
    console.log('Working....');
}


// 2)

console.log(typeof(Boolean(4)));

// 3)

console.log(typeof(!!"SEX"));
