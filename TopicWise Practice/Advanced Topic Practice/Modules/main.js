// import { basicOperations } from "./another.js";
// import { advanceOperations } from "./index.js";

// function operations(mode, operand1, operator, operand2 = null){
//     return (mode) === 'basic'
//     ? basicOperations(operand1, operand2, operator)
//     : advanceOperations(operand1, operator, operand2);
// }
// console.log(operations("basic", 10, "+", 5));  // 15
// console.log(operations("basic", 8, "*", 3));   // 24
// console.log(operations("advance", 3, "^", 4)); // 81
// console.log(operations("advance", 9, "sq"));   // 3
// console.log(operations("advance", 5, "!")); 



// import { registrationUser, loginUser, listUsers } from './another2.js';
// import { addProduct, listProduct } from './index.js';
// import { placeOrder, listOrders } from './another.js';

// console.log(registrationUser('Nitin', 'ydvnitin16@gmail.com'))
// console.log(registrationUser('Tamanna', 'tamannaydv1947@gmail.com'))
// console.log(listUsers())

// console.log(addProduct('Iphone', 150000))
// console.log(addProduct('Macbook', 200000))
// console.log(listProduct())

// console.log(placeOrder('Iphone', 'Tamanna'))
// console.log(placeOrder('Macbook', 'Nitin'))
// console.log(listOrders())



// import { reverseString, checkPalindrome } from "./another.js";

// console.log(reverseString('yadav'))
// console.log(checkPalindrome('Nitin'))



import { addTask, removeTask, displayTasks } from "./index.js";

console.log(addTask('Help Other'))
console.log(addTask('Stop Procrastination'))
console.log(addTask('Avoid Social Media'))

console.log(displayTasks())

console.log(removeTask('Stop Procrastination'))
console.log(removeTask('Help Other'))
console.log(removeTask('Anger'))
console.log(displayTasks())