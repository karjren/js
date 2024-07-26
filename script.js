function MapLoad() {
    var e = document.getElementById("map-loading"),
        n = document.querySelector(".sec-4"),
        d = document.getElementById("map-iframe");
    e.style.display = "block";
    var t = new IntersectionObserver(function(n) {
        n[0].intersectionRatio > 0 && (d.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7683627117544!2d123.88011334520753!3d9.627806506652107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4d46d6b5c2ed%3A0x9efb0657d32c7a39!2sBuddy%20Car%20Rental%20Bohol!5e0!3m2!1sen!2sph!4v1701314193594!5m2!1sen!2sph", e.style.display = "none", t.disconnect())
    }, {
        threshold: .7
    });
    t.observe(n), d.addEventListener("load", function() {
        e.style.display = "none"
    })
}
var isHomePage = document.querySelector(".home-page");
if (isHomePage) {
    MapLoad();
} 	
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
    var i = window.location.href;
    var menuLinks = document.querySelectorAll('.menu ul li a');
    menuLinks.forEach(function(link) {
        var e = link.getAttribute('href');
        if (i.includes(e)) {
            link.parentNode.classList.add('active');
            document.querySelector('.menu ul li:first-child').classList.remove('active');
        } else if (i.endsWith('index.html') || i.endsWith('/')) {
            document.querySelector('.menu ul li:first-child').classList.add('active');
        }
    });
    var menuIcon = document.querySelector('.bi-list');
    var mobileNav = document.querySelector('.mobile-nav');
    menuIcon.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileNav.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var fbLoading = document.getElementById('fb-loading');
    var footer = document.querySelector('footer');
    var fbIframe = document.getElementById('fb_iframe');
    // Show loading indicator initially
    fbLoading.style.display = 'block';
    // Create a waypoint when scrolling to 70% of the footer
    var waypoint = new IntersectionObserver(function(entries) {
        if (entries[0].intersectionRatio > 0) {
            // Set the src attribute of the iframe to load Facebook page plugin
            fbIframe.src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbuddycarrentalbohol&tabs&width=270&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
            
            // Hide loading indicator
            fbLoading.style.display = 'none';

            // Remove the waypoint to prevent multiple loads
            waypoint.disconnect();
    	}
       }, { threshold: 0.7 });
       
		waypoint.observe(footer);

 	fbIframe.addEventListener('load', function() {
        // Hide the loading indicator when the iframe is loaded
        fbLoading.style.display = 'none';
    });

    // Add load event listener to the iframe
    fbIframe.onload = function() {
        // Remove the flex-center class from .fb-page
        document.querySelector('.fb-page').classList.remove('flex-center');
    };
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
    let menu = document.getElementById('main-menu');
    let topnav = document.querySelector('.pages>header .top-bar-cont');
    let isHomePage = document.querySelector('.home-page');
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

