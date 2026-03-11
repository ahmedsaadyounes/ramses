const siteData = (() => {
  const saved = JSON.parse(localStorage.getItem("ramsesSiteData") || "{}");
  return { ...siteDefaults, ...saved };
})();

let currentLang = localStorage.getItem("ramsesLang") || "ar";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("ramsesLang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.getElementById("langToggle").textContent = lang === "ar" ? "EN" : "AR";
  document.getElementById("brandName").textContent = siteData.siteName;
  document.getElementById("brandTag").textContent = siteData.siteTag;
  document.getElementById("footerText").textContent = uiText[lang].footer;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (uiText[lang][key]) el.textContent = uiText[lang][key];
  });
  document.getElementById("searchInput").placeholder = uiText[lang].searchPlaceholder;
  renderHome();
}

function articleLink(id) {
  return `article.html?id=${encodeURIComponent(id)}&lang=${currentLang}`;
}

function renderHero() {
  const hero = articleData.find(a => a.featured) || articleData[0];
  const t = hero[currentLang];
  document.getElementById("heroArticle").innerHTML = `
    <img src="${hero.cover}" alt="${t.title}">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="eyebrow">${uiText[currentLang].featured}</span>
      <h1>${t.title}</h1>
      <p>${t.excerpt}</p>
      <div class="hero-meta">
        <span>${t.categoryLabel}</span>
        <span>•</span>
        <span>${hero.readTime} ${uiText[currentLang].minute}</span>
      </div>
      <div class="hero-actions"><a class="hero-read-btn" href="${articleLink(hero.id)}">${uiText[currentLang].readMore}</a></div>
    </div>`;

  const sideArticles = articleData.filter(a => a.id !== hero.id).slice(0, 3);
  document.getElementById("heroSide").innerHTML = sideArticles.map(a => `
    <a class="mini-card" href="${articleLink(a.id)}">
      <div>
        <span class="mini-tag">${a[currentLang].categoryLabel}</span>
        <h3>${a[currentLang].title}</h3>
      </div>
      <div class="mini-arrow">↗</div>
    </a>`).join("");
}

function renderTicker() {
  document.getElementById("tickerTrack").innerHTML = articleData.map(a => `<span>${a[currentLang].title}</span>`).join("");
}

function renderLatest(filtered = articleData) {
  const grid = document.getElementById("latestGrid");
  grid.innerHTML = filtered.map(a => `
    <article class="article-card reveal visible">
      <img src="${a.cover}" alt="${a[currentLang].title}">
      <div class="card-body">
        <span class="card-tag">${a[currentLang].categoryLabel}</span>
        <h3>${a[currentLang].title}</h3>
        <p>${a[currentLang].excerpt}</p>
        <a class="read-link" href="${articleLink(a.id)}">${uiText[currentLang].readMore} ←</a>
      </div>
    </article>`).join("") || `<div class="empty-state">No results</div>`;
}

function renderSections() {
  const categories = ["history", "politics", "technology"];
  document.getElementById("newsSections").innerHTML = categories.map(cat => {
    const items = articleData.filter(a => a.category === cat).slice(0, 2);
    const label = uiText[currentLang][cat];
    return `
      <div class="news-section-card">
        <div class="news-section-head">
          <h3>${label}</h3>
          <span>${items.length} articles</span>
        </div>
        ${items.map(item => `
          <a class="news-item" href="${articleLink(item.id)}">
            <img src="${item.cover}" alt="${item[currentLang].title}">
            <div>
              <strong>${item[currentLang].title}</strong>
              <p>${item[currentLang].excerpt}</p>
            </div>
          </a>`).join("")}
      </div>`;
  }).join("");
}

function renderHome(filtered) {
  renderHero();
  renderTicker();
  renderLatest(filtered || articleData);
  renderSections();
}

function applyTheme() {
  document.documentElement.style.setProperty("--gold", siteData.primaryColor);
  document.documentElement.style.setProperty("--bg", siteData.darkColor);
  document.documentElement.style.setProperty("--surface", siteData.surfaceColor);
}

applyTheme();
setLanguage(currentLang);

document.getElementById("langToggle").addEventListener("click", () => {
  setLanguage(currentLang === "ar" ? "en" : "ar");
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = articleData.filter(a => {
    const t = a[currentLang];
    const hay = [t.title, t.excerpt, t.categoryLabel].join(" ").toLowerCase();
    return hay.includes(q);
  });
  renderLatest(filtered);
});
