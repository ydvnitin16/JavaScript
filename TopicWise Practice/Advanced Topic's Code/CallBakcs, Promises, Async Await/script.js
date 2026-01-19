// CallBacks, Promises & Async Await
// async await >> promises >> callBacks
//Asynchronous

// console.log("one");
// setTimeout(() => {
//         console.log("hello");
// }, 4000);
// console.log("two");


// CallBacks  hell

// function getData(dataId, getNextData){
//         setTimeout(()=> {
//                 console.log("Data is : ",dataId);
//                 if(getNextData){
//                         getNextData();
//                 }
//         }, 2000);
// }

// getData(1, ()=>{
//         getData(2, ()=>{
//                 getData(3)
//         });
// });
// function showName(name, callback) {
//         setTimeout(() => {
//                 console.log(name);
//                 if (callback) {
//                         callback()
//                 }
//         }, 2000)
// };
// const arr = ['Nitin', 'Tamanna', 'Bhupender', 'Punit'];

// showName(arr[0], () => {
//         console.log('getting data ...')
//         showName(arr[1], () => {
//                 console.log('getting data ...')
//                 showName(arr[2], () => {
//                         console.log('getting data ...')
//                         showName(arr[3], () => {
//                         })
//                 })
//         })
// })

//Promises
// usually promises are resolved or rejcted by api , we just had to manage these results

// let promise = new Promise((resolve, reject)=> {
//         console.log("Hello");
//         resolve("success")
// });


// const arr = ['Nitin', 'Tamanna', 'Bhupender', 'Punit'];
// function showName(name) {
//         return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//                 console.log(name);
//                 resolve('success')
//         }, 100)
// })
// };

// showName(arr[0]).then((res)=>{
//         return showName(arr[1])
// }).then((res)=>{
//        return showName(arr[2])
// }).then((res)=>{
//        return showName(arr[3])
// })



// function getData(dataId, getNextData){
//         return new Promise((resolve, reject)=> {
//                 setTimeout(()=> {
//                         // console.log("Data is : ",dataId);
//                         // resolve("success");
//                         reject("not done");
//                         if(getNextData){
//                                 getNextData();
//                         }
//                 }, 5000);
//         });
//         };
//         let data = getData(123);

// real world ex

// const getpromise = () => {
//         return new Promise((resolve, reject) => {
//                 console.log("i am a Promise");
//                 resolve("success");
//                 // reject("rejected");
//         });
// }; // let assume this getPromise function give the promises fetched from api

// let promise = getpromise();

// promise.then((res)=>{
//         console.log("Promise Fulfilled",res);
// });  // if fullfilled

// promise.catch((err)=>{
//         console.log("Promise rejected",err);
// }); // if not fulfilled

// promise chaining

// let asyncFunc1 = () =>{
//         return new Promise((resolve, reject)=>{
//                 setTimeout(()=>{
//                         console.log("data1");
//                         resolve("success");
//                 },4000);
//         });
// };

// let asyncFunc2 = () =>{
//         return new Promise((resolve, reject)=>{
//                 setTimeout(()=>{
//                         console.log("data2");
//                         resolve("success")
//                 },4000);
//         });
// };


// console.log("fetching data 1....");
// asyncFunc1().then((res)=>{
//         console.log("fetching data 2....");
//         asyncFunc2().then((res)=>{

//         })
// });

// lets do the previous callback function with promise

// function getData(dataId){
//         return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//                 console.log("Data is : ",dataId);
//                 resolve("success");
//         }, 2000);
// });
// };

// // getData(1).then((res)=>{
// //         console.log(res);
// //         getData(2).then((res)=>{

// //         })
// // });// this is not the actual chaining, actual chaininig is given below


// getData(1)
//   .then((res)=>{
//     return getData(2);
//   })
//   .then((res)=>{
//         console.log(res);
//   });


//Async Await

// function api(){
//         return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//                 console.log("wheater data");
//                 resolve(200);
//         }, 2000);
// });
// };

// async function getWheatherData(){
//         await api().then((res)=> console.log(res));
// }
// getWheatherData();

// lets do the previous callback function with promise

// function getData(dataId){
//         return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//                 console.log("Data is : ",dataId);
//                 resolve("success");
//         }, 2000);
// });
// };

// async function getAllData(){
//         console.log("Fetching Data1.....")
//         await getData(1);
//         console.log("Fetching Data2.....")
//         await getData(2);
//         console.log("Fetching Data3.....")
//         await getData(3);
//         console.log("Fetching Data4.....")
//         await getData(4);
//         console.log("Fetching Data5.....")
//         await getData(5);
// };
// getAllData();