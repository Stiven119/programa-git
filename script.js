/* script.js */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    this.reset(); // Limpiar el formulario
});

