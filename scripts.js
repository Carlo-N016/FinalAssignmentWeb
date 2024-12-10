
//Form Validation
function formValidate(){
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid= true;
        clearErrors;

        const name = document.getElementById('name');
        if(name.ariaValueMax.trim().length < 2){
            showError(name, 'The name must be at least 2 characters');
            isValid = false
        }

        const email = document.getElementById('email');
        if(!email.ariaValueMax.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            showError(email, 'Please enter a valid email')
            isValid = false
        }

        const message  = document.getElementById('message');
        if(!message.ariaValueMax.trim().length < 10) {
            showError(message, 'Your message must be at least 10 characters long');
            isValid = false
        }

        if(isValid){
            alert('The form has been submitted successfully!');
            form.reset();
        }

    });
}

function showError(input,message){
    const formGroup = input.parentElement;
    input.classList.add('error');
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    formGroup.appendChild(error);
}

function clearErrors(){
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(el => el.remove());
}


document.addEventListener('DOMContentLoaded' , function(){
    formValidate();
})