// Find the longest substring without repeating characters

let str = "abcabcbbdfghjklmn";

function longestSubStrWithoutRepeatingChar(str) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }

        set.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return str.split("").splice(left, maxLength).join("");
}

console.log(longestSubStrWithoutRepeatingChar(str));

// Implement a memoize() utility function

function memoizeFn(fn) {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(...args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        const value = fn(...args);
        cache.set(key, value);
        return value;
    };
}

const sum = (a, b) => a + b;

const memoizedSum = memoizeFn(sum);

memoizedSum(1, 2);
memoizedSum(3, 5);
memoizedSum(1, 2);
