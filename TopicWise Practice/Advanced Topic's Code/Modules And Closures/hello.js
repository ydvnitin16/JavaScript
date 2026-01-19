export function sayHi(user) {
    console.log(`Hello ${user}`)
}

export let user = 'Nitin'


let standard = 12;
let section = 'B'
let rollNo = 12

export { standard, section, rollNo };
//export can also exported with as 


// export default function salary(){
//     return 23000
// }
function salary() {
    return 23000
}
export {salary as default}


//only one default can be exist per file
//always needed default to export as default


//when to use default exports
//There is only one main thing in the module (e.g., a function, class, or object).
//You want to allow flexibility in naming the import.

//when to use named exports
//The module contains multiple exports (functions, constants, etc.).
//You want auto-completion in IDEs (named imports help with this).


//re-exporting

export function test(){
    console.log(`Test Successfull`);
}

