const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
    btns[2].style.backgroundColor = 'green';   
});

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);