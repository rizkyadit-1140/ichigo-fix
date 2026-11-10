// ==========================================
// 1. GUDANG DATA GAME
// ==========================================
const databaseGame = {
    "mlbb": {
        judul: "Mobile Legends: Bang Bang",
        publisher: "Moonton",
        logo: "images/logo_ml.png",
        icon: "https://cdn-icons-png.flaticon.com/512/2850/2850974.png",
        mataUang: "Diamonds",
        desc1: "Ichigo Store menawarkan layanan top up Diamond Mobile Legends yang mudah, aman, dan praktis.",
        desc2: "Beli Diamond Mobile Legends dalam hitungan detik! Cukup masukkan User ID dan Server ID Anda, pilih nominal, selesaikan pembayaran, dan Diamond akan langsung masuk ke akun Anda.",
        inputTitle: "Masukkan ID Pengguna",
        inputNote: "Untuk menemukan ID Pengguna Anda, klik avatar Anda di pojok kiri atas layar dan buka tab Info Umum. Masukkan ID Pengguna lengkap, mis. 12345678 (1234).",
        inputHTML: `
            <input type="text" placeholder="ID Pengguna" id="input-1">
            <input type="text" placeholder="ID Server ( )" id="input-2" style="max-width: 150px;">
        `,
        paket: [
            { nama: "10 Diamonds", harga: 3000 },
            { nama: "40 Diamonds", harga: 12000 },
            { nama: "88 Diamonds", harga: 24000 },
            { nama: "170 Diamonds", harga: 50000 },
            { nama: "350 Diamonds", harga: 100000 },
            { nama: "870 Diamonds", harga: 250000 },
            { nama: "1400 Diamonds", harga: 400000 },
            { nama: "4000 Diamonds", harga: 1000000 },
            { nama: "Starlight Member", harga: 23700, colspan: 3 },
        ]
    },
    "freefire": {
        judul: "Free Fire",
        publisher: "Garena",
        logo: "images/logo_ff.png",
        icon: "https://cdn-icons-png.flaticon.com/512/2850/2850974.png",
        mataUang: "Diamonds",
        desc1: "Ichigo Store menawarkan layanan top up Diamond Free Fire yang mudah, aman, dan praktis.",
        desc2: "Beli Diamond Free Fire dalam hitungan detik! Cukup masukkan Player ID Anda, pilih nominal Diamond, selesaikan pembayaran.",
        inputTitle: "Masukkan Player ID",
        inputNote: "Untuk menemukan Player ID Anda, klik avatar Anda di pojok kiri atas menu utama game.",
        inputHTML: `
            <input type="text" placeholder="Masukkan Player ID (mis. 123456789)" id="input-1">
        `,
        paket: [
            { nama: "5 Diamonds", harga: 1000 },
            { nama: "70 Diamonds", harga: 10000 },
            { nama: "140 Diamonds", harga: 20000 },
            { nama: "355 Diamonds", harga: 50000 },
            { nama: "720 Diamonds", harga: 100000 },
            { nama: "1450 Diamonds", harga: 200000 },
            { nama: "2180 Diamonds", harga: 300000 },
            { nama: "3650 Diamonds", harga: 500000 },
            { nama: "Elite Pass", harga: 45500, colspan: 3 }
        ]
    },
    "genshin": {
        judul: "Genshin Impact",
        publisher: "HoYoverse",
        logo: "images/logo_gi.jpg",
        icon: "https://cdn-icons-png.flaticon.com/512/2850/2850974.png",
        mataUang: "Crystals",
        desc1: "Ichigo Store menawarkan layanan top up Genesis Crystal & Blessing of the Welkin Moon.",
        desc2: "Cukup masukkan UID dan Server Genshin Impact Anda, pilih nominal yang ingin dibeli, selesaikan pembayaran.",
        inputTitle: "Masukkan UID Pengguna",
        inputNote: "UID Anda (9 angka) akan terlihat di bawah avatar Anda atau di pojok kanan bawah layar.",
        inputHTML: `
            <input type="text" placeholder="UID (mis. 851234567)" id="input-1">
            <select id="input-2" style="max-width: 150px; cursor: pointer;">
                <option value="os_asia">Asia</option>
                <option value="os_usa">America</option>
                <option value="os_euro">Europe</option>
            </select>
        `,
        paket: [
            { nama: "60 Crystals", harga: 16000 },
            { nama: "330 Crystals", harga: 79000 },
            { nama: "1090 Crystals", harga: 249000 },
            { nama: "2240 Crystals", harga: 479000 },
            { nama: "3880 Crystals", harga: 799000 },
            { nama: "8080 Crystals", harga: 1599000 },
            { nama: "Gnostic Hymn", harga: 159000 },
            { nama: "Gnostic Chorus", harga: 329000 },
            { nama: "Blessing of the Welkin Moon", harga: 79000, colspan: 3 }
        ]
    },
    "valorant": {
        judul: "Valorant",
        publisher: "Riot Games",
        logo: "images/logo_valo.png",
        icon: "https://cdn-icons-png.flaticon.com/512/2850/2850974.png",
        mataUang: "VP",
        desc1: "Ichigo Store menawarkan layanan top up Valorant Points (VP) yang mudah, aman, dan praktis.",
        desc2: "Cukup masukkan Riot ID Anda, pilih nominal VP yang ingin dibeli, selesaikan pembayaran.",
        inputTitle: "Masukkan Riot ID",
        inputNote: "Riot ID beserta Tagline akan terlihat di profil Anda (contoh: Jett#1234).",
        inputHTML: `
            <input type="text" placeholder="Riot ID (mis. Jett)" id="input-1">
            <input type="text" placeholder="Tagline (mis. #1234)" id="input-2" style="max-width: 160px;">
        `,
        paket: [
            { nama: "125 VP", harga: 15000 },
            { nama: "420 VP", harga: 50000 },
            { nama: "700 VP", harga: 80000 },
            { nama: "1375 VP", harga: 150000 },
            { nama: "2400 VP", harga: 250000 },
            { nama: "4000 VP", harga: 400000 },
            { nama: "5750 VP", harga: 550000 },
            { nama: "8150 VP", harga: 800000 },
            { nama: "10500 VP", harga: 1000000 }
        ]
    },
    "pubgm": {
        judul: "PUBG Mobile",
        publisher: "Level Infinite",
        logo: "images/logo_pubg.png",
        icon: "https://cdn-icons-png.flaticon.com/512/2850/2850974.png",
        mataUang: "UC",
        desc1: "Ichigo Store menawarkan layanan top up UC PUBG Mobile yang mudah, aman, dan praktis.",
        desc2: "Beli UC PUBG Mobile dalam hitungan detik! Cukup masukkan Player ID Anda, pilih nominal UC.",
        inputTitle: "Masukkan Player ID",
        inputNote: "Player ID Anda akan terlihat di halaman profil utama game.",
        inputHTML: `
            <input type="text" placeholder="Masukkan Player ID (mis. 5123456789)" id="input-1">
        `,
        paket: [
            { nama: "60 UC", harga: 15000 },
            { nama: "325 UC", harga: 75000 },
            { nama: "660 UC", harga: 150000 },
            { nama: "1800 UC", harga: 400000 },
            { nama: "3850 UC", harga: 800000 },
            { nama: "8100 UC", harga: 1600000 },
            { nama: "16200 UC", harga: 3200000 },
            { nama: "Elite Pass", harga: 150000 },
            { nama: "Elite Pass Plus", harga: 400000 }
        ]
    },
    "roblox": {
        judul: "Roblox",
        publisher: "Roblox Corporation",
        logo: "images/logo_roblox.png",
        icon: "https://cdn-icons-png.flaticon.com/512/2850/2850974.png",
        mataUang: "Robux",
        desc1: "Ichigo Store menawarkan layanan top up Robux yang mudah, aman, dan praktis.",
        desc2: "Beli Robux dalam hitungan detik! Cukup masukkan Username Roblox Anda.",
        inputTitle: "Masukkan Username Roblox",
        inputNote: "Username Anda terletak di halaman profil (bukan Display Name).",
        inputHTML: `
            <input type="text" placeholder="Masukkan Username (mis. IchigoPlayer)" id="input-1">
        `,
        paket: [
            { nama: "80 Robux", harga: 15000 },
            { nama: "400 Robux", harga: 75000 },
            { nama: "800 Robux", harga: 150000 },
            { nama: "1200 Robux", harga: 225000 },
            { nama: "1700 Robux", harga: 320000 },
            { nama: "4500 Robux", harga: 800000 },
            { nama: "10000 Robux", harga: 1600000 },
            { nama: "Premium 450", harga: 75000 },
            { nama: "Premium 1000", harga: 150000 }
        ]
    },
    "cs2": {
        judul: "Counter-Strike 2",
        publisher: "Valve",
        logo: "images/logo_cs.png",
        icon: "https://cdn-icons-png.flaticon.com/512/2850/2850974.png",
        mataUang: "Wallet",
        desc1: "Ichigo Store menawarkan layanan top up Steam Wallet Code untuk CS2 Anda.",
        desc2: "Beli Steam Wallet dalam hitungan detik! Masukkan Steam ID Anda.",
        inputTitle: "Masukkan Steam ID",
        inputNote: "Steam ID berupa 17 digit angka yang terdapat pada URL profil Anda.",
        inputHTML: `
            <input type="text" placeholder="Masukkan Steam ID (mis. 76561198xxx)" id="input-1">
        `,
        paket: [
            { nama: "IDR 12.000", harga: 13500 },
            { nama: "IDR 45.000", harga: 48000 },
            { nama: "IDR 60.000", harga: 64000 },
            { nama: "IDR 90.000", harga: 95000 },
            { nama: "IDR 120.000", harga: 128000 },
            { nama: "IDR 250.000", harga: 265000 },
            { nama: "IDR 400.000", harga: 420000 },
            { nama: "IDR 600.000", harga: 630000 },
            { nama: "IDR 1.000.000", harga: 1050000 }
        ]
    },
    "wuwa": {
        judul: "Wuthering Waves",
        publisher: "Kuro Games",
        logo: "images/logo_wuwa.png",
        icon: "https://cdn-icons-png.flaticon.com/512/2850/2850974.png",
        mataUang: "Lunites",
        desc1: "Ichigo Store menawarkan layanan top up Lunites & Lunite Subscription.",
        desc2: "Masukkan UID dan Server Anda, pilih nominal Lunites yang ingin dibeli.",
        inputTitle: "Masukkan UID Pengguna",
        inputNote: "UID Anda akan terlihat di bagian bawah layar pada menu profil (Terminal).",
        inputHTML: `
            <input type="text" placeholder="Masukkan UID (mis. 900123456)" id="input-1">
            <select id="input-2" style="max-width: 150px; cursor: pointer;">
                <option value="sea">SEA</option>
                <option value="asia">Asia</option>
                <option value="america">America</option>
            </select>
        `,
        paket: [
            { nama: "60 Lunites", harga: 16000 },
            { nama: "330 Lunites", harga: 79000 },
            { nama: "1090 Lunites", harga: 249000 },
            { nama: "2240 Lunites", harga: 479000 },
            { nama: "3880 Lunites", harga: 799000 },
            { nama: "8080 Lunites", harga: 1599000 },
            { nama: "Lunite Sub", harga: 79000 },
            { nama: "Pioneer Podcast", harga: 159000 },
            { nama: "Connoisseur Podcast", harga: 329000 }
        ]
    }
};

// ==========================================
// 2. LOGIKA RENDER HALAMAN
// ==========================================
// ==========================================
// 2. LOGIKA RENDER HALAMAN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // a. Baca game apa yang dipilih pengguna dari Local Storage
    const idGameTerpilih = localStorage.getItem('game_terpilih') || 'mlbb';
    const dataGame = databaseGame[idGameTerpilih];

    if (!dataGame) {
        alert("Data game tidak ditemukan!");
        return;
    }

    // Variabel Kasir
    let itemTerpilih = "-";
    let hargaTerpilih = 0;
    let metodeTerpilih = "-";

    const formatRp = (angka) => {
        return "IDR " + angka.toLocaleString('id-ID');
    };

    // b. Suntikkan Data Teks & Gambar
    document.getElementById('game-logo').src = dataGame.logo;
    document.getElementById('game-title').innerText = dataGame.judul;
    document.getElementById('game-publisher').innerText = dataGame.publisher;
    document.getElementById('game-desc-1').innerText = dataGame.desc1;
    document.getElementById('game-desc-2').innerText = dataGame.desc2;
    document.getElementById('input-title').innerText = dataGame.inputTitle;
    document.getElementById('input-note').innerText = dataGame.inputNote;
    document.getElementById('input-fields-container').innerHTML = dataGame.inputHTML;

    // c. Suntikkan Paket Diamond
    const wadahPaket = document.getElementById('packages-container');
    wadahPaket.innerHTML = ''; 

    dataGame.paket.forEach((paket) => {
        const card = document.createElement('div');
        card.className = 'diamond-card';
        if (paket.colspan) card.style.gridColumn = `span ${paket.colspan}`;
        
        card.innerHTML = `
            <img src="${dataGame.icon}" alt="${dataGame.mataUang}">
            <div class="d-info">
                <h4>${paket.nama}</h4>
                <p>${formatRp(paket.harga)}</p>
            </div>
        `;

        // BAGIAN BARU 1: Tempelkan nama item sebagai penanda untuk dibaca Flash Sale
        card.setAttribute('data-nama-item', paket.nama);

        // Event Klik Paket
        card.addEventListener('click', () => {
            document.querySelectorAll('.diamond-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            itemTerpilih = paket.nama;
            hargaTerpilih = paket.harga;

            document.querySelectorAll('.pay-price-label').forEach(label => {
                label.innerText = formatRp(hargaTerpilih);
            });

            perbaruiCheckout();
        });

        wadahPaket.appendChild(card);
    });

    // BAGIAN BARU 2: Logika Auto-Select dari Flash Sale
    const itemPreselect = localStorage.getItem('item_preselect');
    if (itemPreselect) {
        const semuaKartu = document.querySelectorAll('.diamond-card');
        semuaKartu.forEach(kartu => {
            // Jika nama item di kartu sama persis dengan yang dikirim dari Flash Sale
            if (kartu.getAttribute('data-nama-item') === itemPreselect) {
                kartu.click(); // JavaScript tolong klik kartu ini otomatis!
            }
        });
        // Hapus pesannya agar tidak terus-terusan terpilih jika pembeli refresh halaman
        localStorage.removeItem('item_preselect'); 
    }

    // d. Logika Pemilihan Pembayaran
    const kartuPembayaran = document.querySelectorAll('.pay-card');
    kartuPembayaran.forEach(kartu => {
        kartu.addEventListener('click', () => {
            kartuPembayaran.forEach(c => c.classList.remove('active'));
            kartu.classList.add('active');
            
            metodeTerpilih = kartu.getAttribute('data-payment');
            perbaruiCheckout();
        });
    });

    // e. Fungsi Update Checkout Panel
    function perbaruiCheckout() {
        document.getElementById('checkout-item-name').innerText = itemTerpilih;
        document.getElementById('checkout-payment-name').innerText = metodeTerpilih;
        document.getElementById('checkout-total-price').innerText = hargaTerpilih > 0 ? formatRp(hargaTerpilih) : "-";
    }

    // f. Tombol Beli
    document.getElementById('btn-beli').addEventListener('click', () => {
        const input1 = document.getElementById('input-1');
        
        if (!input1 || input1.value === "") {
            alert("Harap masukkan ID Pengguna!");
            return;
        }
        if (hargaTerpilih === 0) {
            alert("Silakan pilih jumlah top up terlebih dahulu!");
            return;
        }
        if (metodeTerpilih === "-") {
            alert("Silakan pilih metode pembayaran!");
            return;
        }

        alert(`Pembelian Sukses!\nItem: ${itemTerpilih}\nID: ${input1.value}\nBayar via: ${metodeTerpilih}\nTotal: ${formatRp(hargaTerpilih)}`);
    });

});