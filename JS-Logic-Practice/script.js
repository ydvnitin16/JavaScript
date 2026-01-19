// // todo list logic
// let tasks = [
//     {
//         id: 1,
//         title: "WorkOut",
//         status: false
//     },
//     {
//         id: 2,
//         title: "Code",
//         status: false
//     },
// ];

// //add a new task
// function addNewTask(title){
//     if(!title || typeof title != "string" || title.trim() === ""){
//         console.log("Task title cannot be empty or invalid.");
//         return;
//     };

//     const task = {
//         id: tasks.length +1,
//         title: title.trim(),
//         status: false
//     };

//     tasks.push(task);
//     console.log(`Added Task ${title}`);
// };

// //delete a task by its id
// function deleteTask(id){
//     if(!id || typeof id != "number" || id > tasks.length){
//         console.log("Please Enter A Valid Id ");
//         return;
//     };

//     tasks = tasks.filter((task) => task.id != id);
//     console.log(`Deleted The Given Id Task`);
// };

// //mark a task status completed
// function updateTask(id){
//     if(!id || typeof id != "number" || id > tasks.length){
//         console.log("Please Enter A Valid Id ");
//         return;
//     };
//     let task = tasks.find(task => task.id === id);
//     task.status = true;
//     console.log(`${task.title} task is completed`)
// };

// //filter pending tasks
// function filterPendingTasks(){
//     return tasks.filter(task => task.status === false);
// };

// //count completed tasks
// function totalCompeletedTasks(){
//     return tasks.reduce((count, task) => task.status ? count + 1 : count, 0);
// };

// //check existance
// function checkExistance(title){
//     if(!title || typeof title != "string" || title.trim() === ""){
//         return console.log("Please enter a valid title")
//     }
//     return tasks.some(task => task.title.toLowerCase() === title.trim().toLowerCase());
// };

// //calculator logic

// function calculator(operand1 , operand2 , operator){
//     if(!operand1 || !operand2 || typeof operand1 != "number" || typeof operand2 != "number"){
//         return `please enter valid values`;
//     };

//     switch(operator){
//         case "+"
//         : return operand1 + operand2;
//         case "-"
//         : return operand1 - operand2;
//         case "*"
//         : return operand1 * operand2;
//         case "/"
//         : if(operand2 === 0){
//             return "Error: Division by zero is not allowed.";
//         }
//         return operand1 / operand2;
//         case "^"
//         : return operand1 ** operand2;

//         default: `invalid operator. please use +,-,* or /.`
//     };
// };

// function fact(n){
//     if(n===0 || n === 1){
//         return 1;
//     }
//     // let output = 1;
//     // for(let i=1; i<=n; i++){
//     //     output = output * i;
//     // };
//     // return output;
//     return n * fact(n-1);
// };
// console.log(fact(2));

//random number guess

// ----bad approach
// function getUserNumber(){
//     let randomNumber = Math.floor(Math.random() * 11);
//     console.log(randomNumber)
//     let userNumber = +prompt(" oops! Guess the number again between 0 to 10","");
//     do{
//         if(userNumber === randomNumber){
//             console.log(`${userNumber} is great guess`);
//             break;
//         }
//         userNumber = +prompt(" oops! Guess the number again between 0 to 10","");
//     }while(userNumber)
// };
// console.log(getUserNumber());

// ----very nice approach validations are neccessary
// function getUserNumber(){
//     let randomNumber = Math.floor(Math.random() * 11);
//     console.log(randomNumber);
//     let userNumber = null;

//     while(userNumber != randomNumber){
//         userNumber = prompt("Guess a number Between 0 to 10", "");

//         if(userNumber === null){
//             console.log("User Exited");
//             return `User Canceled The game`;
//         }
//         userNumber = +userNumber;

//         if(isNaN(userNumber) || userNumber < 0 || userNumber > 10){
//             console.log(`${userNumber} is a invalid Number`);
//             continue;
//         }

//         if(userNumber === randomNumber){
//             console.log(`${userNumber} is a great guess! You got it!`);
//             break;
//         }else{
//             console.log(`${userNumber} is a wrong guess`);
//         };
//     }
//     return `well done! ${userNumber} is a great guess`;
// };
// let output = getUserNumber();
// console.log(output);



console.log("A");

setTimeout(() => console.log("B"), 0);

fetch('https://httpbin.org/delay/10').then(() => console.log("C"));

Promise.resolve().then(() => {
  setTimeout(() => console.log("D"), 0);
});

console.log("E");


// let userChoice = +prompt("Enter 1 for C - F & enter 2 for F - C", "");
// let temp = +prompt("enter the temprature", "");

// if(isNaN(userChoice) || userChoice === "" ){
//     console.log(`Please enter a valid choice`)
// }
// switch(userChoice){
//     case 1: celToFarh()
//         break;
//     case 2: farhToCel()
//         break;
//     default:
//         console.log(`please enter a correct choice`)
//     }

// function celToFarh(cel){
//     return cel * (9/5) + 32;
// };
// function farhToCel(farh){
//     return (farh - 32) * 5/9
// };

// console.log(farhToCel(100));
