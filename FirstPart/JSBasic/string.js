let string = 'HSDKSKDSMDKSDMS';
console.log(string.toLowerCase());
console.log(string);

const animal = {
    name: 'Jake',
    age: 15,
    birthday: "05.03.1996",
    hobbies: ['football', 'basketball', 'gaming', 'art'],
};

const clone = Object.assign(animal, {});
// console.log(clone);

clone.hobbies[1] = 'beerpong';
// console.log(clone);

const recopy = Object.assign(animal, {});
console.log(recopy);