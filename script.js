// Animação de entrada progressiva sem interferir nos links.
document.querySelectorAll('.links .link').forEach((link, index) => {
  link.style.setProperty('--i', String(index));
});
