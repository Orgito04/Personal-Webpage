document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const responseElement = document.getElementById('form-response');
  
  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData))
    });
    
    const result = await response.json();
    
    responseElement.style.display = 'block';
    responseElement.textContent = result.message;
    responseElement.style.color = result.success ? 'green' : 'red';
    
    if (result.success) {
      form.reset();
      setTimeout(() => {
        responseElement.style.display = 'none';
      }, 5000);
    }
  } catch (error) {
    console.error('Error:', error);
    responseElement.style.display = 'block';
    responseElement.textContent = 'Failed to send message. Please try again.';
    responseElement.style.color = 'red';
  }
});