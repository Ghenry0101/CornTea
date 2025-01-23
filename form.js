function sendMessage() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const product = document.getElementById("product").value;
  const jumlah_product = document.getElementById("jumlah_product").value;
  const pesan = document.getElementById("pesan").value;

  const url =
    "https://api.whatsapp.com/send?phone=6285760032131&text=Halo%20admin!%0ASaya%20" +
    name +
    "%0ANomor%20hp%20saya%3A%20" +
    phone +
    "%0ASaya%20memesan%20%3A%20" +
    product +
    "%0ATotal%3A%20" +
    jumlah_product +
    "%0A%0APesan%3A%0A" +
    pesan +
    "";

  window.open(url);
}
