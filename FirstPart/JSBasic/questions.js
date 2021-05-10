// 1)

let x = 5;
console.log(x++); //5

// 2)

console.log([] + false - null + true); //NaN

// 3)

let y = 1;
let m = y = 2;
console.log(m); //2

// 4)

console.log([] + 1 + 2); //12

//5)

console.log("1"[0]);

// 6)
// Чему равно 2 && 1 && null && 0 && undefined

console.log(2 && 1 && null && 0 && undefined);

// 7) alert( null || 2 && 3 || 4 );

console.log(null || 2 && 3 || 4);

// 8) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b);

// 9) Что выведет этот код: alert( +"Infinity" ); ?

console.log(+"Infinity");
