"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      buttons = document.querySelectorAll('button');
      

// btn.addEventListener("click", () => {
//     alert('Click');
// });

// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener("click", deleteElement);
    // }
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
});

buttons.forEach((item) => {
    item.addEventListener('click', deleteElement, {once: true});
});