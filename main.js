const locationSelect = document.getElementById("locationSelect");

document.querySelectorAll("[data-pref]").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!locationSelect) return;
    locationSelect.value = btn.dataset.pref;
  });
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

