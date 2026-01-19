/*
function isPalindrome(str){
    str = str.toLowerCase();
    let Palindrome = str.split("").reverse().join("");
    return str == Palindrome && `${str} is a palindrome` ||
     `${str} is not a palindrome`
};

console.log(isPalindrome(`Nitin`))
*/

/*
function factorial(n){
    if(n == 1){
        return 1
    }
     return n * factorial(n-1);
};
console.log(factorial(5));
*/

/*
function findMax(arr){
    let maximum = arr[0]
    for(let i = 1; i< arr.length; i++){
        if(arr[i] > maximum){
            maximum = arr[i]
        }
    }
    return maximum;
    
}
console.log(findMax([5,3,2,6,8,9,8]));
*/

/*
function generateFibonacci(n){
    if(n == 1){
        return 0
    }else if(n == 2){
        return 1
    }
    return generateFibonacci(n-1) + generateFibonacci(n-2);
}
console.log(generateFibonacci(10));

function generateFibo(n){
    let fib = [0,1];

    if(n <= 0) return [];
    if(n == 1) return [0];

    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib
}
console.log(generateFibo(10));
*/

/*
function capitalize(str){
    str = str.split(" ")
    str = str.map(word => {
        return word = word[0].toUpperCase() + word.slice(1);
    });
    str = str.join(" ")
    return str
}
console.log(capitalize(`hello world this is a program that can capitalize the first word of each word in a sentence`));
*/