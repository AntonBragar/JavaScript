"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function(a, b) {
        console.log(a + b);
    }

};

options.makeTest(5, 10);

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options));
// console.log(Object.keys(options).length);


console.log(options.name);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство: ${i} имеет значение "${options[key][i]}"`);
            counter++;
        }
    } else {
        console.log(`Свойство: ${key} имеет значение "${options[key]}"`);
        counter++;
    }    
}

console.log(counter);