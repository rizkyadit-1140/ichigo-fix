document.addEventListener('DOMContentLoaded', () => {
    // 1. Sekarang yang dicari adalah kotaknya, bukan tombolnya
    const semuaKartuProduk = document.querySelectorAll('.card-katalog-item');

    semuaKartuProduk.forEach(kartu => {
        kartu.addEventListener('click', function() {
            // 2. Ambil data dari kotak yang diklik
            const judul = this.getAttribute('data-judul');
            const harga = this.getAttribute('data-harga');
            const kode = this.getAttribute('data-kode');
            const gambar = this.getAttribute('data-gambar');
            const gambarSS = this.getAttribute('data-gambarss');
            const spek = this.getAttribute('data-spek');

            // 3. Simpan ke memori
            localStorage.setItem('simpan_judul', judul);
            localStorage.setItem('simpan_harga', harga);
            localStorage.setItem('simpan_kode', kode);
            localStorage.setItem('simpan_gambar', gambar);
            localStorage.setItem('simpan_gambar_ss', gambarSS);
            localStorage.setItem('simpan_spek', spek);

            // 4. Pindah halaman
            window.location.href = 'checkout-akun.html';
        });
    });
});