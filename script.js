// إنشاء الجسيمات المتحركة
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // حجم عشوائي
        const size = Math.random() * 5 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // موقع عشوائي
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // شفافية عشوائية
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // مدة حركة عشوائية
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        // تأخير عشوائي
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
    }
}

// تحكم في السلايدر ثلاثي الأبعاد
function init3DSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            
            // حساب زاوية الدوران لكل شريحة
            const angle = (index - currentSlide) * 120;
            slide.style.transform = `rotateY(${angle}deg) translateZ(300px)`;
        });
        
        slides[currentSlide].classList.add('active');
        currentSlide = (currentSlide + 1) % slides.length;
    }
    
    // بدء التشغيل والتكرار
    showSlide();
    setInterval(showSlide, 3000);
}

// تحديث شريط التقدم
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    let progress = 0;
    
    function animate() {
        progress = (progress + 1) % 101;
        progressBar.style.setProperty('--progress', `${progress}%`);
        requestAnimationFrame(animate);
    }
    
    animate();
}

// حماية الصفحة
function protectPage() {
    // منع النقر الأيمن
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    
    // منع النسخ
    document.addEventListener('copy', (e) => {
        e.preventDefault();
    });
    
    // منع فتح أدوات المطورين
    document.onkeydown = function(e) {
        if (
            e.keyCode == 123 || // F12
            (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
            (e.ctrlKey && e.keyCode == 85) // Ctrl+U
        ) {
            e.preventDefault();
            return false;
        }
    };
}

// تهيئة كل شيء عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    createParticles();
    init3DSlider();
    updateProgressBar();
    protectPage();
});