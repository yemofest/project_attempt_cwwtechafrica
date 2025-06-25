function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

   
}
