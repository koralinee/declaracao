document.addEventListener("DOMContentLoaded", function() {
    const heartsContainer = document.getElementById('hearts-container');
    const heartCount = 20; // Número de corações voadores
  
    // Cria corações voadores
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('span');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
      heart.style.animationDelay = Math.random() * 3 + 's'; // Atraso de animação aleatório
      heartsContainer.appendChild(heart);
    }
  });
  function redirectToWhatsApp() {
    // Número de telefone e mensagem pré-definida
    var phoneNumber = "5511941695884";
    var message = "Olá, quero voltar te amo beijo linda ";

    // Monta o link do WhatsApp com o número de telefone e a mensagem
    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redireciona para o WhatsApp
    window.location.href = whatsappLink;
}
  