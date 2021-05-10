'use strict';

const box = document.getElementById('box');
const buttons = document.getElementsByTagName("button");
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

buttons[1].style.color = 'green';
buttons[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'yellow'; 
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);
// hearts[1].before(div);
// hearts[1].after(div);

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();

// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = 'Hello';

div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");

