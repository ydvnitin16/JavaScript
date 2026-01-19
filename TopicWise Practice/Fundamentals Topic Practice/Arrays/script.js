/*
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [3, 6, 8, 9, 0, 2, 12, 34];

const arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = [];
for (num of arr3) {
    arr4.includes(num) || arr4.push(num)
};
console.log(arr4)
*/

/*
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [3, 6, 8, 9, 0, 2, 12, 34];

const arr3 = arr1.concat(arr2);
console.log(arr3);
const arr4 = [];

for(num of arr3){
    let canPush = true
    for(check of arr4){
        if(num == check) canPush = false;
    }
    canPush && arr4.push(num)
}
console.log(arr4);
*/

/*
let arr = [5, 7, 8, 1, 2, 5, 6, 9, 11, 10, 15];


function checkSorted() {
    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i + 1] < arr[i])
        return false
    }
    return true

}
while(!checkSorted()){
    for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i + 1];
                    arr[i + 1] = arr[i];
                    arr[i] = temp
                }
                console.log(arr);
            }
}
console.log(arr);
*/

/*
let arr = [1,2,3,4,5,6,7]
function rotateArray(arr){
    let x = arr.splice(0,1);
    arr.push(...x)
    return arr 
}

function rotateArray(arr){
    arr.push(arr.shift())
    return arr
}
*/

/*
let arr = [1,2,3,4,5,6,7]
function rotateArray(arr){
    let first = arr[0];

    for(let i = 0; i< arr.length - 1; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length -1] = first
    return arr
}
console.log(rotateArray(arr));
*/

/*
let arr = [1,2,3,4,5,6,7,8,9,10];

function groupEvenOdd(arr){
    let evenArr = [];
    let oddArr = [];

    for(let i=0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            evenArr.push(arr[i])
        }else{
            oddArr.push(arr[i])
        }
    }
    return {evenArr, oddArr}
}
console.log(groupEvenOdd(arr));
*/

/*
let arr = [1,2,3,4,5,6,7,8,9,10];

function groupEvenOdd(arr){
    let evenArr = arr.filter(num => num % 2 == 0);
    let oddArr = arr.filter(num => num % 2 != 0);
    return {evenArr, oddArr}
}

console.log(groupEvenOdd(arr));
*/