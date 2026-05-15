// Find the second largest number in an array without sorting

function secondLargeNum(arr) {
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const arr = [5, 5, 3, 5];

console.log(secondLargeNum(arr));
