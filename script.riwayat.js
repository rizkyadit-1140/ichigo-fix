document.addEventListener('DOMContentLoaded', () => {
    const wadahRiwayat = document.getElementById('daftar-riwayat');
    
    // Tarik data dari laci 'data_riwayat'. Kalau kosong, buat jadi array kosong []
    const dataRiwayat = JSON.parse(localStorage.getItem('data_riwayat')) || [];

    // Jika belum ada pesanan sama sekali
    if (dataRiwayat.length === 0) {
        wadahRiwayat.innerHTML = `
            <div style="text-align: center; padding: 50px; background-color: #1a0303; border-radius: 8px;">
                <h3 style="color: #888;">Belum ada riwayat pesanan.</h3>
                <a href="index.html" style="color: #ffcc00; text-decoration: none;">Cari Akun Idamanmu Sekarang!</a>
            </div>
        `;
        return;
    }

    // Jika ada pesanan, kosongkan teks "Memuat riwayat..."
    wadahRiwayat.innerHTML = '';

    // Balik urutannya agar pesanan paling baru muncul di paling atas
    dataRiwayat.reverse().forEach(pesanan => {
        
        // Buat elemen kartu (div) baru untuk setiap pesanan
        const card = document.createElement('div');
        card.className = 'card-riwayat';
        
        // Masukkan struktur HTML ke dalam kartu beserta data dari memori
        card.innerHTML = `
            <div class="info-riwayat">
                <h3>${pesanan.judul}</h3>
                <p><strong>Kode:</strong> ${pesanan.kode}</p>
                <p><strong>Total Bayar:</strong> <span style="color: #ffcc00;">${pesanan.harga}</span></p>
            </div>
            <div class="status-riwayat">
                <div class="badge-selesai">✅ ${pesanan.status}</div>
                <div class="tgl-riwayat">${pesanan.tanggal}</div>
            </div>
        `;
        
        // Tempelkan kartu tersebut ke layar
        wadahRiwayat.appendChild(card);
    });
});