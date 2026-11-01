document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById('countdown');
    
    if (countdownElement) {
        // Atur waktu (misal: 23 jam 59 menit 59 detik)
        let totalSeconds = 23 * 3600 + 59 * 60 + 59;
        
        const updateCountdown = () => {
            if (totalSeconds <= 0) {
                countdownElement.textContent = "00:00:00";
                return;
            }
            
            // Konversi dari detik ke Jam, Menit, Detik
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            // Format agar selalu 2 digit (misal: 09 bukan 9)
            const formatTime = (time) => time.toString().padStart(2, '0');
            
            countdownElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
            totalSeconds--;
        };
        
        // Update setiap 1000 milidetik (1 detik)
        setInterval(updateCountdown, 1000);
        updateCountdown();
    }
    // --- Logika Banner Slider ---
// --- Logika Banner Slider Lengkap ---
const sliderContainer = document.getElementById('sliderContainer');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoSlideInterval;

function updateSlider() {
    // Bersihkan class
    slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Tentukan index Kiri dan Kanan
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;

    // Terapkan class ke slide
    slides[currentIndex].classList.add('active');
    slides[prevIndex].classList.add('prev');
    slides[nextIndex].classList.add('next');

    // Terapkan class ke dot yang sesuai
    dots[currentIndex].classList.add('active');
}

// Fungsi pindah manual lewat dots
window.goToSlide = function(index) {
    currentIndex = index;
    updateSlider();
    resetAutoSlide(); // Reset timer agar tidak double geser
};

// Fungsi ke slide selanjutnya (Next)
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    resetAutoSlide();
}

// Fungsi ke slide sebelumnya (Prev)
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
    resetAutoSlide();
}

// --- Deteksi Geser Manual (Swipe & Drag) ---
let startX = 0;
let endX = 0;
let isDragging = false;

// 1. Mencegah browser menarik gambar sebagai file
const slideImages = document.querySelectorAll('.slide img');
slideImages.forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

// 2. Untuk Layar Sentuh (HP)
sliderContainer.addEventListener('touchstart', e => {
    startX = e.changedTouches[0].screenX;
});
sliderContainer.addEventListener('touchend', e => {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
});

// 3. Untuk Mouse (PC)
sliderContainer.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.screenX;
});

sliderContainer.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    endX = e.screenX;
    handleSwipe();
});

// Jika kursor keluar dari area banner saat masih menahan klik
sliderContainer.addEventListener('mouseleave', e => {
    if (!isDragging) return;
    isDragging = false;
    endX = e.screenX;
    handleSwipe();
});

// Menentukan arah geseran
function handleSwipe() {
    const batasGeser = 40; // Sensitivitas geseran (makin kecil makin sensitif)
    
    if (startX - endX > batasGeser) {
        nextSlide(); // Geser ke kiri
    } else if (endX - startX > batasGeser) {
        prevSlide(); // Geser ke kanan
    }
}

// --- Timer Auto Slide ---
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Inisialisasi awal
updateSlider();
startAutoSlide();
// --- Deteksi Geser (Drag to Scroll) pada Area Produk Flash Sale ---
const flashGrid = document.querySelector('.grid-flash');
let isDownFlash = false;
let startXFlash;
let scrollLeftFlash;

// --- Deteksi Geser (Drag to Scroll) Untuk Semua Area Produk ---
// Mencari semua area yang punya class .grid-flash atau .grid-akun
const scrollAreas = document.querySelectorAll('.grid-flash, .grid-akun');

scrollAreas.forEach(area => {
    let isDown = false;
    let startX;
    let scrollLeft;

    area.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - area.offsetLeft;
        scrollLeft = area.scrollLeft;
        area.style.scrollBehavior = 'auto';
    });

    area.addEventListener('mouseleave', () => {
        isDown = false;
        area.style.scrollBehavior = 'smooth';
    });

    area.addEventListener('mouseup', () => {
        isDown = false;
        area.style.scrollBehavior = 'smooth';
    });

    area.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - area.offsetLeft;
        const walk = (x - startX) * 1.5; // Sensitivitas geser
        area.scrollLeft = scrollLeft - walk;
    });
});
});