document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Thank you for your message!';
            formMessage.style.color = 'green';
            // Here you could add code to send the form data to a server
            form.reset();
        }
    });
});

