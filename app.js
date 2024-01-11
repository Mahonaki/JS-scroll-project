

// ****** SET DATE ******
// set up a dinamic date for the copyright
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ****** CLOSE LINKS ******
const navToggle = document.querySelector('.nav_toggle');
const linksContainer = document.querySelector('.links_container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // linksContainer.classList.toggle("show_links");
    // dinamically set the height of the menu
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    }
    else {
        linksContainer.style.height = 0;
    }
});
// ****** FIXED NAVBAR ******
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top_link');

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed_nav');
    } else {
        navbar.classList.remove('fixed_nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show_link');
    } else {
        topLink.classList.remove('show_link');
    }
});

// ****** SMOOTH SCROLL ******


// ****** SELECT LINKS ******
const scrollLinks = document.querySelectorAll('.scroll_link');

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spot 
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed_nav');
        let position = element.offsetTop - navHeight;
        if(!fixedNav) {
            position = position - navHeight;
        }
        if(navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height = 0;
    });
});