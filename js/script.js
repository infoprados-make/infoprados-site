function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}
