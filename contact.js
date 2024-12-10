document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email')
    const messageInput = document.getElementById('message')

    function emailValidation(email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-message')
        formGroup.classList.add('error')
        errorDisplay.textContent = message;
    }

    function clearError(input){
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-message')
        formGroup.classList.remove('error');
        errorDisplay.textContent = '';
    }

    function fieldValidation(input, validateFN, errorMessage){
        if(!validateFN(input.value.trim())){
            showError(input, errorMessage)
            return false;
        }
        clearError(input);
        return true
    }

    nameInput.addEventListener('input', () => {
        validateField(nameInput, value => value.length >=2, 'The name must be at least 2 characters long')
    });

    emailInput.addEventListener('input', () => {
        validateField(emailInput, emailValidation, 'Please enter a valid email')
    })

    messageInput.addEventListener('input', () => {
        validateField(messageInput, value => value.length >= 10, 'The message must be 5 characters long ') 
    })

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let validIs = true

        validIs = fieldValidation(nameInput, value => value.length >= 2, 'The name must be 2 characters long') && validIs;

        validIs = fieldValidation(emailInput,emailValidation, 'Please enter a valid email') && validIs;

        validIs = fieldValidation(messageInput, value => value.length >= 10, 'The message must be 10 characters long ') && validIs;

        if(validIs) {
            const messageGood = document.getElementById('formSuccess');
            messageGood.style.display = 'block'
            messageGood.textContent = 'The message was sent successfully'

            form.reset();

            setTimeout(() => {
                messageGood.style.display = 'none'
            }, 3000);
        };
    });

});