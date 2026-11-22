// ==========================================
// LOAD FOOTER OTOMATIS KE SEMUA HALAMAN
// ==========================================

const FOOTER_FALLBACK = `
<footer class="footer-checkout">
    <div class="footer-col brand-col">
        <img src="images/logo.png" alt="Logo" class="footer-logo">
        <p>ICHIGOSTORE</p>
        <small>© 2026 IchigoStore</small>
    </div>
    <div class="footer-col">
        <h4>Social Media</h4>
        <div class="social-icons">
            <span>📷</span> <span>🎵</span> <span>📺</span> <span>🌐</span> <span>📘</span>
        </div>
    </div>
    <div class="footer-col">
        <h4>Pembayaran</h4>
        <div class="pay-icons-footer">
            <img src="images/sopipey.png" alt="ShopeePay">
            <img src="images/dana.png" alt="DANA">
            <img src="images/QRIS.png" alt="QRIS">
        </div>
    </div>
    <div class="footer-col contact-col">
        <h4>Kontak kami</h4>
        <p>support@ichigostore.com</p>
        <p>WhatsApp +62 812345678</p>
        <p>Telegram @ichigostore._cs</p>
    </div>
</footer>`;

document.addEventListener("DOMContentLoaded", async () => {
    const tempatFooter = document.getElementById("tempat-footer");
    if (!tempatFooter) return;

    let htmlFooter;
    try {
        const response = await fetch("footer.html");
        if (!response.ok) throw new Error("HTTP " + response.status);
        htmlFooter = await response.text();
    } catch (error) {
        console.warn("Gagal memuat footer.html, memakai footer cadangan:", error);
        htmlFooter = FOOTER_FALLBACK;
    }

    tempatFooter.innerHTML = htmlFooter;
});