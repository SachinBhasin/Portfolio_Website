        // Disable right-click
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });

        // Shop Carousel - cycles through images every 5 seconds
        function initCarousel() {
            const carousel = document.getElementById('shopCarousel');
            if (!carousel) return;

            const images = carousel.querySelectorAll('img');
            let currentIndex = 0;

            setInterval(() => {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }, 5000);
        }

        // Initialize on page load
        initCarousel();