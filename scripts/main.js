const menu = document.getElementById('menu')
const close = document.getElementById('close')
const modeToggle = document.getElementById('mode-toggle')
const navBar = document.getElementById('nav-bar')
const navLinks = document.getElementById('nav-links')

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    close.classList.toggle('active')
    navLinks.classList.toggle('active')
})
