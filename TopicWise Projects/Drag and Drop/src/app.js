let lists = document.querySelectorAll('.lists');
let left = document.querySelector('#left');
let right = document.querySelector('#right');

let selected = null;

lists.forEach((list) => {
    list.addEventListener('dragstart', (e) => {
        selected = e.target;
        console.log(selected)
        right.addEventListener('dragover', (e)=>{
            e.preventDefault()
        })

        right.addEventListener('drop', (e)=>{
            right.appendChild(selected)
            selected = null
        })
    })

    left.addEventListener('dragover', (e)=>{
        e.preventDefault()
    })
    left.addEventListener('drop', (e)=>{
        left.appendChild(selected)
            selected = null
    })
});