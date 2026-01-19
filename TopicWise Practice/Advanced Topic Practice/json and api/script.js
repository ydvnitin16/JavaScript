// function getData(){
//     return  fetch("https://jsonplaceholder.typicode.com/users")
// }
// getData()
// .then(res => res.json())
// .then(dataAll => dataAll.filter(data => data.address.city == `South Christy`))
// .then(filteredData => console.log(filteredData))
// .catch(err => console.log(err.message))


// fetch("studentData.json")
// .then(res => res.json())
// .then(data =>{let math = 0
//     let english = 0
//     let science = 0;
//      data.map((student) =>{ math += student.scores.math
//         science += student.scores.science
//         english += student.scores.english
//      })
//      math /= data.length
//      english /= data.length
//      science /= data.length
//      return [`math: ${math}`, `english: ${english}`,`science: ${science}`]
//     })
// .then(data => console.log(data))

// fetch("studentData.json")
// .then(res => res.json())
// .then(data => {
//     let total = data.reduce((acc, curr)=>{
//         acc.math += curr.scores.math
//         acc.english += curr.scores.english
//         acc.science += curr.scores.science
//         return acc
//     },{ math: 0, english: 0, science: 0 });
//     const average = {
//         math: total.math/ data.length,
//         english: total.english/ data.length,
//         science: total.science/ data.length
//     }
//     return average
// }
// )
// .then(data => console.log(data))


// fetch("studentData.json", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json', // Ensures the server knows it's JSON
//     },
//     body: JSON.stringify({
//         "name": "Bob",
//         "scores": {
//           "math": 92,
//           "science": 88,
//           "english": 84
//         }
//       })
// }).then(res => res.text())
// .then(data => console.log(data))
// .catch(err => console.log(err))
