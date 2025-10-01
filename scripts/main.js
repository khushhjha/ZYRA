// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(44, 24, 16, 0.95)';
    } else {
        navbar.style.background = '#2c1810';
    }
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// CTA button click handler
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#collection').scrollIntoView({
        behavior: 'smooth'
    });
});

// Category filtering
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const category = this.dataset.category;
        const products = document.querySelectorAll('.product-card');
        
        products.forEach(product => {
            if (category === 'all' || product.dataset.category === category) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    });
});

