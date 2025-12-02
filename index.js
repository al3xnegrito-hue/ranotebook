// JS muy simple: menú móvil, scroll suave y año en el footer
window.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("is-open");
    });
  }

  // Scroll suave
  function smoothScrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        smoothScrollToId(targetId);

        if (navList && navList.classList.contains("is-open")) {
          navList.classList.remove("is-open");
        }
      }
    });
  });

  // Formulario (solo demo)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Formulario enviado (modo demo).\nMás adelante se puede conectar a WhatsApp, correo u otro canal real."
      );
      contactForm.reset();
    });
  }

  // Año en el footer
  const footerYear = document.getElementById("footerYear");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});
