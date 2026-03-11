const siteData = (() => {
  const saved = JSON.parse(localStorage.getItem("ramsesSiteData") || "{}");
  return { ...siteDefaults, ...saved };
})();

let currentLang = localStorage.getItem("ramsesLang") || "ar";
let currentTheme = localStorage.getItem("ramsesTheme") || "light";

function articleLink(id) {
  return `article.html?id=${encodeURIComponent(id)}&lang=${currentLang}`;
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  document.documentElement.style.setProperty("--gold", siteData.primaryColor);
  document.documentElement.style.setProperty("--bg", siteData.darkColor);
  document.documentElement.style.setProperty("--surface", siteData.surfaceColor);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = currentTheme === "dark" ? "☾" : "☀";
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15 });
  items.forEach((item) => observer.observe(item));
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("ramsesLang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const text = uiText[lang];
  document.getElementById("langToggle").textContent = lang === "ar" ? "EN" : "AR";
  document.getElementById("brandName").textContent = siteData.siteName;
  document.getElementById("brandTag").textContent = siteData.siteTag;
  document.getElementById("footerText").textContent = text.footer;
  document.getElementById("searchTitle").textContent = lang === "ar" ? "ابحث داخل رمسيس" : "Search inside Ramses";
  document.getElementById("latestHeading").textContent = text.latestHeading;
  document.getElementById("latestDesc").textContent = text.latestDesc;
  document.getElementById("sectionsHeading").textContent = text.sectionsHeading;
  document.getElementById("sectionsDesc").textContent = text.sectionsDesc;
  document.getElementById("aboutTitle").textContent = siteData.aboutTitle;
  document.getElementById("aboutText").textContent = siteData.aboutText;
  document.getElementById("aboutPoint1").textContent = text.aboutPoint1;
  document.getElementById("aboutPoint2").textContent = text.aboutPoint2;
  document.getElementById("aboutPoint3").textContent = text.aboutPoint3;
  document.getElementById("aboutCardTitle").textContent = text.aboutCardTitle;
  document.getElementById("aboutCardText").textContent = text.aboutCardText;
  document.getElementById("newsletterTitle").textContent = siteData.newsletterTitle;
  document.getElementById("newsletterText").textContent = siteData.newsletterText;
  document.getElementById("newsletterBtn").textContent = text.newsletterBtn;
  document.getElementById("newsletterInput").placeholder = text.newsletterPlaceholder;
  document.getElementById("newsletterNote").textContent = text.newsletterNote;

  const topSearch = document.getElementById("topSearchInput");
  const mobileSearch = document.getElementById("searchInputMobile");
  if (topSearch) topSearch.placeholder = text.topSearchPlaceholder;
  if (mobileSearch) mobileSearch.placeholder = text.searchPlaceholder;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (text[key]) el.textContent = text[key];
  });

  renderHome();
  renderSocialLinks();
}

function getHeroArticle() {
  const hero = articleData.find((a) => a.featured) || articleData[0];
  const content = hero[currentLang];
  return {
    ...hero,
    displayCategory: siteData.heroCategory || uiText[currentLang].featured,
    displayTitle: siteData.heroTitle || content.title,
    displayExcerpt: siteData.heroDesc || content.excerpt,
    displayCover: siteData.heroImage || hero.cover
  };
}

function renderHero() {
  const hero = getHeroArticle();
  const content = hero[currentLang];
  document.getElementById("heroArticle").innerHTML = `
    <img src="${hero.displayCover}" alt="${hero.displayTitle}">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="eyebrow">${hero.displayCategory}</span>
      <h1>${hero.displayTitle}</h1>
      <p>${hero.displayExcerpt}</p>
      <div class="hero-meta">
        <span>${content.categoryLabel}</span>
        <span>•</span>
        <span>${hero.readTime} ${uiText[currentLang].minute}</span>
        <span>•</span>
        <span>${hero.date}</span>
      </div>
      <div class="hero-actions"><a class="hero-read-btn" href="${articleLink(hero.id)}">${uiText[currentLang].readMore}</a></div>
    </div>`;

  const sideArticles = articleData.filter((a) => a.id !== hero.id).slice(0, 3);
  document.getElementById("heroSide").innerHTML = sideArticles.map((a, i) => `
    <a class="mini-card reveal visible" href="${articleLink(a.id)}" style="animation-delay:${0.12 * i}s">
      <div>
        <span class="mini-tag">${a[currentLang].categoryLabel}</span>
        <h3>${a[currentLang].title}</h3>
      </div>
      <div class="mini-arrow">↗</div>
    </a>`).join("");
}

function renderTicker() {
  const titles = [...articleData, ...articleData].map((a) => `<span>${a[currentLang].title}</span>`).join("");
  document.getElementById("tickerTrack").innerHTML = titles;
}

function renderLatest(filtered = articleData) {
  const grid = document.getElementById("latestGrid");
  grid.innerHTML = filtered.map((a, index) => `
    <article class="article-card reveal visible" style="animation-delay:${index * 0.05}s">
      <img src="${a.cover}" alt="${a[currentLang].title}">
      <div class="card-body">
        <span class="card-tag">${a[currentLang].categoryLabel}</span>
        <h3>${a[currentLang].title}</h3>
        <p>${a[currentLang].excerpt}</p>
        <div class="card-meta"><span>${a.author}</span><span>•</span><span>${a.readTime} ${uiText[currentLang].minute}</span></div>
        <a class="read-link" href="${articleLink(a.id)}">${uiText[currentLang].readMore}</a>
      </div>
    </article>`).join("") || `<div class="empty-state">${currentLang === "ar" ? "لا توجد نتائج" : "No results found"}</div>`;
}

function renderSections() {
  const categories = ["history", "politics", "technology"];
  document.getElementById("newsSections").innerHTML = categories.map((cat, index) => {
    const items = articleData.filter((a) => a.category === cat).slice(0, 2);
    const label = uiText[currentLang][cat];
    return `
      <div class="news-section-card reveal visible" style="animation-delay:${index * 0.06}s">
        <div class="news-section-head">
          <h3>${label}</h3>
          <span>${items.length} ${currentLang === "ar" ? "مقالات" : "articles"}</span>
        </div>
        ${items.map((item) => `
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

function renderSocialLinks() {
  const row = document.querySelector(".social-row");
  if (!row) return;
  const lines = (siteData.socialLinks || siteDefaults.socialLinks).split("\n").map((x) => x.trim()).filter(Boolean);
  row.innerHTML = lines.map((line) => `<a href="#" class="social-link">${line}</a>`).join("");
}

function renderHome(filtered) {
  renderHero();
  renderTicker();
  renderLatest(filtered || articleData);
  renderSections();
}

function bindSearch(input) {
  if (!input) return;
  input.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const filtered = articleData.filter((a) => {
      const t = a[currentLang];
      const hay = [t.title, t.excerpt, t.categoryLabel, a.author].join(" ").toLowerCase();
      return hay.includes(q);
    });
    renderLatest(filtered);
  });
}

window.handleNewsletterSubmit = function () {
  const value = document.getElementById("newsletterInput").value.trim();
  if (!value) {
    alert(currentLang === "ar" ? "اكتب البريد الإلكتروني أولاً." : "Please enter your email first.");
    return;
  }
  alert(currentLang === "ar" ? "تم تسجيل البريد في الواجهة التجريبية بنجاح." : "Your email was captured in the prototype successfully.");
  document.getElementById("newsletterInput").value = "";
};

applyTheme();
setLanguage(currentLang);
revealOnScroll();
renderSocialLinks();
bindSearch(document.getElementById("topSearchInput"));
bindSearch(document.getElementById("searchInputMobile"));

document.getElementById("langToggle").addEventListener("click", () => {
  setLanguage(currentLang === "ar" ? "en" : "ar");
});

document.getElementById("themeToggle").addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("ramsesTheme", currentTheme);
  applyTheme();
});
