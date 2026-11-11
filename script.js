/* =========================================================
   EDITE AQUI — todo o conteúdo da página vem deste objeto.
   Para adicionar um botão, copie uma linha { ... } e troque.
   Para criar um grupo novo, copie um bloco { title, links }.

   Ícones disponíveis: delivery, handshake, bike, store,
   whatsapp, instagram, tiktok, facebook, linkedin, youtube,
   rocket, code, site, email, calendar, briefcase, download,
   star, cart, play, map
   ========================================================= */
const CONFIG = {
  title: "Links Oficiais",

  sections: [
    {
      title: "Arara Delivery",
      links: [
        { title: "Peça pelo Arara Delivery", subtitle: "Para clientes - Faça seu pedido agora",       url: "https://araradelivery.com/client/categories",  icon: "delivery" },
        { title: "Seja parceiro Arara",    subtitle: "Cadastre sua loja agora",              url: "https://araradelivery.com/seja-parceiro", icon: "handshake" },
        { title: "Seja entregador Arara",  subtitle: "Cadastre-se e comece a entregar",       url: "https://araradelivery.com/entregadores",  icon: "bike" },
      ],
    },
    {
      title: "WWM Soluções Digitais",
      links: [
        { title: "Conheça a WWM", subtitle: "Sites, sistemas e soluções digitais", url: "https://wwmdigital.github.io/", icon: "rocket" },
      ],
    },
    {
      title: "Fale comigo",
      links: [
        { title: "WhatsApp",  subtitle: "Atendimento direto", url: "https://wa.me/5592984361882?text=Ol%C3%A1!%20Vim%20pelo%20link%20da%20bio.",      icon: "whatsapp" },
        { title: "Instagram", subtitle: "@eumarcosst",        url: "https://www.instagram.com/eumarcosst/", icon: "instagram" },
        { title: "Portfólio profissional", subtitle: "Contrate-me", url: "https://marcossouzatavares.github.io/portfolio-online/", icon: "briefcase" },
      ],
    },
    {
      title: "Redes do Arara",
      links: [
        { title: "Instagram", subtitle: "@araradelivery", url: "https://www.instagram.com/araradelivery/", icon: "instagram" },
        { title: "YouTube",   subtitle: "@AraraDelivery", url: "https://www.youtube.com/@AraraDelivery",            icon: "youtube" },
        { title: "LinkedIn",  subtitle: "Arara Delivery", url: "https://www.linkedin.com/company/arara-delivery/", icon: "linkedin" },
      ],
    },
  ],
};

/* =========================================================
   Daqui para baixo não precisa mexer
   ========================================================= */
const ICONS = {
  delivery: '<path d="M6 8h12l1 13H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/>',
  bike: '<circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>',
  store: '<path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6"/>',
  whatsapp: '<path d="M3 21l1.65-4.8A8.5 8.5 0 1 1 7.9 19.5z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 1c-1-.4-2.6-2-3-3l1-1-1-2z"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r=".6" fill="currentColor"/>',
  tiktok: { fill: true, d: '<path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>' },
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  youtube: '<path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  site: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
  email: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 2h3l2.7 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/>',
  map: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
};

const svg = (name) => {
  const icon = ICONS[name] || ICONS.site;
  const isFill = typeof icon === "object";
  return `<svg viewBox="0 0 24 24"${isFill ? ' class="fill"' : ""} aria-hidden="true">${isFill ? icon.d : icon}</svg>`;
};

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const external = (url) => /^https?:/i.test(url) ? ' target="_blank" rel="noopener noreferrer"' : "";

let order = 1; // 0 é o título
const delay = () => `style="--i:${order++}"`;

function renderSections(sections) {
  document.getElementById("sections").innerHTML = sections
    .map((sec) => `
      <section class="section" aria-label="${esc(sec.title)}">
        <h2 class="section-title reveal" ${delay()}>${esc(sec.title)}</h2>
        <div class="links">
          ${sec.links.map((l) => `
            <a class="link${l.featured ? " featured" : ""} reveal" ${delay()} href="${esc(l.url)}"${external(l.url)}>
              <span class="link-icon">${svg(l.icon)}</span>
              <span class="link-text">
                <span class="link-title">${esc(l.title)}${l.badge ? `<span class="badge">${esc(l.badge)}</span>` : ""}</span>
                ${l.subtitle ? `<span class="link-sub">${esc(l.subtitle)}</span>` : ""}
              </span>
            </a>`).join("")}
        </div>
      </section>`)
    .join("");
}

// Luz que acompanha o cursor/dedo nos botões
function spotlight() {
  document.addEventListener("pointermove", (e) => {
    const link = e.target.closest(".link");
    if (!link) return;
    const r = link.getBoundingClientRect();
    link.style.setProperty("--x", `${e.clientX - r.left}px`);
    link.style.setProperty("--y", `${e.clientY - r.top}px`);
  });
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove("show"), 2200);
}

function setupShare() {
  document.getElementById("share").addEventListener("click", async () => {
    const data = { title: document.title, url: location.href };
    try {
      if (navigator.share) return await navigator.share(data);
      await navigator.clipboard.writeText(location.href);
      toast("Link copiado! ✨");
    } catch (err) {
      if (err.name !== "AbortError") toast("Não foi possível compartilhar");
    }
  });
}

document.getElementById("title").textContent = CONFIG.title;
document.title = CONFIG.title;
renderSections(CONFIG.sections);
document.getElementById("copy").textContent = `© ${new Date().getFullYear()} ${CONFIG.title}`;
spotlight();
setupShare();
