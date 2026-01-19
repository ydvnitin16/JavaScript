// function advanceOperations(operand1, operator, operand2) {
//    const solutions = {
//     '^': Math.pow(operand1, operand2),
//     'sq': Math.sqrt(operand1),
//     '!': [...Array(5).keys()].map(i => i+1).reduce((acc, curr) => acc * curr ,1)
//    }
//    return solutions[operator]
// }
// export {advanceOperations}



// let products = []

// let addProduct = (name, price) => {
//    products.push({name, price})
//    return `Product Added Successfully!`
// }

// let listProduct = () => products

// export { addProduct, listProduct }



let tasks = [];

let addTask = (taskName) => {
    tasks.push(taskName)
    return `Task added successfully!`;
}

let removeTask = (taskName) => {
    let index = tasks.findIndex(task => task === taskName)
    if(index == -1){
        return `${taskName} not found`
    }
    tasks.splice(index, 1)
    return `${taskName} Removed Successfully!`
}

let displayTasks = () => tasks;

export { addTask, removeTask, displayTasks }