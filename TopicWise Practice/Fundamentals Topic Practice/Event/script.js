let displayKey = document.querySelector('#key-display');
const body = document.querySelector('body')
body.addEventListener('keydown', (e) => {
    displayKey.innerText = e.key === ' '? 'space': e.key ;
});


const images = document.querySelectorAll('img');

images.forEach((img) => {
    img.addEventListener('click', (e) => {
       img.classList.toggle('large')
});
});


const x = document.querySelector('#x-cor');
const y = document.querySelector('#y-cor');

window.addEventListener('mouseover', (e)=>{
    x.innerText = e.clientX
    y.innerText = e.clientY
})