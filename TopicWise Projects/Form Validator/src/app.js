import { handleErrors, inputField } from "./errorHandler.js";


// Light/Dark Mode Toggle Button
document.querySelector('#mode-toggle').addEventListener('change', () => {
    document.documentElement.classList.toggle('dark');
});
const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', (e) => {
    console.log('Button Clicked')
})

// First Name Error Handling
let first_name = document.querySelector('#first-name');
let first_name_err = document.querySelector('#first-name-err');

first_name.addEventListener('input', (e) => {
    let inputValue = e.target.value.trim();
    let isDigit = inputValue.split('').some(char =>
        (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) && char !== ' ');

    handleErrors(first_name, first_name_err,
        [inputValue === '', 'First name is required.'],
        [isDigit, `First name cannot contain numbers or special characters.`])
})

// Last Name Error Handling
let last_name = document.querySelector('#last-name')
let last_name_err = document.querySelector('#last-name-err')

last_name.addEventListener('input', (e) => {
    let inputValue = e.target.value.trim();
    let isDigit = inputValue.split('').some(char =>
        (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) && char !== ' ');

    handleErrors(last_name, last_name_err,
        [inputValue === '', `Last name is required.`],
        [isDigit, `Last name cannot contain numbers or special characters`])
})

// Company Name Error Handling
let company_name = document.querySelector('#company')
let company_name_err = document.querySelector('#company-err')

company_name.addEventListener('input', (e) => {
    let inputValue = e.target.value.trim();

    handleErrors(company_name, company_name_err,
         [inputValue === '', `Company name is required.`])
})

// Phone Number Error Handling
let phone_number = document.querySelector("#phone")
let phone_number_err = document.querySelector("#phone-err")

phone_number.addEventListener('input', (e) => {
    let inputValue = e.target.value.trim();
    let isChar = inputValue.split('').some(char =>
        (!(char >= '0' && char <= '9')) && char !== ' ');

    handleErrors(phone_number, phone_number_err,
        [inputValue === '', `Phone number is required.`],
        [isChar, `Phone number should contain only numbers.`],
        [inputValue.length != 10, `Phone number must be 10 digits long.`])

})


let website_url = document.querySelector('#website');
let website_url_err = document.querySelector('#website-err');

website_url.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();

    let isValidUrl = inputValue.startsWith("http://") || inputValue.startsWith("https://");

    handleErrors(website_url, website_url_err,
        [inputValue === '', "Website URL is required."],
        [!isValidUrl, "Enter a valid website URL (e.g., https://example.com)."]
    )
});

let visitors = document.querySelector('#visitors');
let visitors_err = document.querySelector('#visitors-err');

visitors.addEventListener('input', (e) => {
    let inputValue = e.target.value.trim();
    handleErrors(visitors, visitors_err,
        [inputValue === '', "This field is required."]
    )
})

let e_mail = document.querySelector('#e-mail');
let e_mail_err = document.querySelector('#e-mail-err');

e_mail.addEventListener('input', (e) => {
    let inputValue = e.target.value.trim();

    let isEmailValid = inputValue.endsWith('@gmail.com') || inputValue.endsWith('@email.com')

    handleErrors(e_mail, e_mail_err,
        [inputValue === '', "Email address is required."],
        [!isEmailValid, "Enter a valid email address (e.g., user@example.com)."]
    )
})

let password = document.querySelector('#password');
let password_err = document.querySelector('#password-err');

password.addEventListener('input', (e) => {
    let inputValue = e.target.value.trim();

    let hasLetter = false;
    let hasNumber = false;

    for (let char of inputValue) {
        if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
            hasLetter = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }
    let isPassValid = hasLetter && hasNumber
    handleErrors(password, password_err,
        [inputValue === '', "Password is required."],
        [inputValue.length < 8, "Password must be at least 8 characters long."],
        [!isPassValid, "Password must contain at least one letter and one number."]
    )
})

let confirm_password = document.querySelector('#confirm-password');
let confirm_password_err = document.querySelector('#confirm-password-err');

confirm_password.addEventListener('blur', (e) => {
    let inputValue = e.target.value.trim();

    let isPassSame = inputValue === password.value
    handleErrors(confirm_password, confirm_password_err,
        [inputValue === '', "Please confirm your password."],
        [!isPassSame, "Passwords do not match."]
    )
})


