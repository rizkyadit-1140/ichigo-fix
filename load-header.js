document.addEventListener("DOMContentLoaded", () => {
    // Cari elemen wadah kosong tadi
    const tempatHeader = document.getElementById("tempat-header");
    
    if (tempatHeader) {
        // Tarik isi dari file header.html
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                // Masukkan isinya ke dalam wadah kosong
                tempatHeader.innerHTML = data;
            })
            .catch(error => console.error("Gagal memuat header:", error));
    }
});