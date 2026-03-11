const defaultData = {
  siteName: "رمسيس",
  siteTag: "مجلة رقمية للتاريخ والسياسة والتكنولوجيا",
  heroCategory: "ملف خاص",
  heroTitle: "حين تصنع الإمبراطوريات سرديتها: كيف يفسر التاريخ تحولات القوة الحديثة؟",
  heroDesc: "من مصر القديمة إلى عالم الذكاء الاصطناعي، يقدّم رمسيس قراءة عميقة تربط التاريخ بالسياسة والتكنولوجيا بلغة صحفية احترافية.",
  heroImage: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1600&q=80",
  mini1: "خرائط النفوذ في البحر المتوسط عبر العصور",
  mini2: "كيف تؤثر السرديات الإعلامية في القرار السياسي؟",
  mini3: "الذكاء الاصطناعي بين السباق الجيوسياسي والابتكار",
  primaryColor: "#b08a47",
  darkColor: "#0b1020",
  surfaceColor: "#f4efe7"
};

const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_history: "التاريخ",
    nav_politics: "السياسة",
    nav_tech: "التكنولوجيا",
    nav_analysis: "تحليلات",
    nav_newsletter: "النشرة",
    meta_editorial: "افتتاحية رمسيس",
    meta_read: "قراءة 8 دقائق",
    cat_history: "تاريخ",
    cat_politics: "سياسة",
    cat_tech: "تكنولوجيا",
    ticker_label: "عناوين اليوم",
    sec_history_title: "التاريخ",
    sec_history_desc: "قصص وتحليلات تربط الماضي بالحاضر وتكشف كيف يتشكل النفوذ عبر الزمن.",
    sec_politics_title: "السياسة",
    sec_politics_desc: "مقالات تحليلية جادة تشرح التحولات الدولية، القوة الناعمة، وإدارة الخطاب العام.",
    sec_tech_title: "التكنولوجيا",
    sec_tech_desc: "نغطي التقنية كقوة ثقافية وسياسية واقتصادية، لا كمنتج استهلاكي فقط.",
    insights_kicker: "تحليلات رمسيس",
    insights_title: "غرفة التحرير",
    insights_desc: "واجهة مصممة لتشعر وكأنك داخل مجلة دولية حديثة بهوية عربية قوية.",
    stat_categories: "أقسام رئيسية",
    stat_langs: "لغتان جاهزتان",
    stat_front: "واجهة أمامية قابلة للتطوير",
    stat_expand: "قابلية توسع لاحقة",
    newsletter_kicker: "ابقَ قريبًا من المشهد",
    newsletter_title: "النشرة البريدية لرمسيس",
    newsletter_desc: "اشترك لتصلك الافتتاحيات والتحليلات الجديدة فور إطلاقها.",
    newsletter_btn: "اشترك",
    newsletter_placeholder: "أدخل بريدك الإلكتروني",
    footer_text: "مجلة عربية حديثة تلتقي فيها الذاكرة بالتقنية والسياسة بالتحليل.",
    footer_admin: "لوحة التحكم"
  },
  en: {
    nav_home: "Home",
    nav_history: "History",
    nav_politics: "Politics",
    nav_tech: "Technology",
    nav_analysis: "Analysis",
    nav_newsletter: "Newsletter",
    meta_editorial: "Ramses Editorial",
    meta_read: "8 min read",
    cat_history: "History",
    cat_politics: "Politics",
    cat_tech: "Technology",
    ticker_label: "Today Headlines",
    sec_history_title: "History",
    sec_history_desc: "Stories and analysis connecting the past to the present with depth and clarity.",
    sec_politics_title: "Politics",
    sec_politics_desc: "Serious editorial coverage explaining global shifts, soft power, and public narratives.",
    sec_tech_title: "Technology",
    sec_tech_desc: "We cover technology as a cultural, political, and economic force — not only as a product.",
    insights_kicker: "Ramses Insights",
    insights_title: "Inside the Newsroom",
    insights_desc: "A premium bilingual editorial interface with a strong Arab identity and global quality.",
    stat_categories: "Core sections",
    stat_langs: "Ready languages",
    stat_front: "Expandable front-end",
    stat_expand: "Future scale",
    newsletter_kicker: "Stay close to the story",
    newsletter_title: "Ramses Newsletter",
    newsletter_desc: "Subscribe to receive new editorials and deep analysis as soon as they are published.",
    newsletter_btn: "Subscribe",
    newsletter_placeholder: "Enter your email",
    footer_text: "A modern Arab magazine where memory meets technology and politics meets analysis.",
    footer_admin: "Admin Dashboard"
  }
};

function getSiteData() {
  const saved = localStorage.getItem("ramsesSiteData");
  return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
}

function applySiteData() {
  const data = getSiteData();
  document.documentElement.style.setProperty("--gold", data.primaryColor);
  document.documentElement.style.setProperty("--bg", data.darkColor);
  document.documentElement.style.setProperty("--surface", data.surfaceColor);
  const map = {
    brandName: data.siteName,
    brandTag: data.siteTag,
    heroCategory: data.heroCategory,
    heroTitle: data.heroTitle,
    heroDesc: data.heroDesc,
  };
  Object.entries(map).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
  const heroImage = document.getElementById("heroImage");
  if (heroImage) heroImage.src = data.heroImage;

  const miniCards = ["mini1", "mini2", "mini3"];
  miniCards.forEach((id, index) => {
    const el = document.querySelector(`#${id} h3`);
    if (el) el.textContent = data[`mini${index + 1}`];
  });
}

function setLanguage(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("ramsesLang", lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = lang === "ar" ? "EN" : "AR";
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

applySiteData();
setLanguage(localStorage.getItem("ramsesLang") || "ar");
initReveal();

document.getElementById("langToggle")?.addEventListener("click", () => {
  const current = localStorage.getItem("ramsesLang") || "ar";
  setLanguage(current === "ar" ? "en" : "ar");
});
