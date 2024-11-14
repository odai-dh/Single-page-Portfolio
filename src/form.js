document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // Show confirmation message
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.style.display = 'block';
        form.reset(); // Clear the form fields
  
        // Hide the confirmation message after 5 seconds
        setTimeout(() => {
          confirmationMessage.style.display = 'none';
        }, 3000); // 5000 milliseconds = 5 seconds
      } else {
        alert("Oops! There was a problem with your submission.");
      }
    }).catch(error => {
      alert("Oops! There was a problem with your submission.");
      console.error(error);
    });
  });