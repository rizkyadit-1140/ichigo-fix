document.addEventListener("DOMContentLoaded", () => {
    const tempatHeader = document.getElementById("tempat-header");
    
    if (tempatHeader) {
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                tempatHeader.innerHTML = data;
                
                // === INISIALISASI MESIN PENCARI SETELAH HEADER DIMUAT ===
                inisialisasiPencarianLive();
                // === INISIALISASI MODAL LOGIN ===
                inisialisasiModalLogin();
            })
            .catch(error => console.error("Gagal memuat header:", error));
    }
});

function inisialisasiPencarianLive() {
    // 1. DATABASE PENCARIAN
    const dataPencarian = [
        // --- DAFTAR TOP UP ---
        { judul: "Mobile Legends", tipe: "Top Up Diamond", gambar: "images/top1.png", aksi: "topup", idGame: "mlbb" },
        { judul: "Free Fire", tipe: "Top Up Diamond", gambar: "images/top3.png", aksi: "topup", idGame: "freefire" },
        { judul: "PUBG Mobile", tipe: "Top Up UC", gambar: "images/top4.png", aksi: "topup", idGame: "pubgm" },
        { judul: "Valorant", tipe: "Top Up VP", gambar: "images/top5.png", aksi: "topup", idGame: "valorant" },
        { judul: "Genshin Impact", tipe: "Top Up Crystal", gambar: "images/top2.png", aksi: "topup", idGame: "genshin" },
        { judul: "Roblox", tipe: "Top Up Robux", gambar: "images/top7.png", aksi: "topup", idGame: "roblox" },
        
        // --- DAFTAR BELI AKUN ---
        { judul: "Mobile Legends", tipe: "Beli Akun", gambar: "images/akun2.png", aksi: "link", url: "beli-akun-ml.html" },
        { judul: "Free Fire", tipe: "Beli Akun", gambar: "images/akun3.png", aksi: "link", url: "beli-akun-ff.html" },
        { judul: "PUBG Mobile", tipe: "Beli Akun", gambar: "images/akun5.png", aksi: "link", url: "beli-akun-pubg.html" },
        { judul: "Valorant", tipe: "Beli Akun", gambar: "images/akun4.png", aksi: "link", url: "beli-akun-valo.html" },
        { judul: "One Piece Bounty Rush", tipe: "Beli Akun", gambar: "images/akun1.png", aksi: "link", url: "beli-akun-opbr.html" }
    ];

    // 2. LOGIKA MESIN PENCARI
    const inputCari = document.getElementById('input-pencarian');
    const dropdownCari = document.getElementById('hasil-pencarian');

    if (inputCari && dropdownCari) {
        inputCari.addEventListener('input', function() {
            const kataKunci = this.value.toLowerCase().trim();
            dropdownCari.innerHTML = ''; 

            if (kataKunci.length > 0) {
                dropdownCari.style.display = 'block'; 
                
                const hasilFilter = dataPencarian.filter(item => 
                    item.judul.toLowerCase().includes(kataKunci) || 
                    item.tipe.toLowerCase().includes(kataKunci)
                );

                if (hasilFilter.length > 0) {
                    hasilFilter.forEach(item => {
                        const card = document.createElement('a');
                        card.className = 'search-item';
                        
                        if (item.aksi === "topup") {
                            card.href = "javascript:void(0)";
                            card.onclick = () => {
                                localStorage.setItem('game_terpilih', item.idGame);
                                window.location.href = 'halaman-topup.html'; 
                            };
                        } else {
                            card.href = item.url; 
                        }

                        card.innerHTML = `
                            <img src="${item.gambar}" alt="${item.judul}">
                            <div class="search-info">
                                <h4>${item.judul}</h4>
                                <p>${item.tipe}</p>
                            </div>
                        `;
                        dropdownCari.appendChild(card);
                    });
                } else {
                    dropdownCari.innerHTML = '<div class="search-empty">Produk tidak ditemukan</div>';
                }
            } else {
                dropdownCari.style.display = 'none'; 
            }
        });

        // 3. TUTUP DROPDOWN SAAT KLIK DI LUAR
        document.addEventListener('click', (e) => {
            if (!inputCari.contains(e.target) && !dropdownCari.contains(e.target)) {
                dropdownCari.style.display = 'none';
            }
        });
    }
}
function inisialisasiModalLogin() {
    const btnMasukHeader = document.getElementById('btn-masuk-header');
    const modalLogin = document.getElementById('modal-login');
    const closeBtn = document.getElementById('close-login-btn');
    
    // Elemen di dalam form
    const authTitle = document.getElementById('auth-title');
    const authEmail = document.getElementById('auth-email');
    const authPassword = document.getElementById('auth-password');
    const btnSubmitAuth = document.getElementById('btn-submit-auth');
    const forgotPwLink = document.getElementById('forgot-pw-link');
    const authSwitchText = document.getElementById('auth-switch-text');
    const authSwitchLink = document.getElementById('auth-switch-link');

    let isLoginMode = true; // Penanda apakah sedang di form Login atau Daftar

    // --- 1. CEK APAKAH SUDAH ADA USER YANG LOGIN (Biar nggak bolak-balik login) ---
    const userAktif = localStorage.getItem('ichigo_user_aktif');
    if (userAktif && btnMasukHeader) {
        let namaDepan = userAktif.split('@')[0]; // Ambil nama sebelum @gmail.com
        btnMasukHeader.innerText = "Halo, " + namaDepan;
        btnMasukHeader.style.backgroundColor = "#ff9900"; // Ubah warna tombol
        btnMasukHeader.style.color = "#000";
    }

    if (btnMasukHeader && modalLogin && closeBtn) {
        // Buka Modal
        btnMasukHeader.addEventListener('click', (e) => {
            e.preventDefault();
            // Kalau sudah login, tanya mau logout atau tidak
            if (localStorage.getItem('ichigo_user_aktif')) {
                if(confirm("Anda sudah masuk. Apakah ingin Keluar (Logout)?")) {
                    localStorage.removeItem('ichigo_user_aktif');
                    window.location.reload(); // Refresh halaman
                }
            } else {
                modalLogin.style.display = 'flex';
            }
        });

        // Tutup Modal
        closeBtn.addEventListener('click', () => modalLogin.style.display = 'none');
        window.addEventListener('click', (e) => {
            if (e.target === modalLogin) modalLogin.style.display = 'none';
        });

        // --- 2. LOGIKA UBAH FORM LOGIN <--> DAFTAR ---
        authSwitchLink.addEventListener('click', (e) => {
            e.preventDefault();
            isLoginMode = !isLoginMode; // Tukar mode
            
            // Kosongkan inputan
            authEmail.value = '';
            authPassword.value = '';

            if (isLoginMode) {
                authTitle.innerText = "Login";
                btnSubmitAuth.innerText = "Masuk";
                forgotPwLink.style.display = "block";
                authSwitchText.childNodes[0].nodeValue = "Belum punya akun? ";
                authSwitchLink.innerText = "Daftar sekarang";
            } else {
                authTitle.innerText = "Daftar Akun";
                btnSubmitAuth.innerText = "Daftar";
                forgotPwLink.style.display = "none"; // Sembunyikan lupa password saat daftar
                authSwitchText.childNodes[0].nodeValue = "Sudah punya akun? ";
                authSwitchLink.innerText = "Masuk di sini";
            }
        });

        // --- 3. LOGIKA PENDAFTARAN & LOGIN (DATABASE LOKAL) ---
        btnSubmitAuth.addEventListener('click', () => {
            const email = authEmail.value.trim();
            const password = authPassword.value.trim();

            if (email === "" || password === "") {
                alert("Email dan Password tidak boleh kosong!");
                return;
            }

            // Ambil database akun dari memori (kalau kosong, buat wadah baru {})
            let databaseAkun = JSON.parse(localStorage.getItem('ichigo_database_akun')) || {};

            if (isLoginMode) {
                // ================= PROSES LOGIN =================
                // Cek apakah email ada dan passwordnya cocok
                if (databaseAkun[email] && databaseAkun[email] === password) {
                    alert("Berhasil masuk! Selamat datang di Ichigo Store.");
                    
                    // Simpan data bahwa user ini sedang aktif
                    localStorage.setItem('ichigo_user_aktif', email);
                    
                    modalLogin.style.display = 'none'; // Tutup pop-up
                    window.location.reload(); // Refresh untuk mengubah tombol header
                } else {
                    alert("Gagal masuk! Email belum terdaftar atau password salah.");
                }
            } else {
                // ================= PROSES DAFTAR =================
                // Cek apakah email sudah pernah dipakai
                if (databaseAkun[email]) {
                    alert("Email ini sudah terdaftar! Silakan pilih menu 'Masuk di sini'.");
                } else {
                    // Simpan email sebagai kunci, dan password sebagai isinya
                    databaseAkun[email] = password;
                    
                    // Simpan kembali ke dalam brankas browser
                    localStorage.setItem('ichigo_database_akun', JSON.stringify(databaseAkun));
                    
                    alert("Pendaftaran Berhasil! Silakan Login menggunakan akun baru Anda.");
                    
                    // Otomatis ubah tampilan kembali ke form Login
                    authSwitchLink.click(); 
                }
            }
        });
    }
}