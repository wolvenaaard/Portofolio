/* ============================================================
   DAFTAR SERTIFIKAT
   1. Taruh foto sertifikatmu di folder "sertifikat/" (di sebelah index.html)
   2. Sesuaikan nama file (src), judul, dan penyelenggara di bawah ini
   3. Tambah / hapus baris sesuka hati. 3 pertama tampil di halaman depan.
   ============================================================ */
window.CERTIFICATES = [
  { src: "sertifikat/sertifikat-1.jpg", title: "IGDX Bootcamp 2024",              issuer: "Kominfo & Asosiasi Game Indonesia (AGI)" },
  { src: "sertifikat/sertifikat-2.jpg", title: "Global Game Jam 2025 Yogyakarta", issuer: "Global Game Jam" },
  { src: "sertifikat/sertifikat-3.jpg", title: "Gimersia Creator Camp 2025",      issuer: "Gimersia" }
];

window.renderCerts = function (container, list) {
  container.innerHTML = "";
  list.forEach(function (c) {
    var el = document.createElement("figure");
    el.className = "cert";

    var box = document.createElement("div");
    box.className = "img";
    var img = new Image();
    img.alt = "Sertifikat " + c.title;
    img.loading = "lazy";
    img.src = c.src;
    img.onerror = function () {
      box.innerHTML = '<div class="ph">Foto belum ada.<br>Taruh file di<br><b>' + c.src + "</b></div>";
      el.dataset.missing = "1";
    };
    box.appendChild(img);

    var cap = document.createElement("figcaption");
    cap.className = "cap";
    cap.innerHTML = "<strong></strong><span></span>";
    cap.children[0].textContent = c.title;
    cap.children[1].textContent = c.issuer;

    el.appendChild(box);
    el.appendChild(cap);
    el.addEventListener("click", function () {
      if (el.dataset.missing) return;
      var lb = document.getElementById("lightbox");
      if (!lb) return;
      lb.querySelector("img").src = c.src;
      lb.querySelector("p").textContent = c.title + " · " + c.issuer;
      lb.classList.add("open");
    });
    container.appendChild(el);
  });
};
