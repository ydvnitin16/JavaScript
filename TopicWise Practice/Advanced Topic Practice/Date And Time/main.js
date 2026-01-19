// const timeWatch = () => {
//     setInterval(() => {
//         let date = new Date();
//         let hour = date.getHours().toString().padStart(2, 0);
//         let minutes = date.getMinutes().toString().padStart(2, 0);
//         let seconds = date.getSeconds().toString().padStart(2, 0);

//         console.log(`${hour}:${minutes}:${seconds}`)
//     }, 1000);
// }
// timeWatch()

// let date = new Date().toLocaleTimeString('en-GB', { hour12: true });
// console.log(date)



// const timer = (date) => {
//     let interval = setInterval(() => {

//         let today = new Date()
//         let eventDate = new Date(date)
//         let difference = eventDate - today
//         // console.log(difference)
//         if (difference <= 0) {
//             console.log(`CountDown Over`)
//             clearInterval(interval);
//             return;
//         }
//         let diffDays = Math.floor(difference / (1000 * 60 * 60 * 24))
//         let diffHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//         let diffMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
//         let diffSeconds = Math.floor((difference % (1000 * 60)) / 1000)
//         console.log(`${diffDays}:${diffHours}:${diffMinutes}:${diffSeconds}`)
//     }, 1000);

// }
// timer("2025-02-12T22:30:00")




// const passedDays =(date)=>{
//     let today = new Date()
//     let eventDate = new Date(date)
//     if(isNaN(eventDate.getTime())){
//         return `Please enter a valid date or correct the format!`
//     }
//     let difference = today - eventDate;
//     let daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24))
//     return `${daysPassed} days have been passed since ${date}!`
// }
// console.log(passedDays("2025-01-12"))



// const formatDateTime = (timestamp) => {
//     let date = new Date(timestamp);

//     let day = String(date.getDate()).padStart(2, '0')
//     let month = String(date.getMonth() + 1).padStart(2, '0')
//     let year = date.getFullYear()

//     let hours = String(date.getHours()).padStart(2, '0')
//     let minutes = String(date.getMinutes()).padStart(2, '0')
//     let seconds = String(date.getSeconds()).padStart(2, '0')

//     return `${day}-${month}-${year} ${hours}-${minutes}-${seconds}`
// }
// console.log(formatDateTime("2025-02-11T18:30:45"))
// console.log(formatDateTime(new Date()))
