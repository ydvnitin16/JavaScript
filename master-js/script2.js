//  Create a counter

// function createCounter() {
//     let count = 0;

//     return () => {
//         return ++count;
//     };
// }

// Memoize function

// function memoize(fn) {
//     const cache = new Map();

//     return (...args) => {
//         const key = JSON.stringify(args);
//         if (cache.has(key)) {
//             return cache.get(key);
//         }
//         console.log('Executing fn for: ', key);
//         const result = fn(...args);
//         cache.set(key, result);
//         return result;
//     };
// }

// function add(a, b) {
//     return a + b;
// }

// const memoizedAdd = memoize(add);

// memoizedAdd(2, 3);
// memoizedAdd(2, 3);
// memoizedAdd(4, 5);
// memoizedAdd(2, 3);

// solve the buggy code given below:

// var i = 0; 1-2-3-4 console.log('var value'); global scope
// let-const i = 0; 1-2-3-4 console.log('it prints the value at the time of iteration') block scope

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// solution: change the variable type var -> let

// IMPLEMENT THROTTLE

// function throttle(fn, delay) {
//     let timer;
//     return (...args) => {
//         if (!timer) {
//             timer = setTimeout(() => {
//                 timer = null;
//                 fn(...args);
//             }, delay);
//         }
//     };
// }

// const throttleButton = document.getElementById("throttle");

// const throttleButtonClicked = () => {
//     console.log("Throttle Button Clicked");
// };

// const throttleButtonFn = throttle(throttleButtonClicked, 2000);
// throttleButton.addEventListener("click", throttleButtonFn);

// IMPLEMENT DEBOUNCE

// function debounce(fn, delay) {
//     let timer;
//     return (...args) => {
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn(...args)
//         }, delay);
//     }
// }

// const debounceButton = document.getElementById("debounce");

// const debounceButtonClicked = () => {
//     console.log("Debounce Button Clicked");
// };

// const debounceButtonFn = debounce(debounceButtonClicked, 2000);
// debounceButton.addEventListener("click", debounceButtonFn);