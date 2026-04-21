const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const name = contactForm.elements['name'].value;
  const email = contactForm.elements['email'].value;
  const message = contactForm.elements['message'].value;

  // Clear form fields
  contactForm.reset();

  // Display success message
  alert(`Thank you, ${name}! Your message has been sent.`);
});