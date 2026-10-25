(() => {
  const cfg = window.ARGOS_CONFIG || {};
  const setText = (key, value) => {
    document.querySelectorAll(`[data-config="${key}"]`).forEach(el => {
      if (value !== undefined && value !== null) {
        if (key === "headline") el.innerHTML = value; // Permite <br> y <em> solo para este texto de configuración.
        else el.textContent = value;
      }
    });
  };
  Object.entries(cfg).forEach(([key, value]) => {
    if (typeof value === "string" && !["heroImage","aboutImage","whatsapp"].includes(key)) setText(key, value);
  });
  const hero = document.querySelector(".hero-image");
  const about = document.querySelector(".about-photo");
  if (hero && cfg.heroImage) hero.style.backgroundImage = `url("${cfg.heroImage}")`;
  if (about && cfg.aboutImage) about.style.backgroundImage = `url("${cfg.aboutImage}")`;

  const wa = String(cfg.whatsapp || "").replace(/\D/g, "");
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    link.href = wa ? `https://wa.me/${wa}?text=${encodeURIComponent("Hola, me gustaría recibir información sobre vuestros servicios.")}` : "#contacto";
  });
  document.querySelectorAll("[data-phone-link]").forEach(link => {
    link.href = cfg.phoneDisplay ? `tel:${String(cfg.phoneDisplay).replace(/[^\d+]/g, "")}` : "#contacto";
  });
  document.querySelectorAll("[data-email-link]").forEach(link => {
    link.href = cfg.email ? `mailto:${cfg.email}` : "#contacto";
  });

  const serviceGrid = document.querySelector("#service-grid");
  if (serviceGrid && Array.isArray(cfg.services)) {
    serviceGrid.innerHTML = cfg.services.map((s, i) => `
      <article class="service-card">
        <div class="service-card-top"><span class="service-icon" aria-hidden="true">${s.icon || "◇"}</span><span class="service-number">${s.number || String(i+1).padStart(2,"0")}</span></div>
        <h3>${escapeHtml(s.title || "Servicio")}</h3><p>${escapeHtml(s.description || "")}</p>
        <a href="${wa ? `https://wa.me/${wa}?text=${encodeURIComponent("Hola, quiero consultar sobre: " + (s.title || "vuestros servicios"))}` : "#contacto"}" target="${wa ? "_blank" : "_self"}" rel="noopener">${escapeHtml(s.linkText || "Consultar")} <span aria-hidden="true">↗</span></a>
      </article>`).join("");
  }
  const benefitList = document.querySelector("#benefit-list");
  if (benefitList && Array.isArray(cfg.benefits)) {
    benefitList.innerHTML = cfg.benefits.map(item => `<li>${escapeHtml(item)}</li>`).join("");
  }
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const method = String(data.get("method") || "WhatsApp");
    const message = String(data.get("message") || "").trim();
    if (!name || !message) {
      status.textContent = "Completa el nombre y el mensaje para continuar.";
      return;
    }
    if (!wa) {
      status.textContent = "Configura el número de WhatsApp en config.js antes de publicar el formulario.";
      return;
    }
    const text = `Hola, soy ${name}. Prefiero que me contactéis por ${method}.\\n\\nMi consulta: ${message}`;
    status.textContent = "Se abrirá WhatsApp para que revises el mensaje antes de enviarlo.";
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }));
  }
  document.querySelector("#year").textContent = new Date().getFullYear();
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  }
})();