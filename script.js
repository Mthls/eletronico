document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("feedback").innerText = "Mensagem enviada com sucesso!";
});
