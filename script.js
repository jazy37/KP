 // Funkcja do toggle mobile menu
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.getElementById('hamburger');
            
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        // Zamknij menu przy kliknięciu w link
        document.querySelectorAll('.nav-mobile .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobileMenu').classList.remove('active');
                document.getElementById('hamburger').classList.remove('active');
            });
        });

        // Zamknij menu przy kliknięciu poza menu
        document.addEventListener('click', (e) => {
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.getElementById('hamburger');
            const toggle = document.querySelector('.mobile-menu-toggle');
            
            if (!toggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

         function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000; // 2 sekundy
            const step = target / (duration / 16); // 60 FPS
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current);
            }, 16);
        }

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animuj licznik
                    const counter = entry.target.querySelector('.counter');
                    if (counter && !counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        animateCounter(counter);
                    }
                    
                    // Pokaż element
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Obserwuj wszystkie stat-items
        document.querySelectorAll('.stat-item').forEach(item => {
            observer.observe(item);
        });