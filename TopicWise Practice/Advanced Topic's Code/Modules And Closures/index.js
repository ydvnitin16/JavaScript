//re-exporting
export {test} from './hello.js'

//	export { default } from "./module.js"; to re-export default 
//	export * from "./module.js"; to re-export everything
//	export { name as userName } from "./module.js"; Re-export with renaming


//dynamic imports
function printName(name2){
    console.log(`Hey, How Are You ${name2}`)
}
let name2 = 'Nitin';
export{ printName, name2 }