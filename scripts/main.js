const menuButton = document.getElementById('menu')
const closeButton = document.getElementById('close')
const modeToggle = document.getElementById('mode-toggle')
const navBar = document.getElementById('nav-bar')
const navLinks = document.getElementById('nav-links')

menuButton.addEventListener('click', () => {
    console.log('menu clicked')
    navLinks.classList.toggle('active')
})
