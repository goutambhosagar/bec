/*let logInbtn = document.querySelector('.lbtn');
let registrationbtn = document.querySelector('.rbtn');
let Title = document.querySelector('.title');
let rForm = document.querySelector('.rform');
let lForm = document.querySelector('.lform');

logInbtn.addEventListener('click', () => {
    rForm.style.display = 'none';  // Hide the registration form
    lForm.style.display = 'block'; // Show the login form
    Title.innerHTML = 'Login';  // Update the title to 'Login'
});

registrationbtn.addEventListener('click', () => {
    lForm.style.display = 'none';  // Hide the login form
    rForm.style.display = 'block'; // Show the registration form
    Title.innerHTML = 'Registration';  // Update the title to 'Registration'
});*/

let logInbtn = document.querySelector('.lbtn');
let registrationbtn = document.querySelector('.rbtn');
let Title = document.querySelector('.title');
let rForm = document.querySelector('.rform');
let lForm = document.querySelector('.lform');

logInbtn.addEventListener('click', () => {
    rForm.style.display = 'none';  // Hide the registration form
    lForm.style.display = 'block'; // Show the login form
    Title.innerHTML = 'Login';  // Update the title to 'Login'
});

registrationbtn.addEventListener('click', () => {
    lForm.style.display = 'none';  // Hide the login form
    rForm.style.display = 'block'; // Show the registration form
    Title.innerHTML = 'Registration';  // Update the title to 'Registration'
    
    registrationbtn.classList.add('');  // Make the registration button blue
    logInbtn.classList.remove('');  // Remove blue color from login button
});
