// ==========================================
// LOGIKA KHUSUS HALAMAN BELI AKUN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-akun-bar input');
    const searchBtn = document.querySelector('.search-akun-bar button');
    const btnFilter = document.querySelector('.btn-filter');
    const btnReset = document.querySelector('.btn-reset');
    const inputHargas = document.querySelectorAll('.input-rp input');
    const gridKatalog = document.querySelector('.grid-katalog-akun'); 
    const radioSorts = document.querySelectorAll('input[name="urutkan"]'); 

    // Fungsi pembantu: hanya ambil kartu yang BELUM terjual
    const getKartuTersedia = () => {
        const akunTerjual = JSON.parse(localStorage.getItem('akun_terjual')) || [];
        return Array.from(document.querySelectorAll('.card-katalog-item')).filter(card => {
            const kode = card.getAttribute('data-kode');
            if (akunTerjual.includes(kode)) {
                card.remove();
                return false;
            }
            return true;
        });
    };

    if (document.querySelectorAll('.card-katalog-item').length > 0) {
        
        // 1. FITUR PENCARIAN AKUN
        const jalankanPencarian = () => {
            const keyword = searchInput.value.toLowerCase();
            const cardsTersedia = getKartuTersedia();

            cardsTersedia.forEach(card => {
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
                let cardsArray = getKartuTersedia(); // Hanya ambil yang belum terjual!

                // A. Proses Filter
                cardsArray.forEach(card => {
                    const teksHarga = card.querySelector('.harga-asli').innerText;
                    const angkaHarga = parseInt(teksHarga.replace(/[^0-9]/g, ''));
                    if (angkaHarga >= minHarga && angkaHarga <= maxHarga) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });

                // B. Proses Sorting
                let sortOrder = '';
                radioSorts.forEach(radio => {
                    if (radio.checked) sortOrder = radio.id;
                });

                if (sortOrder) {
                    cardsArray.sort((a, b) => {
                        const hargaA = parseInt(a.querySelector('.harga-asli').innerText.replace(/[^0-9]/g, ''));
                        const hargaB = parseInt(b.querySelector('.harga-asli').innerText.replace(/[^0-9]/g, ''));
                        
                        if (sortOrder === 'termurah') return hargaA - hargaB;
                        if (sortOrder === 'termahal') return hargaB - hargaA;
                        return 0;
                    });

                    cardsArray.forEach(card => gridKatalog.appendChild(card));
                }
            });

            // 3. LOGIKA TOMBOL RESET
            btnReset.addEventListener('click', () => {
                inputHargas[0].value = '';
                inputHargas[1].value = '';
                if (searchInput) searchInput.value = '';
                radioSorts.forEach(radio => radio.checked = false); 
                
                const cardsTersedia = getKartuTersedia(); // Hanya tampilkan yang belum terjual!
                cardsTersedia.forEach(card => card.style.display = 'block'); 
            });
        }
    }
});