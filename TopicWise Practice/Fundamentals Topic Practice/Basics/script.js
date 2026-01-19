/*
let n = +prompt("Enter a number:", 5);
let result = 0;
for(let i=1; i<=n; i++){
    result +=i;
}
console.log(`Sum of all number from 1 to ${n} is : ${result}`);
*/

/*
// approach 1 
let n = +prompt("Enter a number:", 5);
let result = n%2;
console.log(`return 0 for even and 1 for odd\n ${result}`);
// approach 2 
// let n  = ;
// let result = (n%2)? `odd`: `even`;
// console.log(`${n} is ${result}`);
//approach 3
let n = 2;
console.log(n%2 && `odd`||`even`)
approach4
let n=1;
console.log([`even`,`odd`][n%2])
*/

/*
let height = 1.52;
let weight = 60;

// approach1
// let BMI = weight/(height*height);
// let categories = ['underweight', 'Normal', 'overweight', 'obese']
// let category = categories[
//     (BMI < 18.5) ? 0 : (BMI < 25) ? 1 : (BMI < 30) ? 2 : 3
// ]
// console.log(`your bmi is ${BMI} fall under ${category}`);

// approach2
let bmi = weight/(height*height);
let category = (
    (bmi<14.5 && `underweight`)||
    (bmi< 25 && `normal`)||
    (bmi< 30 && `overweight`)||
    (`obese`)
);
console.log(`your bmi is ${bmi} fall under ${category}`);
*/

/*
approach1
let n = 4567;
let reverse = Number(n.toString().split("").reverse().join(""))
console.log(reverse);

approach2
let n = 4567;
let reverse = 0;
while(n>0){
    reverse = reverse * 10 + (n % 10)
    n = Math.floor(n/10);
}
console.log(reverse)
*/

/*
let f = 98;
let celsius = ((f - 32) * 5/9)
console.log(`${f} farhen.. is : ${celsius.toFixed(2)} celsius`);
*/