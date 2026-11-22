document.addEventListener('DOMContentLoaded', () => {

    function cekStatusAkunCheckout() {
    const kodeTersimpan = localStorage.getItem('simpan_kode');
    const akunTerjual = JSON.parse(localStorage.getItem('akun_terjual')) || [];

    if (kodeTersimpan && akunTerjual.includes(kodeTersimpan)) {
        alert('⚠️ Akun ini sudah terjual dan tidak dapat dibeli kembali!');
        window.location.replace('ichigo_store_website.html');
        return true;
    }
    return false;
    }

    // Jalankan saat halaman dimuat maupun saat tombol Back mouse ditekan
    window.addEventListener('pageshow', () => {
        cekStatusAkunCheckout();
    });
    
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
        btnCheckoutFinal.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. CEK LOGIN DULU (Jika belum login, langsung berhenti di sini!)
           // 1. CEK LOGIN DULU
            const userAktif = localStorage.getItem('ichigo_user_aktif');
            if (!userAktif) {
                alert('⚠️ Silakan Login terlebih dahulu sebelum melakukan Checkout!');
                const modalLogin = document.getElementById('modal-login');
                if (modalLogin) modalLogin.style.display = 'flex';
                return;
            }

            // 2. CEK APAKAH AKUN SUDAH TERJUAL (Cegah beli ulang lewat tombol Back)
            if (cekStatusAkunCheckout()) return;
            

            // 2. VALIDASI PEMBAYARAN & EMAIL (Hanya jalan jika SUDAH login)
            const email = document.getElementById('email-pembeli').value.trim();
            let metodePembayaran = '';
            document.querySelectorAll('input[name="pembayaran"]').forEach(radio => {
                if (radio.checked) metodePembayaran = radio.value;
            });

            if (!metodePembayaran) {
                alert('Pilih E-Wallet terlebih dahulu!');
                return;
            }
            if (!email) {
                alert('Harap isi Email!');
                return;
            }

            // 3. MUNCULKAN QRIS
            document.getElementById('teks-total-qris').innerText = 'Total Tagihan: ' + document.getElementById('harga-checkout').innerText;
            wadahQris.style.display = 'flex';
        });
    }

    if (btnBatalBayar) {
        btnBatalBayar.addEventListener('click', () => wadahQris.style.display = 'none');
    }

    if (btnSudahBayar) {
        btnSudahBayar.addEventListener('click', () => {
            const userAktif = localStorage.getItem('ichigo_user_aktif');
            let metodePembayaran = 'QRIS';
            document.querySelectorAll('input[name="pembayaran"]').forEach(radio => {
                if (radio.checked) metodePembayaran = radio.value.toUpperCase();
            });

            const teksKode = document.getElementById('kode-checkout').innerText;
            const kodeBersih = teksKode.replace('Kode Akun :', '').trim();

            const pesananBaru = {
                user: userAktif, // <-- Penanda pemilik transaksi
                judul: document.getElementById('judul-checkout').innerText,
                kode: kodeBersih,
                jenis: 'Akun',
                pembayaran: metodePembayaran,
                harga: document.getElementById('harga-checkout').innerText,
                tanggal: new Date().toLocaleDateString('id-ID'), 
                status: 'Selesai'
            };
            let daftarRiwayat = JSON.parse(localStorage.getItem('data_riwayat')) || [];
            daftarRiwayat.push(pesananBaru);
            localStorage.setItem('data_riwayat', JSON.stringify(daftarRiwayat));

            let akunTerjual = JSON.parse(localStorage.getItem('akun_terjual')) || [];
            if (kodeBersih && !akunTerjual.includes(kodeBersih)) {
                akunTerjual.push(kodeBersih);
                localStorage.setItem('akun_terjual', JSON.stringify(akunTerjual));
            }

            wadahQris.style.display = 'none';
            alert('✅ Pembayaran Berhasil Dikonfirmasi! Pesanan masuk ke Riwayat.');
            window.location.href = 'riwayat.html';
        });
    }
});