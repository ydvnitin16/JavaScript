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
