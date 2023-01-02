const menuButton = document.getElementById('menu-button')
const closeButton = document.getElementById('close')
const modeToggle = document.getElementById('mode-toggle')
const navBar = document.getElementById('nav-bar')
const navLinks = document.getElementById('nav-links')

// wont work
menuButton.addEventListener('click', () => {
    console.log('menu clicked')
    navLinks.classList.toggle('active')
})
