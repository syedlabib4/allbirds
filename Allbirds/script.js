 const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    let index = 0;
    const totalSlides = carousel.children.length;
    
    updateCarousel();
    
    prevBtn.addEventListener("click", () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
    
    nextBtn.addEventListener("click", () => {
        index = (index + 1) % totalSlides;
        updateCarousel();
    });
    
    function updateCarousel() {
        const slideWidth = carousel.children[0].offsetWidth;
        carousel.style.transform = `translateX(-${index * slideWidth}px)`;
    }
    
   
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    mobileMenuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
    
   
    window.addEventListener('resize', updateCarousel);
