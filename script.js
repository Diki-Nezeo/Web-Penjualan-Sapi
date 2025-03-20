document.addEventListener("DOMContentLoaded", function () {
  const sapiContainer = document.querySelector(".sapi-container");
  const sapiSelect = document.getElementById("sapi");

  // Ambil data sapi dari file JSON
  fetch("sapi.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((sapi) => {
        // Tambahkan ke daftar sapi
        let sapiElement = document.createElement("div");
        sapiElement.classList.add("sapi-item");
        sapiElement.innerHTML = `
                    <img src="${sapi.gambar}" alt="${sapi.nama}">
                    <h3>${sapi.nama}</h3>
                    <p>Harga: Rp ${sapi.harga}</p>
                `;
        sapiContainer.appendChild(sapiElement);

        // Tambahkan ke dropdown pembelian
        let option = document.createElement("option");
        option.value = sapi.nama;
        option.textContent = sapi.nama;
        sapiSelect.appendChild(option);
      });
    });

  // Tangani pembelian
  document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let sapi = sapiSelect.value;
    alert("Terima kasih, ${nama}! Anda telah membeli ${sapi}.");
  });
});
