// class car {
//     constructor(brand, model, speed){
//         this.brand = brand;
//         this.model = model;
//         this.speed = speed;
//     }
//     accelerate(amount){
//         this.speed += amount
//         console.log(`Your ${this.brand} car speed is accelerated by ${amount} now car is at ${this.speed}KMPH`)
//     }
//     brake(amount){
//         this.speed -= amount
//         if(this.speed < 0){
//             this.speed = 0
//             console.log(`Your Car is Already Stopped`)
//             return;
//         }
//         console.log(`Your ${this.brand} Car speed Is Decreased By ${amount}KMPH Now car is at ${this.speed}`)
//     }
//     showSpeed(){
//         console.log(`Your ${this.brand} car speed is ${this.speed}KMPH`)
//     }
// }

// let Thar = new car('Mahindra', '2024', 160)

// let Fortuner = new car('Toyota', '2022', 180)
// let Range_Rover = new car('Land Rover', 240)
// let G_Wagon = new car('Mercedes', '2025', 240)

// console.log(Thar)
// console.log(Fortuner)
// console.log(Range_Rover)
// console.log(G_Wagon)

// Thar.accelerate(50)
// Thar.brake(210)




// class Library {
//     constructor(){
//         this.books = []
//     }

//     add(title, author){
//         this.books.push({title, author})
//         console.log(`${title} book is added to the library`)
//     }

//     remove(title){
//         // length is initialed to check weather the work done or not
//         let initialisedLength = this.books.length;
//         this.books = this.books.filter(book => title.toLowerCase() !== book.title.toLowerCase() )
//         if(this.books.length < initialisedLength){
//             console.log(`${title} book is removed from the library`)
//         }else{
//             console.log(`${title} book is not in the library`)
//         }
//     }

//     search(title){
//         let foundBook = this.books.filter(book => title.toLowerCase() === this.books.title.toLowerCase());
//         if(foundBook.length > 0){
//             console.log(`Your ${title} book is founded: `, foundBook)
//         }else{
//             console.log(`Your ${title} book is Not founded!`)
//         }
//     }
// };

// let myLibrary = new Library();

// myLibrary.add("Harry Potter", "J.K. Rowling");
// myLibrary.add("The Alchemist", "Paulo Coelho");
// myLibrary.add("The Hobbit", "J.R.R. Tolkien");
// myLibrary.add("Atomic Habits", "James Clear");

// console.log(myLibrary)

// myLibrary.remove('the hobbit')
// myLibrary.remove('harry Potter')

// console.log(myLibrary)




// class BankAccount {
//     constructor(name, balance = 0) {
//         this.name = name;
//         this.balance = balance;
//         console.log(`Your New Bank Account Is Opened Successfully By The Name Of: ${this.name}! First Deposit Amount is ${this.balance}.`)
//     }

//     deposit(amount) {
//         this.balance += amount
//         console.log(`${amount} Ruppees is Deposited to Your Bank Acccount`)
//     }

//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.log(`Your Account Doesn't Have Suffiecient Balance`)
//         } else {
//             this.balance -= amount;
//             console.log(`${amount} Amount Ruppees Withdraw From Your Bank Account`)
//         }
//     }

//     currentBalance() {
//         console.log(`Your Current Balance in Your Bank Account is: ${this.balance}`)
//     }
// }


// let user1 = new BankAccount("Nitin", 500);
// user1.deposit(200);
// user1.withdraw(100);
// user1.currentBalance();
// user1.withdraw(1000);





// class Product {
//     constructor(name, price, category){
//         this.name = name;
//         this.price = price;
//         this.category = category;
//     }
// }


// class Electronics extends Product {
//     constructor(name, price, category, brand, warranty){
//         super(name, price, category);
//         this.brand = brand;
//         this.warranty = warranty;
//     }
// }

// class Clothing extends Product {
//     constructor(name, price, category, size, material){
//         super(name, price, category);
//         this.size = size;
//         this.material = material
//     }
// }

// const phone = new Electronics("iPhone 15", 100000, "Electronics", "Apple", "2 Years");
// const shirt = new Clothing("T-Shirt", 1500, "Clothing", "L", "Cotton");

// console.log(phone);
// console.log(shirt);