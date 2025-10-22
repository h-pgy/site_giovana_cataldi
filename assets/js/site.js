// Aguarda o DOM carregar
document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
   * Smooth scroll para links internos
   * ----------------------------- */
  document.querySelectorAll("[data-scroll]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* -----------------------------
   * Sistema de modais
   * ----------------------------- */
  const openModal = (modal) => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    // aplica animação suave de fade in
    modal.querySelector("div").classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      modal.querySelector("div").classList.remove("scale-95", "opacity-0");
      modal.querySelector("div").classList.add("scale-100", "opacity-100", "transition-all", "duration-300");
    }, 10);
  };

  const closeModal = (modal) => {
    const content = modal.querySelector("div");
    content.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
      content.classList.remove("scale-95", "opacity-0");
    }, 200);
  };

  // Abrir modal
  document.querySelectorAll("[data-modal-target]").forEach(card => {
    card.addEventListener("click", () => {
      const modalId = card.getAttribute("data-modal-target");
      const modal = document.querySelector(modalId);
      if (modal) openModal(modal);
    });
  });

  // Fechar modal (botão “×”)
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", e => {
      const modal = e.target.closest(".fixed");
      if (modal) closeModal(modal);
    });
  });

  // Fechar modal clicando fora do conteúdo
  document.querySelectorAll(".fixed[id^='modal-']").forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target === modal) closeModal(modal);
    });
  });

});
