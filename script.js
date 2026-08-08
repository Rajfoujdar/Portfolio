// 1. Contact Form Submit Message Logic
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Page reload hone se rokta hai
    
    alert("Shukriya! Aapka message bhej diya gaya hai. Main jaldi hi aapko reply karunga!");
    contactForm.reset(); // Form clear karna
});

// 2. Dark / Light Mode Toggle Logic
const themeBtn = document.getElementById('theme-btn');

if (themeBtn) {
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            themeBtn.textContent = '☀️ Dark Mode';
        } else {
            themeBtn.textContent = '🌙 Light Mode';
        }
    });
}
