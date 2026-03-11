const defaultData = { ...siteDefaults };
const fields = {
  siteName: "siteName",
  siteTag: "siteTag",
  heroCategoryInput: "heroCategory",
  heroTitleInput: "heroTitle",
  heroDescInput: "heroDesc",
  heroImageInput: "heroImage",
  primaryColor: "primaryColor",
  darkColor: "darkColor",
  surfaceColor: "surfaceColor",
  aboutTitleInput: "aboutTitle",
  aboutTextInput: "aboutText",
  newsletterTitleInput: "newsletterTitle",
  newsletterTextInput: "newsletterText",
  socialLinksInput: "socialLinks"
};

function getData() {
  const saved = localStorage.getItem("ramsesSiteData");
  return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
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
  document.getElementById("previewDesc").textContent = data.heroDesc || "وصف قصير";
}

function populateForm() {
  const data = getData();
  Object.entries(fields).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.value = data[key] || "";
  });
  renderPreview();
}

populateForm();
document.querySelectorAll("input, textarea").forEach((el) => el.addEventListener("input", renderPreview));

document.getElementById("saveData").addEventListener("click", () => {
  localStorage.setItem("ramsesSiteData", JSON.stringify(collectForm()));
  alert("تم حفظ التعديلات داخل المتصفح بنجاح.");
});

document.getElementById("resetData").addEventListener("click", () => {
  localStorage.removeItem("ramsesSiteData");
  populateForm();
  alert("تمت استعادة الإعدادات الافتراضية.");
});

document.querySelectorAll(".tab-btn").forEach((btn) => btn.addEventListener("click", () => {
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(btn.dataset.tab).classList.add("active");
}));
