let currentIndex = 0;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
function showSlide(e) {
    e < 1 ? e = totalSlides - 1 : e >= totalSlides && (e = 0);
    currentIndex = e;
    let l = -(390 * currentIndex) + "px";
    slider.style.transform = "translateX(" + l + ")";
}
function nextSlide() {
    showSlide(currentIndex + 1);
}
function prevSlide() {
    showSlide(currentIndex - 1);
}
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.bi-list');
    var mobileNav = document.querySelector('.mobile-menu .menu-menu-1-container');
    menuIcon.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileNav.classList.remove('show');
        }
    });
});

function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}
const handleScrollOrResizeDebounced = debounce(handleScrollOrResize, 100);
window.addEventListener('scroll', handleScrollOrResize);
window.addEventListener('resize', handleScrollOrResize);

function handleScrollOrResize() {
    let scrollPosition = window.scrollY || window.pageYOffset;
    let menu = document.querySelector('.menu-content-wrapper');
    let topnav = document.querySelector('.topbar-content-wrapper');
    let isHomePage = document.querySelector('.home');
    if (scrollPosition > 100 || window.innerWidth < 1000) {
        menu.style.backgroundColor = '#000';
        if (!isHomePage) {
            topnav.style.display = 'none';
        }
    } else {
        menu.style.backgroundColor = '';
        if (!isHomePage) {
            topnav.style.display = 'block';
        }
    }
}

// Run the function on initial load as well
handleScrollOrResize();
