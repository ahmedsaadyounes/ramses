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

const fields = {
  siteName: "siteName",
  siteTag: "siteTag",
  heroCategoryInput: "heroCategory",
  heroTitleInput: "heroTitle",
  heroDescInput: "heroDesc",
  heroImageInput: "heroImage",
  mini1Input: "mini1",
  mini2Input: "mini2",
  mini3Input: "mini3",
  primaryColor: "primaryColor",
  darkColor: "darkColor",
  surfaceColor: "surfaceColor"
};

function getData() {
  const saved = localStorage.getItem("ramsesSiteData");
  return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
}

function populateForm() {
  const data = getData();
  Object.entries(fields).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.value = data[key];
  });
  renderPreview();
}

function collectForm() {
  const data = {};
  Object.entries(fields).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) data[key] = el.value;
  });
  return data;
}

function renderPreview() {
  const data = collectForm();
  document.getElementById("previewCategory").textContent = data.heroCategory || "ملف خاص";
  document.getElementById("previewTitle").textContent = data.heroTitle || "عنوان المقال الرئيسي";
  document.getElementById("previewDesc").textContent = data.heroDesc || "وصف قصير للغلاف الرئيسي في الصفحة.";
}

populateForm();

document.querySelectorAll("input, textarea").forEach((el) => {
  el.addEventListener("input", renderPreview);
});

document.getElementById("saveData").addEventListener("click", () => {
  localStorage.setItem("ramsesSiteData", JSON.stringify(collectForm()));
  alert("تم حفظ التعديلات داخل المتصفح. افتح الصفحة الرئيسية لترى التغييرات.");
});

document.getElementById("resetData").addEventListener("click", () => {
  localStorage.removeItem("ramsesSiteData");
  populateForm();
  alert("تمت استعادة البيانات الافتراضية.");
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
