function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');

    // Toggle the active state of the menu
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('active');
}
