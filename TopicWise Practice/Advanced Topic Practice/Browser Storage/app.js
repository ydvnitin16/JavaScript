s// store dark/light mode settings
let btn = document.querySelector("#toggle-btn");

if (sessionStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme')
}

btn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        sessionStorage.setItem('theme', 'light')
    } else {
        sessionStorage.setItem('theme', 'dark')
    }
    document.body.classList.toggle('dark-theme')
})


// Save the last visited page in sessionStorage
sessionStorage.setItem('lastVisitedPage', window.location.href);

// Check if there is a last visited page and redirect
window.onload = function () {
    const lastPage = sessionStorage.getItem('lastVisitedPage');
    if (lastPage && lastPage !== window.location.href) {
        window.location.href = lastPage;
    }
};

// store user data and retrie them whenever needed
const users = [
    { id: 1, name: "Nitin", email: "nitin@example.com", age: 22 },
    { id: 2, name: "John", email: "john@example.com", age: 25 }
];

localStorage.setItem('users', JSON.stringify(users));

let storedUsers = JSON.parse(localStorage.getItem('users'));

console.log(storedUsers)

//user login form that remeber the username

let usernames = []

let input = document.querySelector('#username');
let login_btn = document.querySelector('#login-btn')
let clear_btn = document.querySelector('#clear-btn')

login_btn.addEventListener('click', (e) => {
    e.preventDefault()
    usernames.push(input.value)
    localStorage.setItem('usernames', JSON.stringify(usernames))
    console.log(localStorage)
});

clear_btn.addEventListener('click', () => {
    let index = usernames.findIndex(user => user == input.value)
    usernames.splice(index,1)
    localStorage.setItem('usernames', JSON.stringify(usernames))
})