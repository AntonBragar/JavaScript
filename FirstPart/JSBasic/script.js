const obj = {
    name: 'Anton',
    age: 25,
    isMarried: true,
};

console.log(obj.isMarried == true);


console.log('arr ' + '- is object');


let massive = ['apple', 'grape', 'orange'];

for (let i = 0; i < massive.length; i++) {
    console.log(massive[i]);
}



let showName = () => {
    let 
    question = prompt('What is your name? ', '');
    console.log(`Hello, ${question}`);
};

showName();