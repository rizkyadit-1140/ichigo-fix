document.addEventListener('DOMContentLoaded', () => {
    const wadahRiwayat = document.getElementById('daftar-riwayat');
    const userAktif = localStorage.getItem('ichigo_user_aktif');

    // 1. Jika belum login / sudah logout
    if (!userAktif) {
        wadahRiwayat.innerHTML = `
            <div style="text-align: center; padding: 50px; background-color: #1a0303; border-radius: 8px; border: 1px solid #5a1010;">
                <h3 style="color: #ffcc00; margin-bottom: 10px;">Anda belum masuk (Login)</h3>
                <p style="color: #ccc; margin-bottom: 15px;">Silakan Login terlebih dahulu untuk melihat riwayat pembelian akun Anda.</p>
            </div>
        `;
        return;
    }

    // 2. Ambil semua riwayat, lalu saring hanya milik akun yang sedang login
    const semuaRiwayat = JSON.parse(localStorage.getItem('data_riwayat')) || [];
    const riwayatUser = semuaRiwayat.filter(pesanan => pesanan.user === userAktif);

    if (riwayatUser.length === 0) {
        wadahRiwayat.innerHTML = `
            <div style="text-align: center; padding: 50px; background-color: #1a0303; border-radius: 8px;">
                <h3 style="color: #888;">Belum ada riwayat pesanan untuk akun ${userAktif}.</h3>
                <a href="ichigo_store_website.html" style="color: #ffcc00; text-decoration: none;">Cari Akun Idamanmu Sekarang!</a>
            </div>
        `;
        return;
    }

    wadahRiwayat.innerHTML = '';

    riwayatUser.reverse().forEach(pesanan => {
        const card = document.createElement('div');
        card.className = 'card-riwayat';
        
        const barisIdTujuan = pesanan.idTujuan 
            ? `<p><strong>ID Tujuan:</strong> ${pesanan.idTujuan}</p>` 
            : '';

        card.innerHTML = `
            <div class="info-riwayat">
                <h3>${pesanan.judul}</h3>
                <p><strong>Kode:</strong> ${pesanan.kode || '-'}</p>
                <p><strong>Jenis:</strong> ${pesanan.jenis || 'Akun'}</p>
                ${barisIdTujuan}
                <p><strong>Pembayaran:</strong> ${pesanan.pembayaran || '-'}</p>
                <p><strong>Total Bayar:</strong> <span style="color: #ffcc00;">${pesanan.harga}</span></p>
            </div>
            <div class="status-riwayat">
                <div class="badge-selesai">✅ ${pesanan.status}</div>
                <div class="tgl-riwayat">${pesanan.tanggal}</div>
            </div>
        `;
        
        wadahRiwayat.appendChild(card);
    });
});