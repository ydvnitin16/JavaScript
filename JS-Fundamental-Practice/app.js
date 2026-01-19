// let tasks = [];

// function addTask(title){
//     const task = {
//         id: tasks.length+1,
//         title: title,
//         completed: false
//     };
//     tasks.push(task);
//     console.log(`added task ${title}`);
// };

// function viewTasks(){
//     tasks.forEach(task => {
//         console.log(`task id: ${task.id}, task: ${task.title} - ${task.completed ? "Completed" : "Pending"}`);
//     });
// };

// function markTaskCompleted(id){
//     const task = tasks.find(t => t.id === id);
        
//     if(task){
//         task.completed = true;
//         console.log(`${task.title} - ${task.completed}`);
//     }else{
//         console.log("Match Not Found");
//     };
// };

// function deleteTask(id){
//     const index = tasks.findIndex(t => t.id === id);

//     if(index !== -1){
//         const deletedTask = tasks.splice(index,1);
//     }else{
//         console.log("Match Not Found");
//     };
// };

// addTask(prompt("enter a task", ""));

// viewTasks();
// addTask(prompt("enter a task", ""));
// addTask(prompt("enter a task", ""));
// viewTasks();



// let products = [
//     { id: 1, name: "Laptop", category: "electronics", price: 800 },
//     { id: 2, name: "Phone", category: "electronics", price: 600 },
//     { id: 3, name: "laptop", category: "furniture", price: 300 },
//     { id: 4, name: "Watch", category: "accessories", price: 150 },
//     { id: 5, name: "Headphones", category: "electronics", price: 100 },
//   ];

//   //searching products

// function search(){
//     let searchTerm = prompt("Search Value", "");

//     products.forEach(product =>{
//         const searchMatches = product.name.toLowerCase().includes(searchTerm);
//         return searchMatches;
//     })
//   };

//   function search(){
//     let searchTerm = prompt("Search Value", "");

//     let matchesArr = [];
//     products.forEach(product =>{
//     if(product.name.toLowerCase().includes(searchTerm)){
//         matchesArr.push(product);
//     }
//     })
//     return matchesArr;
//   };

 
  

// // filtering products

// function filter(){
//     const checkedCategories = prompt("enter category", "");

//     const filtered = [];

//     products.forEach(product =>{
//         if(product.category.toLowerCase() === checkedCategories){
//             filtered.push(product);
//         }
//     })
//     return filtered;
// }

// console.log(filter());
// console.log(search());




// let expenses = [
//         { name: "Groceries", amount: 200, date: "2024-11-01" },
//         { name: "Rent", amount: 1500, date: "2024-11-05" },
//         { name: "Electricity Bill", amount: 300, date: "2024-11-10" },
//         { name: "Internet Bill", amount: 700, date: "2024-11-12" },
//         { name: "Dining Out", amount: 450, date: "2024-11-15" },
//         { name: "Shopping", amount: 1200, date: "2024-11-18" },
//         { name: "Fuel", amount: 600, date: "2024-11-20" }
// ];

// function addExpense(){
    
//     const expense ={
//      name: prompt("Name Of The Expense",""),
//      amount: Number(prompt("Amount Of The Expense","")),
//      date: prompt("Date Of The Expense","")
//     }

//     expenses.push(expense);
//     console.log(expense);
// };
// console.log(expenses);


// function totalExpenses(){
//     let totalExpenses = 0;
//     expenses.forEach((ex)=>{
//         totalExpenses += ex.amount;
//     });
//     return totalExpenses;
// };
// const total = totalExpenses();


// console.log(total);

// const filteredExpenses = expenses.filter((expense)=> expense.amount > 500);
// console.log(filteredExpenses);





// const products = [
//     { id: 1, name: "Smartphone", price: 15000, category: "Electronics", rating: 4.5, stock: 20, dateAdded: "2024-11-01" },
//     { id: 2, name: "Laptop", price: 55000, category: "Electronics", rating: 4.8, stock: 5, dateAdded: "2024-10-15" },
//     { id: 3, name: "Washing Machine", price: 25000, category: "Home Appliances", rating: 4.2, stock: 10, dateAdded: "2024-10-10" },
//     { id: 4, name: "Refrigerator", price: 30000, category: "Home Appliances", rating: 4.7, stock: 7, dateAdded: "2024-09-30" },
//     { id: 5, name: "Headphones", price: 2000, category: "Accessories", rating: 4.1, stock: 50, dateAdded: "2024-11-05" },
//     { id: 6, name: "Air Conditioner", price: 45000, category: "Home Appliances", rating: 4.6, stock: 3, dateAdded: "2024-08-20" },
//     { id: 7, name: "Tablet", price: 20000, category: "Electronics", rating: 4.3, stock: 15, dateAdded: "2024-10-25" },
//     { id: 8, name: "Microwave Oven", price: 12000, category: "Home Appliances", rating: 4.4, stock: 12, dateAdded: "2024-11-10" },
//     { id: 9, name: "Smart Watch", price: 5000, category: "Accessories", rating: 4.2, stock: 30, dateAdded: "2024-11-15" },
//     { id: 10, name: "Gaming Console", price: 40000, category: "Gaming", rating: 4.9, stock: 8, dateAdded: "2024-10-05" },
//     { id: 11, name: "Television", price: 35000, category: "Electronics", rating: 4.8, stock: 6, dateAdded: "2024-09-25" },
//     { id: 12, name: "Camera", price: 25000, category: "Photography", rating: 4.7, stock: 10, dateAdded: "2024-10-30" },
//   ];

// function addProduct(){
//     const name = prompt("name of product", "").trim().toLowerCase();
//     const price = Number(prompt("price of this product", ""));
//     const stock = Number(prompt("enter stock", ""));

//     const product = {name, price, stock};
//        let existingProduct = products.find((pro)=> pro.name.toLowerCase() == product.name);

//        if(existingProduct){
//         existingProduct.stock += product.stock;
//        }else{
//         products.push(product);
//        }
    
//     // products.push(product);
//     console.log("added product is :", product);
// };
// // addProduct();

// console.log(products);


// function removeItem(name){
//     const index = products.findIndex(p => p.name.toLowerCase() == name.trim().toLowerCase());

//     if(index == -1){
//         console.log("Item Not Found");
//     }
//     else{
//         const deletedElement = products.splice(index, 1);
//         console.log("deleted product", deletedElement);
//     }
// };


// let totalPrice = products.reduce((total , curr) => curr.price*curr.stock + total, 0);

// console.log(totalPrice);



//budget tracking system

// const expenses = [
//     { name: "Groceries", amount: 200, date: "2024-11-01" },
//     { name: "Rent", amount: 1500, date: "2024-11-05" },
//     { name: "Electricity Bill", amount: 300, date: "2024-11-10" },
//     { name: "Internet Bill", amount: 700, date: "2024-11-12" },
//     { name: "Dining Out", amount: 450, date: "2024-11-15" },
//     { name: "Shopping", amount: 1200, date: "2024-11-18" },
//     { name: "Fuel", amount: 600, date: "2024-11-20" },
//     { name: "Vacation", amount: 5000, date: "2024-10-25" },
//     { name: "Medical Bill", amount: 800, date: "2024-10-30" }
// ];



// function groupExpenseByDate(expenses){
//     let grouped = {};

//     expenses.forEach(expense => {
//         const month = expense.date.slice(0, 7);

//         if(!grouped[month]){
//             grouped[month] = [];
//         }

//         grouped[month].push(expense);
//     });
//     return grouped;

// }


// function calculateTotalByMonth(grouped){
//     let totalByMonth = [];

//     for(month in grouped){
//         let total = grouped[month].reduce((sum, expense)=> sum += expense.amount, 0);

//         totalByMonth.push({month, total});
//     }
//     return totalByMonth;
// }

// const groupedExpenses = groupExpenseByDate(expenses);
// const monthlyTotals = calculateTotalByMonth(groupedExpenses);

// console.log("Grouped Expenses:", groupedExpenses);
// console.log("Monthly Totals:", monthlyTotals);




// let convertTo = +prompt("Enter 1 for Celsius To fahrenheit Conversion or 2 for Fahrenheit To Celsius Consversion", "")
// let temp = +prompt("Enter the temperature", "");

// if(isNaN(temp)){
//     console.log("Enter a Valid Temperature");
// }else{
// switch(convertTo){
//     case 1 : celToFarh(temp)
//     break;
//     case 2 : farahToCel(temp)
//     break;
//     default:
//         console.log("Enter a Valid Number");
// };
// };

// function celToFarh(temp){
//     const converted = temp*(9/5) + 32;
//     console.log(temp,"Celsius To fahrenheit Conversion is: ", converted);
// };

// function farahToCel(temp){
//     const converted = (temp - 32) * 5/9;
//     console.log(temp, "Fahrenheit To Celsius Consversion is: ", converted);
// };



// let year = +prompt("Enter A Year", "");
// checkLeapYear(year);
//  function checkLeapYear(year){
//     if((year % 4 === 0 && !year % 100 === 0) || (year % 400 === 0)){
//         console.log( year, " Year is a Leap Year");
//     }
//     else{
//         console.log( year, " Year is Not a Leap Year");
//     };
//  };



// let n = 100;

// for(let i = 0; i<=n; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }



// let n = prompt("Enter a Number to Print Table of", '');

// for(let i = 1; i<=10; i++){
//     console.log(i * n);
// }



// function evenOdd(num){
//     if(num%2 === 0){
//         return 'given Number is Even';
//     }   else{
//         return 'Given number is odd';
//     }

// }

// let whatItIs = evenOdd(2);
// console.log(whatItIs);



// const fact = (num) => {
//     if(num < 0){
//         return 'Entered Number is Not Valid';
//     }
//     let result = 1;
//     for(let i = 1; i<=num; i++){
//         result *= i;
//     }
//     return result;
// };

// let result = fact(-1);
// console.log(result);
    



// let arr = [1,2,3,4,5,6,7,8,10];

// const sum = (arr) =>{
//     let sum = 0;
//     for(let i =0; i<arr.length; i++){
//     sum += arr[i];
//     }
//     return sum;
// }
// let TotalSum = sum(arr);
// console.log(TotalSum);

// const sum = (arr) => arr.reduce((acc, current) => acc + current, 0);
// let TotalSum = sum(arr);
// console.log(TotalSum);

// const sum = (arr) =>{
//     let sum = 0;
//     for(let number of arr){
//     sum += number;
//     }
//     return sum;
// }
// let TotalSum = sum(arr);
// console.log(TotalSum);



// let arr = [2,5,8,0,3,6,2,9,1];
// const findLargest = (arr) =>{
//     let largest = Math.max(...arr);
//     return largest;
// }
// let largest = findLargest(arr);
// console.log(largest);

// const findLargest=(arr)=> arr.reduce((acc, curr)=> curr > acc ? curr : acc ,arr[0]);
// let largest = findLargest(arr);
// console.log(largest);

// const findLargest = (arr) =>{
//     let largest = arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// let largest = findLargest(arr);
// console.log(largest);



// let arr = [2,5,8,0,3,6,2,9,1];
// function extractEven (arr){
//     let even = arr.filter(num => num%2 === 0 && num !== 0);
//     return even;
// };
// let even = extractEven(arr);
// console.log(even);



// let arr = [1, 2, 3, 1, 2, 1]
// function countOccurrences(arr, target){
//     let counter = 0;
//     for(let i =0; i<arr.length; i++){
//         if(arr[i] === target){
//             counter++;
//         }
//     }
//     return counter;
// };
// let counter = countOccurrences(arr, 1);
// console.log(counter);

// function countOccurrences(arr, target){
//     return arr.filter(num => num === target).length;
// };
// let counter = countOccurrences(arr, 1);
// console.log(counter);



// let obj = {
//     firstName: "nitin",
//     lastName: "yadav"
// };
// function person(obj){
//     return obj.firstName + " " + obj.lastName;
// }
// let fullname = person(obj);
// console.log(fullname);



// let product = {
//     name: "Laptop",
//     price: 50000,
//     category: "Electronics",
//     // A method to display product details
//     displayDetails: function () {
//         console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
//     },
//     discount: 20,
//     discountedPrice: function () {
//         console.log( this.price - (this.price * this.discount/100))
//     }
// };

// product.discountedPrice();



// let products = [
//     { name: "Laptop", price: 60000 },
//     { name: "Smartphone", price: 30000 },
//     { name: "Tablet", price: 20000 },
//     { name: "Smartwatch", price: 15000 },
//     { name: "Headphones", price: 5000 }
// ];
// function filterByPrice(product){
//     return product.filter(obj => obj.price>=20000)
//     .map(obj => obj.name);
// };
// let filtered = filterByPrice(products);
// console.log(filtered);



// let books = [
//     { title: "The Road", author: "Cormac McCarthy", yearPublished: 2006 },
//     { title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling", yearPublished: 2000 },
//     { title: "The Kite Runner", author: "Khaled Hosseini", yearPublished: 2003 },
//     { title: "The Da Vinci Code", author: "Dan Brown", yearPublished: 2003 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 }
// ];

// function filterBooks(books){
//     return books.filter(book => book.yearPublished >= 2000)
// }

// let book2000 = filterBooks(books);
// console.log(book2000);



        //calculate bmi

// let userChoice = +prompt("Enter 1 For Metric Units(KG/M) & 2 For US Customary Units(Pound/IN)","");
// switch(userChoice){
//     case 1: calculateBmiMU()
//     break;
//     case 2: calculateBmiCU()
//     break;
//     default: console.log("Entered Value is Invalid")
// }

// function BMICategory(BMI){
//     BMI = BMI.toFixed(2);

//     if(BMI< 16.0){
//         console.log(`Your BMI is ${BMI} And You Are severely Underweight`);
//     }else if((BMI>= 16.0 && BMI <=18.4)){
//         console.log(`Your BMI is ${BMI} And You Are Underweight`);
//     }else if((BMI>= 18.5 && BMI <=24.9)){
//         console.log(`Your BMI is ${BMI} And You Are Normal`);
//     }else if((BMI>= 25.0 && BMI <= 29.5)){
//         console.log(`Your BMI is ${BMI} And You Are Overweight`);
//     }else if((BMI>= 30.0 && BMI <= 34.5)){
//         console.log(`Your BMI is ${BMI} And You Are Moderately Obese`);
//     }else{
//         console.log(`Your BMI is ${BMI} And You Are Severely Obese`);
//     };
// };

// function calculateBmiMU(){
//     const weight = +prompt("Enter Weight in KiloGrams","");
//     const height = +prompt("Enter Height in Meters","");
//     if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
//         console.log("Invalid input. Please enter positive numeric values.");
//         return;
//     };
//     let BMI = weight / (height * height);
//     // console.log(`Your BMI Is ${BMI}`);
//     BMICategory(BMI);
// };

// function calculateBmiCU(){
//     const weight = +prompt("Enter Weight in Pounds","");
//     const height = +prompt("Enter Height in Inches","");
//     if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
//         console.log("Invalid input. Please enter positive numeric values.");
//         return;
//     };
//     let BMI = weight / (height * height) *  703;
//     // console.log(`Your BMI Is ${BMI}`);
//     BMICategory(BMI);
// };



// function palindrome(value){
//     if(typeof value == "number"){
//     value = value.toString();
//     }else if(typeof value == "string"){
//         value = value.toLowerCase();
//     }else{
//         console.log("Invalid Input Please Enter String Or Numbers");
//         return null;
//     }
//     const reversed = value.split("").reverse().join("");
//     if(value === reversed){
//         return `${reversed} is a Palindrome`
//     }else{
//         return `${reversed} is not a Palindrome`
//     }
// };
// let isPalindrome = palindrome(121);
// let isPalindrome = palindrome("RaceCar")
// let isPalindrome = palindrome("hello")
// let isPalindrome = palindrome({})

// console.log(isPalindrome);



// let arr = ["nitin", "punit", "bhupender", "kuldeep", "nisha", "nitin", "kuldeep"];
// // function removeRep(arr){
// //     return [...new Set(arr)]
// // }   
// function removeRep(arr){
//     return arr.filter((value, index) => arr.indexOf(value) === index);
// }
// let arr2 = removeRep(arr);
// console.log(arr2);



// let arr = [2,4,76,8,2,0,2,4,1,6,85,3];

// function findSecondLargestAndSmallest(arr){
//     if(arr.length < 2){
//         console.log("Not Sufficient Elements");
//         return {secondLargest: null , secondSmallest: null};
//     }

//     let SortedArray = [...new Set(arr)].sort((a, b) => a-b);

//     if(SortedArray.length < 2){
//         console.log("Not Sufficient Elements");
//         return {secondLargest: null , secondSmallest: null};
//     }

//     const secondSmallest = SortedArray[1];
//     const secondLargest = SortedArray[SortedArray.length - 2];

//     return {secondSmallest , secondLargest};
// };

// let result = findSecondLargestAndSmallest(arr);
// console.log(result);



// const arr = [1,2,3,4,5]
// function rotateArray(arr, target){
//         let numbers = [...arr];
//         if(target<0 || target > arr.length -2){
//                 return "Enter a Valid Target";
//         }
//        let numbersAlignRight = numbers.splice(0, target + 1);
//        numbers = numbers.concat(numbersAlignRight);
//        return numbers;
// };
// let output = rotateArray(arr, 3);
// console.log(output);
// console.log(arr);



// let arr1 = [1,2,4,3];
// let arr2 = [5,6,8,7];
// function mergeArr(arr1, arr2){
//         let firstArr = [...arr1].sort((a,b) => a-b);
//         let secondArr = [...arr2].sort((a,b) => a-b);
//         return firstArr.concat(secondArr);
// };c
// let output = mergeArr(arr1, arr2);
// console.log(output);



// let library = {
//         os: "os",
//         dsa: "dsa",
//         addNewBook: function(){
//                 let bookName = prompt("Add book name : ","");
//                 if(bookName){
//                 this[bookName] = bookName;
//                 console.log(`${bookName} is added to your library`);
//                 }else{
//                         console.log(`${bookName} is not added to your library`);
//                 }
//         },
//         removeBook: function(name){
//                 if(name){
//                         delete this[name];
//                         console.log(`${name} was removed from the library`);
//                 }
//                 else{
//                         console.log(`${name} is not exist in the library`);
//                 }
//         },
//         searchBook: function(name){
//                 if(this[name]){
//                         console.log(this[name]);
//                 }else{
//                         console.log("Not found")
//                 }
//         }
// };

// library.addNewBook();
// console.log(library);

// library.removeBook('os');
// console.log(library);



// const students = [
//     { name: "Alice", age: 20, grade: 65 },
//     { name: "Bob", age: 22, grade: 45 },
//     { name: "Charlie", age: 19, grade: 55 },
//     { name: "Daisy", age: 21, grade: 30 },
//     { name: "Eve", age: 23, grade: 75 }
// ];

// function getPassingStudents(studentArray){
//     return  studentArray.filter(std => std.grade >= 50)
//     .map(std => std.name);
    
// };

// let output = getPassingStudents(students);
// console.log(output);



// const employees = [
//     { name: "John", department: "IT", salary: 50000 },
//     { name: "Alice", department: "HR", salary: 45000 },
//     { name: "Bob", department: "IT", salary: 60000 },
//     { name: "Diana", department: "Finance", salary: 70000 },
//     { name: "Eve", department: "HR", salary: 40000 },
//     { name: "Charlie", department: "Finance", salary: 65000 }
// ];

// function calculateTotalSalary(employeeArray, department){
//     return employeeArray.filter(employee => employee.department === department)
//     .reduce((res, curr) => res + curr.salary ,0);
// };

// let output = calculateTotalSalary(employees, "Finance");
// console.log(output);


