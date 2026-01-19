/*
function countCharacterFrequency(str){
    const frequency = {}

    for(const char of str){
        if(frequency[char]){
            frequency[char]++;
        }else{
            frequency[char] = 1
        }
    }
    return frequency;
};

console.log(countCharacterFrequency('Hello'));
*/


// its a shallow copy -- not for nested objects
// const x = {
//     hel: ';dkfs',
//     f: {
//         h: 'css',
//         j: 'javascript'
//     }
// }
// function clone(obj){
//     return {...obj}
// };

// const y = clone(x);
// console.log(y)
// console.log(x)
// // y.f = 'html'
// console.log(y)
// console.log(x)

//its a deep copy
// function clone(obj){
//     return JSON.parse(JSON.stringify(obj))
// };

//its a deep copy -- more robust
// function clone(obj){
//     if(obj === null || typeof obj !== 'object'){
//         return obj
//     }

    // const copy = Array.isArray(obj)? [] : {};

//     for(const key in obj){
//         copy[key] = clone(obj[key])
//     }
//     return copy;
// };


/*
function mergeObjects(obj1, obj2){
    const merged = {...obj1};

    for(let key in obj2){
        if(key in merged){
            merged[key] = Array.isArray(merged[key])? 
            [...merged[key], obj2[key]]:
            [merged[key], obj2[key]];
        }else{
            merged[key] = obj2[key];
        }
    }
    return merged;
}
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };

const result = mergeObjects(obj1, obj2);
console.log(result);
*/

/*
function filter(obj){
    return obj.filter(key => key.marks>= 50)
    .map(item => ({...item}))
};
*/

/*
function getSortedKeys(obj){
    return Object.keys(obj).sort()
}
console.log(getSortedKeys({name: 'nitin', class: 12}));
*/