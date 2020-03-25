const email = document.getElementById('email');
const btn = document.getElementById('btn');
const imgError = document.getElementById('error-img');
const form  = document.getElementsByTagName('form')[0];
const errorText = document.getElementById('error-text');

btn.addEventListener("click", function(event) {
    if(email.validity.valueMissing) {
        imgError.removeAttribute("hidden");
        errorText.textContent='Email is required';
    } else if(email.validity.typeMismatch) {
        imgError.removeAttribute("hidden");
        errorText.textContent='verify your email';
    }
})  

form.addEventListener('submit', function(event){
    if(!email.validity.valid) {
        imgError.removeAttribute("hidden");
        event.preventDefault();
    }

})