/*
  EKE SOFTWARE — KATALOG AYARLARI
  Her ürünün adını, açıklamasını, kategorisini ve indirme bağlantısını aşağıdan değiştir.
  İndirme bağlantısı bilinmiyorsa "#" bırak; yanlış bağlantı yayınlama.
*/
const PRODUCTS = [
  { name: "Discord", category: "Discord", icon: "◉", color: "violet", description: "Topluluklar, arkadaşlar ve sesli sohbet için iletişim uygulaması.", tag: "İletişim", url: "#" },
  { name: "Oyun Araçları", category: "Oyun", icon: "▣", color: "cyan", description: "Oyun deneyimini destekleyen araçları bu alanda listele.", tag: "Oyun", url: "#" },
  { name: "Medya Araçları", category: "Medya", icon: "▷", color: "orange", description: "Medya dosyaları ve içeriklerle çalışmak için araçlar.", tag: "Medya", url: "#" },
  { name: "Sistem Araçları", category: "Araçlar", icon: "⌘", color: "green", description: "Bilgisayarını düzenlemek ve günlük işlerini kolaylaştırmak için.", tag: "Sistem", url: "#" },
  { name: "Yardımcı Uygulamalar", category: "Araçlar", icon: "✦", color: "pink", description: "Küçük ama kullanışlı uygulamalarını burada tanıt.", tag: "Araç", url: "#" },
  { name: "Yeni Yazılım", category: "Oyun", icon: "↗", color: "blue", description: "Bu kartı yeni bir yazılımın adı ve açıklamasıyla değiştir.", tag: "Yeni", url: "#" }
];

const grid = document.querySelector("#softwareGrid");
const searchInput = document.querySelector("#searchInput");
const count = document.querySelector("#catalogCount");
const emptyState = document.querySelector("#emptyState");
const categoryFilters = document.querySelector("#categoryFilters");
const clearFilters = document.querySelector("#clearFilters");
let selectedCategory = "Tümü";

function safeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
  const filtered = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "Tümü" || product.category === selectedCategory;
    const haystack = `${product.name} ${product.category} ${product.description} ${product.tag}`.toLocaleLowerCase("tr-TR");
    return matchesCategory && haystack.includes(query);
  });

  count.textContent = `${filtered.length} araç`;
  emptyState.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(product => {
    const href = product.url && product.url !== "#" ? product.url : "#";
    const linkLabel = href === "#" ? "Bağlantı ekle" : "İndir / İncele";
    return `
      <article class="software-card">
        <div class="card-top">
          <span class="app-icon ${safeText(product.color)}">${safeText(product.icon)}</span>
          <span class="card-category">${safeText(product.category)}</span>
        </div>
        <h3>${safeText(product.name)}</h3>
        <p>${safeText(product.description)}</p>
        <div class="card-footer">
          <span class="card-tag">${safeText(product.tag)}</span>
          <a class="download-link" href="${safeText(href)}" ${href !== "#" ? 'target="_blank" rel="noopener noreferrer"' : 'aria-label="Bu karta henüz indirme bağlantısı eklenmedi"'}>${linkLabel} <span>↗</span></a>
        </div>
      </article>`;
  }).join("");
}

categoryFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  categoryFilters.querySelectorAll(".category-chip").forEach(chip => {
    const active = chip === button;
    chip.classList.toggle("selected", active);
    chip.setAttribute("aria-pressed", String(active));
  });
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);
clearFilters.addEventListener("click", () => {
  searchInput.value = "";
  selectedCategory = "Tümü";
  categoryFilters.querySelectorAll(".category-chip").forEach(chip => {
    const active = chip.dataset.category === "Tümü";
    chip.classList.toggle("selected", active);
    chip.setAttribute("aria-pressed", String(active));
  });
  renderProducts();
});

const mobileMenu = document.querySelector("#mobileMenu");
const nav = document.querySelector(".desktop-nav");
mobileMenu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  mobileMenu.setAttribute("aria-expanded", String(open));
  mobileMenu.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  mobileMenu.setAttribute("aria-expanded", "false");
  mobileMenu.textContent = "☰";
}));

document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
renderProducts();
