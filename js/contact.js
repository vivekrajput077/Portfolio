// Contact Form Submission (Formspree)
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitButton = document.getElementById("submit-button");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // 1. Basic validation
        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const messageInput = form.querySelector('textarea[name="message"]');
        
        let isValid = true;
        
        if (nameInput && !nameInput.value.trim()) { nameInput.classList.add('border-error'); isValid = false; }
        else if (nameInput) { nameInput.classList.remove('border-error'); }
        
        if (emailInput && (!emailInput.value.trim() || !emailInput.value.includes('@'))) { emailInput.classList.add('border-error'); isValid = false; }
        else if (emailInput) { emailInput.classList.remove('border-error'); }
        
        if (messageInput && !messageInput.value.trim()) { messageInput.classList.add('border-error'); isValid = false; }
        else if (messageInput) { messageInput.classList.remove('border-error'); }

        if (!isValid) return;

        // 2. Change button text to show it's loading
        const originalButtonText = submitButton.innerText;
        submitButton.innerText = "Sending...";
        submitButton.disabled = true;

        // 3. Gather form data
        const data = new FormData(form);

        try {
            // 4. Send the data to Formspree
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success!
                submitButton.innerText = 'Message Sent!';
                submitButton.classList.remove('bg-primary');
                submitButton.classList.add('bg-green-600');
                
                formStatus.innerText = "Thanks for reaching out! I'll get back to you soon.";
                formStatus.classList.remove("hidden", "text-error");
                formStatus.classList.add("block", "text-primary");
                
                form.reset();

                setTimeout(() => {
                    submitButton.innerText = originalButtonText;
                    submitButton.classList.add('bg-primary');
                    submitButton.classList.remove('bg-green-600');
                    formStatus.classList.add("hidden");
                    formStatus.classList.remove("block");
                }, 4000);

            } else {
                // Error from Formspree
                formStatus.innerText = "Oops! There was a problem sending your message. Did you add your Formspree ID?";
                formStatus.classList.remove("hidden", "text-primary");
                formStatus.classList.add("block", "text-error");
            }
        } catch (error) {
            // Network Error
            formStatus.innerText = "Oops! There was a network problem.";
            formStatus.classList.remove("hidden", "text-primary");
            formStatus.classList.add("block", "text-error");
        } finally {
            if (submitButton.innerText !== 'Message Sent!') {
                submitButton.innerText = originalButtonText;
            }
            submitButton.disabled = false;
        }
    });
}
