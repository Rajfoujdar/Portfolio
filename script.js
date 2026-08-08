// 1. Contact Form Submit Message Logic (Formspree Fetch)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Shukriya! Aapka message bhej diya gaya hai. Main jaldi hi aapko reply karunga!');
                form.reset();
            } else {
                alert('Oops! Message bhejne mein dikkat hui. Kripya dubara koshish karein.');
            }
        } catch (error) {
            alert('Oops! Message bhejne mein dikkat hui. Kripya dubara koshish karein.');
        }
    });
}

// 2. Dark / Light Mode Toggle Logic
const themeBtn = document.getElementById('theme-btn');

if (themeBtn) {
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            themeBtn.textContent = '🌙 Dark Mode';
        } else {
            themeBtn.textContent = '☀️ Light Mode';
        }
    });
}

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
