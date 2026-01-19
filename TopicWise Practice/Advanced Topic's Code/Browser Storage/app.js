// setItem(key, value) – store key/value pair.
// getItem(key) – get the value by key.
// removeItem(key) – remove the key with its value.
// clear() – delete everything.
// key(index) – get the key on a given position.
// length – the number of stored items.

// local storage
let Name = localStorage.getItem('name') || prompt('Enter Your Name', 'Unknown')
localStorage.setItem('name', Name)
let name = localStorage.getItem('name');
console.log(name)

// Shared between all tabs and windows from the same origin.
// The data does not expire. It remains after the browser restart and even OS reboot.

// session storage
let count = sessionStorage.getItem("count") || 0;
count++;
sessionStorage.setItem("count", count);
console.log("Page reload count:", count);

// data can be stored adn retrieved as a objects also
localStorage.test = '98'


// loop over local storage
for(key in localStorage){
    console.log(key, localStorage.getItem(key))
}

// textarea value stored in localStorage
let textArea = document.querySelector("#text-area");
textArea.value = localStorage.getItem('textarea') || ''
textArea.addEventListener('input', (e)=>{
    localStorage.setItem('textarea', e.target.value)
})

// Only Strings can be stored in the localstrings
// to store Arrays or Objects convert into JSON.Stringfy
// to do them noraml covert into JSON.parse after getItem