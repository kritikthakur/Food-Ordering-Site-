// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation for Reservation and Contact Forms
function validateForm(form) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date?.value;  // use optional chaining for safety
    const time = form.time?.value;

    if (!name || !email || !phone || !date || !time) {
        alert("Please fill in all the required fields.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

// Attach form validation if the forms exist
const reservationForm = document.querySelector('.reservation-form form');
if (reservationForm) {
    reservationForm.addEventListener('submit', function (e) {
        if (!validateForm(this)) {
            e.preventDefault();
        }
    });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        if (!validateForm(this)) {
            e.preventDefault();
        }
    });
}

// Toggle mobile navigation menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navMenu = document.querySelector('nav ul');

if (mobileMenuButton && navMenu) {
    mobileMenuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close the mobile menu when a link is clicked
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
}

// Reveal Elements on Scroll Animation
const revealElements = document.querySelectorAll('.about, .menu, .reservations, .testimonials, .gallery, .contact, .footer');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 1s ease';
        } else {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
        }
    });
}

// Initialize on load and on scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
