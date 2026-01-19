// const controller = new AbortController();
// console.log("started")

// // Obtain a reference to the AbortSignal
// const signal = controller.signal;
// // Make a fetch request with the signal
// fetch('https://httpbin.org/delay/4', { signal })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => {
//     console.log(error)
//   });
// // To cancel the request, call the abort() method on the controller
// // controller.abort();

// CREATE YOUR OWN .map

// function map(array, callback) {
//     const output = [];
//     for (const value of array) {
//         const result = callback(value);
//         output.push(result);
//     }
//     return output;
// }

// CREATE YOUR OWN .filter

// function filter(array, callback) {
//     const output = [];

//     for (const value of array) {
//         callback(value) ? output.push(value) : null;
//     }

//     return output;
// }

// Flatten array

// function flattenArray(arr) {
//     if (!Array.isArray(arr)) {
//         return arr;
//     }
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const value = flattenArray(arr[i]);
//         newArray = newArray.concat(value);
//     }

//     return newArray;
// }

// similarly we can do it with the reducer function

// function flattenArrayRe(arr) {
//     return arr.reduce(
//         (acc, curr) =>
//             Array.isArray(curr)
//                 ? acc.concat(flattenArrayRe(curr))
//                 : acc.concat(curr),
//         []
//     );
// }

// console.log(flattenArrayRe([1, 2, [3, 4, [45, 46]], 5, [6, 7]]));

// Group a given object with keys

// const users = [
//     { id: 1, name: 'Nitin', role: 'admin' },
//     { id: 2, name: 'Aman', role: 'user' },
//     { id: 3, name: 'Rahul', role: 'admin' },
//     { id: 4, name: 'Sneha', role: 'user' },
// ];

// function groupby(arr, key) {
//     const result = new Object();

//     for (let i = 0; i < arr.length; i++) {
//         const obj = arr[i];
//         const newKey = obj[key];
//         if (!result[newKey] || !Array.isArray(result[newKey])) {
//             result[newKey] = new Array();
//         }
//         const indexToStore = result[newKey].length || 0;
//         result[newKey][indexToStore] = obj
//     }
//     return result;
// }

// console.log(groupby(users, 'role'));

// Remove deuplicates of array of objects with id

// const users = [
//     { id: 1, name: 'Nitin' },
//     { id: 2, name: 'Aman' },
//     { id: 1, name: 'Nitin Updated' },
//     { id: 1, name: 'Nitin Updated' },
//     { id: 1, name: 'Nitin Updated' },
//     { id: 3, name: 'Rahul' },
//     { id: 2, name: 'Aman Updated' },
// ];

// function removeDuplicate(arr) {
//     const result = new Array();

//     for (let i = 0; i < arr.length; i++) {
//         const obj = arr[i];
//         // check is it exists
//         let alreadyExists = false;
//         for (let j = 0; j < i; j++) {
//             if (result[j]?.id === obj.id) alreadyExists = true;
//         }
//         if (!alreadyExists) {
//         let storeAtIndex = result.length;
//             result[storeAtIndex] = obj;
//         }
//     }
//     return result;
// }

// console.log(removeDuplicate(users));

// Create once function to execute any fn only once and next calls return the executed result
// function once(fn) {
//     let count = new Map();
//     console.log(fn)
//     return (...args) => {
//         if (count.has(fn)) {
//             return count.get(fn);
//         }
//         result = fn(...args);
//         count.set(fn, result);
//         return result;
//     };
// }
// function once(fn) {
//     let count = 0;
//     return (...args) => {
//         if (!count) {
//             return (count = fn(...args))
//         }
//         return count;
//     };
// }

// function greet(name) {
//     return 'Hello ' + name;
// }
// function bye(name) {
//     return 'Bye ' + name;
// }

// const greetOnce = once(greet);
// const byeOnce = once(bye);

// console.log(greetOnce('Nitin'));
// console.log(greetOnce('Aman'));
// console.log(greetOnce('Rahul'));

// console.log(byeOnce('Aman'));
// console.log(byeOnce('Nitin'));
// console.log(byeOnce('Rahul'));


