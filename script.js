// Botão "Sim" leva para outra página
document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = "sucesso.html"; // Página para onde será redirecionado
  });
  
  // Botão "Não" foge do clique
  document.getElementById("noButton").addEventListener("mouseover", function() {
    const button = document.getElementById("noButton");
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  });
  