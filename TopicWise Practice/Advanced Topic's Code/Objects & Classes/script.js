//Objects And Classes



// prototype in object

// let arr = ['apple', 'mango']
// const employee = {
//     calcTax() {
//         return "tax rate is 10"
//     }
// };
// console.log(employee.calcTax())


// const KaranArjun = {
//     salary: 50000,
// }

// each js object has its own prototypes
// we can add new more prototypes
// KaranArjun.__proto__ = employee;
// console.log(KaranArjun.calcTax())

// if a function is added in a prototypes and objects both then, object's function is used


// Classes
// classes are the blueprints one class can be used to create multiple objects without creating manually

// class helloBye {
//     constructor(name, status){
//         this.name = name;
//         this.status = status;
//     }
//     greet(){
//         if(this.status === 'enter'){
//         console.log(`Hello ${this.name}, How are you!`)
//         }else{
//             console.log(`Bye ${this.name}, See you again!`)
//         }
//     }
// }

// let say1 = new helloBye('Nitin', 'enter')
// let say2 = new helloBye('tamanna', 'enter')
// let say3 = new helloBye('manjeet', 'exit')
// let say4 = new helloBye('Kuldeep', 'enter')
// let say5 = new helloBye('Punit', 'exit')
// let say6 = new helloBye('Nisha', 'exit')
// let say7 = new helloBye('paryas', 'enter')
// say1.greet()
// say2.greet()
// say3.greet()
// say4.greet()
// say5.greet()
// say6.greet()
// say7.greet()

//Classes make code structured and reusable.
//They help in creating multiple objects easily.


// class ToyotaCar{
//     constructor(brand, mileage){
//         this.brandName = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("Start the car");
//     }
//     stop(){
//         console.log("Stop the car");
//     }
// }

// let fortuner = new ToyotaCar("fortuner",30);
// console.log(fortuner)
// let LandCruiser = new ToyotaCar('Land Cruiser', 20);
// console.log(LandCruiser)



// inheritance in JS parent to child

// extend is used to extend a new class with existing class
// class parent {
//     hello() {
//         console.log("hello");
//     }
// }
// // super is used to access the constructor
// class child extends parent {
//     constructor(name) {
//         super()
//         this.name = name;
//     }
// }
// let obj = new child('Nitin');
// console.log(obj)

//super() is used to call and execute the parent class constructor inside the child class.
//After executing the parent constructor, it returns control back to the child constructor.
// super is the the parent constructor's access(can be used to send parameters and get methods)

// class person {
//     constructor() {
//         console.log("enter parent constructor");
//         this.species = "homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }

// class engineer extends person{
//     constructor(branch){
//         console.log("enter child constructor");
//          super(); // to invoke parent class constructor
//         this.branch = branch;
//         console.log("exit parent constructor");
//     }
//     work() {
//         super.eat();
//         console.log("solve problems build something");
//     }
// }
// let nitinObj = new engineer("chemical engineer");
// console.log(nitinObj)


//practice question

// class user {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("View data");
//     }
// };
// class authority extends user{
//     constructor(name, email, desgination){
//         super(name,email);
//         this.desgination = desgination;
//     }
// }

// let student1 = new user("Nitin","ydvnitin@");
// let student2 = new user("paryas","rwtparyas@");

// let teacher = new authority("Rajesh", "RajeshSingh@","incharge");
// let BioHead = new authority("neha","nehaTyagi@","HOD");
// console.log(student1)
// console.log(student2)
// console.log(teacher)
// console.log(BioHead)
