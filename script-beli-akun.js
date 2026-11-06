// ==========================================
// LOGIKA KHUSUS HALAMAN BELI AKUN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-akun-bar input');
    const searchBtn = document.querySelector('.search-akun-bar button');
    const cards = document.querySelectorAll('.card-katalog-item');
    const btnFilter = document.querySelector('.btn-filter');
    const btnReset = document.querySelector('.btn-reset');
    const inputHargas = document.querySelectorAll('.input-rp input');
    
    // Tambahan variabel untuk fitur sorting
    const gridKatalog = document.querySelector('.grid-katalog-akun'); 
    const radioSorts = document.querySelectorAll('input[name="urutkan"]'); 

    if (cards.length > 0) {
        
        // 1. FITUR PENCARIAN AKUN
        const jalankanPencarian = () => {
            const keyword = searchInput.value.toLowerCase();
            cards.forEach(card => {
                const judulAkun = card.querySelector('h4').innerText.toLowerCase();
                if (judulAkun.includes(keyword)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        };

        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', jalankanPencarian);
            searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') jalankanPencarian();
            });
        }

        // 2. FITUR FILTER HARGA & URUTAN HARGA
        if (btnFilter && inputHargas.length >= 2) {
            btnFilter.addEventListener('click', () => {
                const minHarga = parseInt(inputHargas[0].value) || 0;
                const maxHarga = parseInt(inputHargas[1].value) || 999999999;

                // Ubah NodeList kartu menjadi Array agar bisa disortir (diurutkan)
                let cardsArray = Array.from(cards);

                // A. Proses Filter (Sembunyikan/Tampilkan sesuai range harga)
                cardsArray.forEach(card => {
                    const teksHarga = card.querySelector('.harga-asli').innerText;
                    const angkaHarga = parseInt(teksHarga.replace(/[^0-9]/g, ''));
                    if (angkaHarga >= minHarga && angkaHarga <= maxHarga) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });

                // B. Proses Sorting (Cek tombol radio mana yang dipilih)
                let sortOrder = '';
                radioSorts.forEach(radio => {
                    if (radio.checked) sortOrder = radio.id; // Mendapatkan id 'termurah' atau 'termahal'
                });

                if (sortOrder) {
                    // Logika mengurutkan harga
                    cardsArray.sort((a, b) => {
                        const hargaA = parseInt(a.querySelector('.harga-asli').innerText.replace(/[^0-9]/g, ''));
                        const hargaB = parseInt(b.querySelector('.harga-asli').innerText.replace(/[^0-9]/g, ''));
                        
                        if (sortOrder === 'termurah') return hargaA - hargaB;
                        if (sortOrder === 'termahal') return hargaB - hargaA;
                        return 0;
                    });

                    // Masukkan kembali kartu yang sudah rapi ke dalam HTML
                    cardsArray.forEach(card => gridKatalog.appendChild(card));
                }
            });

            // Logika Tombol Reset
            btnReset.addEventListener('click', () => {
                inputHargas[0].value = '';
                inputHargas[1].value = '';
                if(searchInput) searchInput.value = '';
                
                // Hapus centang pada tombol radio urutkan harga
                radioSorts.forEach(radio => radio.checked = false); 
                
                cards.forEach(card => card.style.display = 'block'); 
            });
        }


    }
});