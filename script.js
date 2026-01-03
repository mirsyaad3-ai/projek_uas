// MENU AKTIF OTOMATIS
const menuLinks = document.querySelectorAll("nav ul li a");
const currentPage = location.pathname.split("/").pop();

menuLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#00bcd4";
    link.style.fontWeight = "bold";
  }
});

// VALIDASI FORM CONTACT
function validateForm() {
  const name = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  if (name === "" || email === "" || pesan === "") {
    alert("Semua field wajib diisi!");
    return false;
  }

  alert("Pesan berhasil dikirim!");
  return true;
}
// MODAL FOTO KARYA
function openImage(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}
