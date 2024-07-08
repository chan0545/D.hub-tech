// Toggle icon navigator
let menuIcon = document.querySelector('.menu-icon'); // Added '.' for class selector
let navbar = document.querySelector('.navbar'); // Added '.' for class selector

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); // Changed 'bx-x' to 'active' to show/hide the navbar
}

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Fixed typo: changed 'classlist' to 'classList'
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky header
    let header = document.querySelector('header'); // Fixed typo: changed 'quesryselector' to 'querySelector'

    header.classList.toggle('sticky', window.scrollY > 100); // Fixed typo: changed 'classlist' to 'classList'

    // Hide the menu icon and the navbar when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
