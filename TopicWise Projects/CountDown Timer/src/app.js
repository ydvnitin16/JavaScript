let displayDays = document.querySelector('#days')
let displayHours = document.querySelector('#hours')
let displayMinutes = document.querySelector('#minutes')
let displaySeconds = document.querySelector('#seconds');
let alertMsg = document.querySelector('#alert')

const startCountDown = (date) => {
    let interval = setInterval(() => {

        let today = new Date();
        let eventDate = new Date(date);
        let difference = eventDate - today;

        if (difference <= 0) {
            alertMsg.classList.remove('hidden')
            clearInterval(interval);
            return;
        }
        displayHours.innerText = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        displayMinutes.innerText = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        displaySeconds.innerText = Math.floor((difference % (1000 * 60)) / 1000)
        displayDays.innerText = Math.floor(difference / (1000 * 60 * 60 * 24))
    }, 1000);

}
startCountDown("2025-02-13T15:58:00")