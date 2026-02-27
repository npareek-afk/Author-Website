document.addEventListener("DOMContentLoaded", function() {
    // Navigation Menu - Updated 2026-02-27
    const headerHTML = `
    <nav class="navbar">
        <div class="logo">
            <a href="index.html" style="text-decoration:none; color:inherit;">NITIN PAREEK</a>
        </div>
        
        <div class="hamburger" id="hamburger">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>

        <ul class="nav-links" id="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="works.html">Published Work</a></li>
            <li><a href="writings.html">Writings</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="connect.html">Connect</a></li>
        </ul>
    </nav>
    <div class="nav-overlay" id="nav-overlay"></div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('nav-overlay');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
        overlay.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked (useful for mobile)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) toggleMenu();
        });
    });
});
