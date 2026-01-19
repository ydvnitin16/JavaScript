
// let specificDate = new Date(2023, 11, 25, 10, 30, 0);  
// console.log(specificDate);

//we can get anything from date
let currentDate = new Date()
let x = currentDate.getDate()
x = currentDate.getDay()
x = currentDate.getFullYear()
x = currentDate.getHours()
x = currentDate.getMilliseconds()
x = currentDate.getMonth()
x = currentDate.getMinutes()
x = currentDate.getTime()
// console.log(x)

// we can set into the date 
let date = new Date();
date.setFullYear(2026);
date.setMonth(5);  // June (months start from 0)
date.setDate(15);
date.setHours(14); // 2 PM
// console.log(date);

// we can get timestamp (eg. 1739205731653)
let timestamp = Date.now();
// console.log(timestamp);

// convert data into string

let date2 = new Date();
// console.log(date2.toDateString()); // Example: "Mon Feb 10 2025"
// console.log(date2.toTimeString()); // Example: "14:45:30 GMT+0530 (IST)"
// console.log(date2.toLocaleString()); // Example: "2/10/2025, 2:45:30 PM"
// console.log(date2.toISOString());  // Example: "2025-02-10T09:15:30.000Z" (useful for APIs)

// date calculations

let date3 = new Date();

date3.setDate(date3.getDate() + 5);
// console.log(date3)

//difference

let date4 = new Date("2025-02-10");
let date5 = new Date("2025-02-20");

let diff = date5 - date4;  // Difference in milliseconds
let diffDays = diff / (1000 * 60 * 60 * 24); // Convert to days

// console.log(`diffDays ${diffDays}`);  // Output: 10 days


// lets build a countdown timer

function countDown(date) {
    let today = new Date()
    let eventDate = new Date(date);

    let diff = eventDate - today;
    let remainingDays = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return `${remainingDays} are the remaining days`
}


// console.log(countDown("2025-12-31"))

function countDaysMonths(date) {
    let today = new Date();
    let eventDate = new Date(date)

    let months = 0
    let currentDate = new Date(today)
    while (currentDate < eventDate) {
        currentDate.setMonth(currentDate.getMonth() + 1)
        if (currentDate <= eventDate) {
            months++
        }
    }
    currentDate.setMonth(currentDate.getMonth() - 1)
    let days = Math.ceil((eventDate - currentDate) / (1000 * 60 * 60 * 24))
    console.log(days)
}
// countDaysMonths("2025-12-31")


// practice
// let newDate = new Date(2012, 1, 20, 3, 12, 0);
// newDate = new Date("2012-02-20T03:12");
// console.log(newDate)

// function getWeekDay(date){
//     const days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
//     return date.getDay()
//     // return date.toString().slice(0, 2)
// }
// console.log( getWeekDay(new Date(2012, 0, 3)) )

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date)
//     dateCopy.setDate(date.getDate() - days)
//     return dateCopy
// }

// console.log(getDateAgo(new Date(), 4))
// console.log(getDateAgo(new Date(), 55))
// console.log(getDateAgo(new Date(), 365))


// function getLastDayOfMonth(year, month) {
//     let dateCopy = new Date(year, month + 1, 0)
//     return dateCopy
// }

// console.log(getLastDayOfMonth(2012, 1))


// function getSecondsToday() {
//     let now = new Date()
//     return now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds()
// }
// console.log(getSecondsToday())



// function getSecondsToTomorrow() {
//     let totalSecondsInADay = 86400;
//     return totalSecondsInADay - getSecondsToday() 
// }

// console.log(getSecondsToTomorrow())