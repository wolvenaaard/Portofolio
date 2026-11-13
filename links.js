/* ============================================================
   DAFTAR KONTAK & LINK
   Ganti bagian url dan handle dengan punyamu sendiri.
   - Instagram : https://instagram.com/USERNAME_KAMU
   - GitHub    : https://github.com/USERNAME_KAMU
   - itch.io   : https://USERNAME_KAMU.itch.io
   - Email     : mailto:emailkamu@gmail.com
   - WhatsApp  : https://wa.me/628123456789  (pakai 62, tanpa 0 di depan, tanpa + atau spasi)
   Hapus satu baris kalau tidak mau dipakai.
   ============================================================ */
window.LINKS = [
  { key: "IG",  name: "Instagram", handle: "@wolvenaard",            url: "https://www.instagram.com/wolvenaard/" },
  { key: "GH",  name: "GitHub",    handle: "wolvenaaard",             url: "https://github.com/wolvenaaard" },
  { key: "IT",  name: "itch.io",   handle: "alergitidur.itch.io",     url: "https://alergituru.itch.io/" },
  { key: "@",   name: "Email",     handle: "cahyonurrohman46@gmail.com",       url: "mailto:cahyonurrohman46@gmail.com" },
  { key: "WA",  name: "WhatsApp",  handle: "+62-897-235-9500",          url: "https://wa.me/628972359500" }
];

/* mode "cards" = kartu besar (halaman kontak), mode "pills" = tombol kecil (halaman depan) */
window.renderLinks = function (container, mode) {
  container.innerHTML = "";
  window.LINKS.forEach(function (l) {
    var a = document.createElement("a");
    a.href = l.url;
    var external = l.url.indexOf("mailto:") !== 0;
    if (external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }

    if (mode === "cards") {
      a.className = "link-card";
      a.innerHTML =
        '<span class="ico"></span>' +
        '<span class="txt"><strong></strong><small></small></span>' +
        '<span class="go">↗</span>';
      a.querySelector(".ico").textContent = l.key;
      a.querySelector("strong").textContent = l.name;
      a.querySelector("small").textContent = l.handle;
    } else {
      a.className = "pill";
      a.innerHTML = '<span class="k"></span><span class="n"></span>';
      a.querySelector(".k").textContent = l.key;
      a.querySelector(".n").textContent = l.name;
    }
    container.appendChild(a);
  });
};
