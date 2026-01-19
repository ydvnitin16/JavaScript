let inputField = {
    'first-name': false,
    'last-name': false,
    'company': false,
    'phone': false,
    'website': false,
    'visitors': false,
    'e-mail': false,
    'password': false,
    'confirm-password': false,
}


function handleErrors(input, inputErr, ...conditions){
    for(let [condition, errorStatement] of conditions){
        if(condition){
                    input.style.border = '1px solid red'
                    inputErr.innerText = `${errorStatement}`
                    inputErr.classList.remove('hidden')
                    inputField[input.id] = false;
                    checkValidation()
                    return;
                }
    }
    input.style.border = '1px solid green'
        if (!inputErr.classList.contains('hidden')) {
            inputErr.classList.add('hidden')
        }
        inputField[input.id] = true;
        checkValidation()
}

function checkValidation(){
    console.log(inputField);
    let allValid = true;
    for(let key in inputField){
        if(inputField[key] === false){
            allValid = false
            break;
        }
    }
    document.querySelector('#submit').disabled = !allValid;
}

export { handleErrors, inputField };