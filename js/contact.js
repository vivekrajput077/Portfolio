// Contact Form Validation and Interaction
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');
        
        let isValid = true;
        
        // Simple client-side validation
        if (nameInput && !nameInput.value.trim()) {
            nameInput.classList.add('border-error');
            isValid = false;
        } else if (nameInput) {
            nameInput.classList.remove('border-error');
        }
        
        if (emailInput && (!emailInput.value.trim() || !emailInput.value.includes('@'))) {
            emailInput.classList.add('border-error');
            isValid = false;
        } else if (emailInput) {
            emailInput.classList.remove('border-error');
        }
        
        if (messageInput && !messageInput.value.trim()) {
            messageInput.classList.add('border-error');
            isValid = false;
        } else if (messageInput) {
            messageInput.classList.remove('border-error');
        }
        
        if (isValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate send success
                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.classList.remove('bg-primary');
                    submitBtn.classList.add('bg-green-600');
                    
                    // Reset form
                    contactForm.reset();
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.classList.add('bg-primary');
                        submitBtn.classList.remove('bg-green-600');
                        submitBtn.disabled = false;
                    }, 3000);
                }, 1500);
            }
        }
    });
}
