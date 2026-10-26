
const links = document.querySelectorAll(".links .link");

links.forEach((link, index) => {
  // Animação de entrada progressiva
  link.style.setProperty("--i", String(index));

  // Ativa o efeito ao pressionar o botão
  const press = () => {
    link.classList.add("is-pressed");
  };

  // Remove o efeito ao soltar o botão
  const release = () => {
    link.classList.remove("is-pressed");
  };

  // Eventos para celular e computador
  link.addEventListener("pointerdown", press);
  link.addEventListener("pointerup", release);
  link.addEventListener("pointercancel", release);
  link.addEventListener("pointerleave", release);
  link.addEventListener("blur", release);
});

