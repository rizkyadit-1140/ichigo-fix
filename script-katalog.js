function sembunyikanAkunTerjual() {
    const semuaKartuProduk = document.querySelectorAll('.card-katalog-item');
    const akunTerjual = JSON.parse(localStorage.getItem('akun_terjual')) || [];

    semuaKartuProduk.forEach(kartu => {
        const kode = kartu.getAttribute('data-kode');
        if (akunTerjual.includes(kode)) {
            kartu.remove(); // Langsung hapus dari layar
        }
    });
}

// Jalankan saat halaman pertama kali dibuka
document.addEventListener('DOMContentLoaded', () => {
    sembunyikanAkunTerjual();

    const semuaKartuProduk = document.querySelectorAll('.card-katalog-item');
    semuaKartuProduk.forEach(kartu => {
        kartu.addEventListener('click', function() {
            const kode = this.getAttribute('data-kode');
            const akunTerjual = JSON.parse(localStorage.getItem('akun_terjual')) || [];

            // Cek sekali lagi sebelum pindah ke checkout
            if (akunTerjual.includes(kode)) {
                alert('⚠️ Maaf, akun ini baru saja terjual!');
                this.remove();
                return;
            }

            localStorage.setItem('simpan_judul', this.getAttribute('data-judul'));
            localStorage.setItem('simpan_harga', this.getAttribute('data-harga'));
            localStorage.setItem('simpan_kode', kode);
            localStorage.setItem('simpan_gambar', this.getAttribute('data-gambar'));
            localStorage.setItem('simpan_gambar_ss', this.getAttribute('data-gambarss'));
            localStorage.setItem('simpan_spek', this.getAttribute('data-spek'));

            window.location.href = 'checkout-akun.html';
        });
    });
});

// TANGKAP TOMBOL BACK MOUSE (bfcache)
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        sembunyikanAkunTerjual();
    }
});