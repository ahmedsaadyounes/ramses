const params = new URLSearchParams(location.search);
const articleId = params.get("id") || articleData[0].id;
let currentLang = params.get("lang") || localStorage.getItem("ramsesLang") || "ar";
const article = articleData.find(a => a.id === articleId) || articleData[0];

function articleLink(id) {
  return `article.html?id=${encodeURIComponent(id)}&lang=${currentLang}`;
}

function renderArticle() {
  const t = article[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.getElementById("langToggle").textContent = currentLang === "ar" ? "EN" : "AR";
  document.getElementById("backHomeBtn").textContent = uiText[currentLang].backHome;
  document.getElementById("relatedTitle").textContent = uiText[currentLang].related;
  document.title = `رمسيس | ${t.title}`;

  document.getElementById("articleHero").innerHTML = `
    <div class="container article-hero-wrap">
      <div class="article-hero-media"><img src="${article.cover}" alt="${t.title}"></div>
      <div class="article-hero-card">
        <span class="eyebrow">${t.categoryLabel}</span>
        <h1>${t.title}</h1>
        <p>${t.excerpt}</p>
        <div class="article-meta-row">
          <span>${article.author}</span>
          <span>•</span>
          <span>${article.date}</span>
          <span>•</span>
          <span>${article.readTime} ${uiText[currentLang].minute}</span>
        </div>
      </div>
    </div>`;

  document.getElementById("articleBody").innerHTML = t.content.map(p => `<p>${p}</p>`).join("") + `
    <blockquote>رمسيس يقدّم المقالات بطريقة تحافظ على فخامة الشكل وسهولة القراءة.</blockquote>`;

  const related = articleData.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);
  document.getElementById("relatedList").innerHTML = related.map(a => `
    <a class="related-item" href="${articleLink(a.id)}">
      <img src="${a.cover}" alt="${a[currentLang].title}">
      <div>
        <strong>${a[currentLang].title}</strong>
        <p>${a[currentLang].excerpt}</p>
      </div>
    </a>`).join("");
}

renderArticle();
document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("ramsesLang", currentLang);
  renderArticle();
});
