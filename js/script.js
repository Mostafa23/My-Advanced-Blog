// Event "Back to Top" button
document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; // Get position
  const backToTopButton = document.getElementById('back-to-top'); 

  // Show greater than 10 pixels
  if (scrollPosition > 10) {
    backToTopButton.style.display = 'block';
  } else {
    // Hide less than or equal to 10 pixels
    backToTopButton.style.display = 'none';
  }
});

// Event button is clicked
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0, // top page
    behavior: 'smooth' // smooth animation
  });
});

// Event form submission 
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  const formData = new FormData(this); // Collect form data
  const object = {}; // Create an empty object to store form data

  // Populate the object with form data
  formData.forEach((value, key) => {
    object[key] = value;
  });

  const json = JSON.stringify(object); // Convert to JSON

  // Send the form data to Formspree
  fetch('https://formspree.io/f/mnnardwv', {
      method: 'POST', // HTTP method for sending data
      headers: {
          'Content-Type': 'application/json' // Set content type to JSON
      },
      body: json // Send the JSON data in the request body
  }).then(response => {
      if (response.ok) {
          alert('Thank you for your message!'); // Show a success message
          this.reset(); // Reset the form fields
      } else {
          alert('There was a problem with your submission.'); // Show an error message
      }
  }).catch(error => {
      alert('There was an error sending your message.'); // Show an error message if there is a network or server issue
  });
});
