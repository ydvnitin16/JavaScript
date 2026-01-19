// function getData(name){
//     return new Promise((resolve, reject)=>{
//         setTimeout(function () {
//             console.log(`Welcome: `,name)
//         },2000)
//     })
// };

// getData('Nitin');


// async function getNames() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
//     const data = await response.json();

//     for(person of data){
//         await new Promise(resolve => setTimeout(resolve, 2000))
//         console.log(person.name)
//     }
// }
// getNames()

// let callAgain = 0;
// let maxRetries = 3;
// async function getData() {

//     try {
//         const response = await fetch("https:s//jsonplaceholder.typicode.com/comments?postId=1")
//         if (!response.ok) {
//             throw new Error(`Error Found`)
//         }
//         const data = await response.json();
//         console.log(data)

//     } catch (err) {
//         if (callAgain < maxRetries) {
//             callAgain++
//             console.log(`Attempt ${callAgain}, trying again...`)
//             getData()
//         } else {
//             console.log(err.message)
//         }
//     }
// }
// getData()



// Promise.all([fetch('https://jsonplaceholder.typicode.com/posts'), fetch('https://jsonplaceholder.typicode.com/users'), fetch('https://jsonplaceholder.typicode.com/comments')])
// .then(res => Promise.all(res.map(r => r.json())))
// .then(data => data.forEach(user => console.log(user)))
// .catch(err => console.log(err.message));



// let items = [
//     { name: 'Pizza', prepTime: 2000, orderOf: 'Nitin' },
//     { name: 'Burger', prepTime: 5000, orderOf: 'Tamanna' },
//     { name: 'Pasta', prepTime: 3000, orderOf: 'Paryas' },
//     { name: 'Maggie', prepTime: 2000, orderOf: 'Neha' }
// ];

// function startPrep(item) {
//     return new Promise(resolve => {
//         setTimeout(function () {
//             console.log(`${item.orderOf} your ${item.name} is ready`);
//             resolve()
//         }, item.prepTime)
//     })
// };

// async function startCooking(arr) {
//     await Promise.all(arr.map(item => startPrep(item)))
// }

// startCooking(items);