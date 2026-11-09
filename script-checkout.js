document.addEventListener('DOMContentLoaded', () => {
    
    const judul = localStorage.getItem('simpan_judul');
    const harga = localStorage.getItem('simpan_harga');
    const gambarUtama = localStorage.getItem('simpan_gambar');
    const kode = localStorage.getItem('simpan_kode');
    const spekString = localStorage.getItem('simpan_spek');
    const gambarSS = localStorage.getItem('simpan_gambar_ss'); 

    if (judul && harga) {
        document.getElementById('judul-checkout').innerText = judul;
        document.getElementById('harga-checkout').innerText = harga;
        
        const elemenTotal = document.getElementById('total-checkout');
        if(elemenTotal) elemenTotal.innerText = harga;
        
        const elemenKode = document.getElementById('kode-checkout');
        if (kode && elemenKode) elemenKode.innerText = 'Kode Akun : ' + kode;

        const imgUtama = document.getElementById('gambar-checkout');
        if (gambarUtama && imgUtama) imgUtama.src = gambarUtama;

        // --- BAGIAN BARU: MENAMPILKAN BANYAK GAMBAR SS ---
        const wadahGaleri = document.getElementById('galeri-ss');
        if (gambarSS && wadahGaleri) {
            wadahGaleri.innerHTML = ''; // Bersihkan isi sebelumnya
            const daftarGambar = gambarSS.split(','); 
            
            daftarGambar.forEach(link => {
                const imgBaru = document.createElement('img');
                imgBaru.src = link.trim(); // trim() berguna menghapus spasi yang tidak sengaja terketik
                imgBaru.style.width = '100%'; 
                imgBaru.style.borderRadius = '8px';
                wadahGaleri.appendChild(imgBaru);
            });
        }

        const wadahSpek = document.getElementById('spek-checkout');
        if (spekString && wadahSpek) {
            const arraySpek = spekString.split('|'); 
            wadahSpek.innerHTML = ''; 
            arraySpek.forEach(item => {
                const liBaru = document.createElement('li');
                liBaru.innerText = item;
                wadahSpek.appendChild(liBaru);
            });
        }
    }

    // LOGIKA POP-UP SCREENSHOT
    const btnBukaSS = document.getElementById('btn-buka-ss');
    const btnTutupSS = document.getElementById('btn-tutup-ss');
    const wadahSS = document.getElementById('wadah-popup-ss');

    if (btnBukaSS && wadahSS) {
        btnBukaSS.addEventListener('click', () => wadahSS.style.display = 'flex');
        btnTutupSS.addEventListener('click', () => wadahSS.style.display = 'none');
    }

    // LOGIKA CHECKOUT & QRIS
    const btnCheckoutFinal = document.querySelector('.btn-checkout-final');
    const wadahQris = document.getElementById('wadah-popup-qris');
    const btnBatalBayar = document.getElementById('btn-batal-bayar');
    const btnSudahBayar = document.getElementById('btn-sudah-bayar');
    
    if (btnCheckoutFinal) {
        btnCheckoutFinal.addEventListener('click', () => {
            const email = document.querySelector('input[type="email"]').value;
            let metodePembayaran = '';
            document.querySelectorAll('input[name="pembayaran"]').forEach(radio => {
                if (radio.checked) metodePembayaran = radio.value;
            });

            if (!metodePembayaran) return alert('Pilih E-Wallet terlebih dahulu!');
            if (!email) return alert('Harap isi Email!');

            document.getElementById('teks-total-qris').innerText = 'Total Tagihan: ' + document.getElementById('harga-checkout').innerText;
            wadahQris.style.display = 'flex';
        });
    }

    if (btnBatalBayar) btnBatalBayar.addEventListener('click', () => wadahQris.style.display = 'none');

    if (btnSudahBayar) {
        btnSudahBayar.addEventListener('click', () => {
            const pesananBaru = {
                judul: document.getElementById('judul-checkout').innerText,
                kode: document.getElementById('kode-checkout').innerText,
                harga: document.getElementById('harga-checkout').innerText,
                tanggal: new Date().toLocaleDateString('id-ID'), 
                status: 'Selesai'
            };
            let daftarRiwayat = JSON.parse(localStorage.getItem('data_riwayat')) || [];
            daftarRiwayat.push(pesananBaru);
            localStorage.setItem('data_riwayat', JSON.stringify(daftarRiwayat));

            wadahQris.style.display = 'none';
            alert('✅ Pembayaran Berhasil Dikonfirmasi! Pesanan masuk ke Riwayat.');
        });
    }
});