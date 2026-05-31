// Implement a LRU Cache class (get + set in O(1)) using JS Map

class LRU {
    constructor() {
        this.cache = new Map();
    }

    get(id) {
        // Use key for finding index**
        const value = this.cache.get(id);
        let cacheArr = Array.from(this.cache);
        const index = cacheArr.findIndex((a) => a[0] === id);
        const data = cacheArr[index];

        // fill the index
        if (index === 0) {
            console.log("Not running");
        } else {
            console.log("Running");
        }
        for (let i = index - 1; i >= 0; i--) {
            cacheArr[i + 1] = cacheArr[i];
            console.log(cacheArr);
        }

        cacheArr[0] = data;

        if (cacheArr.length >= 5) {
            cacheArr.length = 5;
            this.cache = new Map(cacheArr);
        } else {
            this.cache = new Map(cacheArr);
        }
        return value;
    }

    set(id, value) {
        if (!this.cache.has(id)) {
            let cacheArr = Array.from(this.cache);

            for (let i = cacheArr.length - 1; i >= 0; i--) {
                cacheArr[i + 1] = cacheArr[i];
            }
            cacheArr[0] = [id, value];

            if (cacheArr.length >= 5) {
                cacheArr.length = 5;
                console.log(cacheArr);
                this.cache = new Map(cacheArr);
            } else {
                this.cache = new Map(cacheArr);
            }
        }
    }
}

// const cache = new LRU();
// cache.set(1, { name: "JOHN", age: 22 });
// cache.set(2, { name: "NITIN", age: 20 });
// cache.set(3, { name: "PAUL", age: 25 });
// cache.set(4, { name: "PATRICK", age: 26 });
// cache.set(5, { name: "RAOSHAB", age: 24 });
// cache.set(6, { name: "TAMANNA", age: 24 });
// cache.get(2);
// cache.set(7, { name: "JAY", age: 25 });
// cache.set(8, { name: "VINAY", age: 28 });
// console.log(cache);

// Write a function to solve: given an array, find two numbers that sum to a target (no brute force)Write a function to solve: given an array, find two numbers that sum to a target (no brute force)

function targetSumHash(arr, target) {
    const mappedArr = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (mappedArr.has(arr[i])) {
            return { first: mappedArr.get(arr[i]), second: arr[i] };
        }
        mappedArr.set(target - arr[i], arr[i]);
    }
    return null;
}

// console.log(targetSumHash(arr, 0));

// Implement your own version of bind() — myBind() on Function.prototype

Function.prototype.myBind = function (obj, ...args){
    const originalFn = this;
    return () => {
        originalFn.call(obj, ...args);
    };
};


function greeting(greeting) {
    console.log(greeting + " " + this.name);
}
const user = { name: "Nitin", age: 20 };

const hiName = greeting.myBind(user, "Hi");

hiName()