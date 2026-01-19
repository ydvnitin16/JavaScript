import{sayHi} from './hello.js'
sayHi('Abhishek')


// we can't reassign, redeclare the imported variable
//we can modify imported array or object 


// we can import everything with as 
import * as classDetails from './hello.js'
console.log(classDetails.standard);
console.log(classDetails.section);
console.log(classDetails.rollNo);

//we can import anything with as to change variableName
import{user as name} from './hello.js'

sayHi(name)


// default need not be imported with the same name as exported because default is only one per file(Means Renaming)
// default needs no curly braces
import salary2 from './hello.js'
console.log(salary2())


//re-exported function is imported
import {printName, test} from './index.js'
test()

//dynamic imports

async function printNameFunction(){
    // let {printName} = await import('./index.js');
    // let {name2} = await import('./index.js');
    let {printName, name2} = await import('./index.js')
    printName(name2);

}
printNameFunction()

//to get the default export we have to export everthing {returned object} than access default key
//let obj = await import('./say.js'); import everthing
// let say = obj.default; get default




// Closures

function createGreeting(name){
    return function(greeting = 'hello'){
        return ` ${greeting} ${name}!`
    }
}

const greetJohn = createGreeting("John");
console.log(greetJohn('Bye'))