// function divide(a, b){
//     return new Promise((resolve, reject)=>{
//     if(b == 0 ){
//         reject(new Error('Error because of 0'))
//     }
//     resolve(a/b)
// })
// }

// divide(50, 5).
// then((result)=> console.log(result))
// .catch(error => console.log(error.message));



// function fetchApi(){
//     return new Promise((resolve, reject) =>{
//         let success = Math.random()*11 > 0.5;
//         setTimeout(() => {
//             if(success){
//                 resolve(`API Fetched Successfully`)
//             }else{
//                 reject(new Error('API call failed!'))
//             }
//         }, 2000);
//     })
// };

// async function fetchingApiData(retries = 3, fallbackValue = `not fetched`){
// for(let tries = 1; tries<= retries; tries++){
//     try{
//         const response = await fetchApi();
//         if(!response){
//             throw new Error(`Sorry Not Fetched`)
//         }
//         return console.log(response)
//     }catch(err){
//         console.log(err.message)
//         if(retries === tries) return fallbackValue
//     }
// }
// }

// fetchingApiData()



function fetchApi() {
    return new Promise((resolve, reject) => {
        let success = Math.random() * 11 > 0.5;
        setTimeout(() => {
            if (success) {
                resolve(`API Fetched Successfully`)
            } else {
                reject(new Error('API call failed!'))
            }
        }, 2000);
    })
};
let btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    fetchingApiData()
})
async function fetchingApiData(retries = 3, fallbackValue = "API not fetched") {
    let tries = 0;

    while (tries < retries) {
        try {
            console.log(`Attempt ${tries + 1}...`);
            const response = await fetchApi(); // Call the API
            console.log(response); // Log success
            return; // Exit the function if the API call is successful
        } catch (err) {
            console.log(err.message); // Log the error
            tries++; // Increment the retry counter

            if (tries >= retries) {
                console.log(fallbackValue); // Log the fallback value after max retries
                return;
            }

            console.log("Retrying...");
        }
    }
}
fetchingApiData()
