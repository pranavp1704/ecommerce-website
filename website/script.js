// Handle newsletter form submission
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.querySelector('#newsletter .form');
  const emailInput = document.getElementById('email-address-input');
  const signupButton = document.querySelector('#newsletter button');
  
  if (newsletterForm && emailInput && signupButton) {
    // Focus on email input when form is clicked
    newsletterForm.addEventListener('click', function(e) {
      if (e.target !== emailInput) {
        emailInput.focus();
      }
    });
    
    // Handle form submission
    signupButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      
      if (validateEmail(email)) {
        alert('Thank you for subscribing with: ' + email);
        emailInput.value = ''; // Clear the input
        emailInput.focus(); // Refocus for next entry
      } else {
        alert('Please enter a valid email address');
        emailInput.focus();
        emailInput.select();
      }
    });
    
    // Allow Enter key to submit
    emailInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        signupButton.click();
      }
    });
  }
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});