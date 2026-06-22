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

                // Prepare form data for Web3Forms
                const formData = new FormData();
                // IMPORTANT: Get your free access key from https://web3forms.com/ and replace 'YOUR_ACCESS_KEY_HERE'
                // All emails will be sent to the email address you use to sign up for Web3Forms (e.g. vivekrajput7594@gmail.com)
                formData.append("access_key", "6c664124-1961-4868-997a-e3cdf4ba7f3c");
                formData.append("name", nameInput ? nameInput.value : "");
                formData.append("email", emailInput ? emailInput.value : "");

                // If there is a project type select dropdown
                const projectTypeInput = contactForm.querySelector('select');
                if (projectTypeInput) {
                    formData.append("Project Type", projectTypeInput.value);
                }

                formData.append("message", messageInput ? messageInput.value : "");

                // Add a subject line for the email
                formData.append("subject", "New Contact Form Submission from " + (nameInput && nameInput.value ? nameInput.value : "Portfolio Website"));
                formData.append("from_name", "Portfolio Contact Form");

                // Send email using Web3Forms API
                fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                })
                    .then(async (response) => {
                        let json = await response.json();
                        if (response.status == 200) {
                            submitBtn.textContent = 'Message Sent!';
                            submitBtn.classList.remove('bg-primary');
                            submitBtn.classList.add('bg-green-600');

                            // Reset form
                            contactForm.reset();
                        } else {
                            console.log(response);
                            submitBtn.textContent = 'Error Sending';
                            submitBtn.classList.remove('bg-primary');
                            submitBtn.classList.add('bg-red-600');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        submitBtn.textContent = 'Something went wrong!';
                    })
                    .finally(() => {
                        setTimeout(() => {
                            submitBtn.textContent = originalText;
                            submitBtn.classList.add('bg-primary');
                            submitBtn.classList.remove('bg-green-600', 'bg-red-600');
                            submitBtn.disabled = false;
                        }, 3000);
                    });
            }
        }
    });
}

