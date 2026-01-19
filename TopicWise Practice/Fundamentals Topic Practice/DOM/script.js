const body = document.querySelector('body');
document.querySelector('button')
.addEventListener('click', ()=> {
    const color = Math.floor(Math.random()*1000)
    body.style.backgroundColor = `#${color}`
});


let countDisplay = document.querySelector('#counter');
let counter = 0
const updateDisplay = () => {
    countDisplay.innerText = counter;
    if (counter > 0) {
        countDisplay.style.color = 'green';
    } else if (counter < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black';
    }
};

document.querySelector('#increment').addEventListener('click', () => {
    counter++;
    updateDisplay();
});

document.querySelector('#decrement').addEventListener('click', () => {
    counter--;
    updateDisplay();
});

document.querySelector('#reset').addEventListener('click', () => {
    counter = 0;
    updateDisplay();
});

