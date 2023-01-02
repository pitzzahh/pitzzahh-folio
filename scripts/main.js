function openNav() {
    document.getElementById("menu-button").style.display = "none";
    document.getElementById("close").style.display = "flex";
    document.getElementById("nav-links").style.display = "flex";
    document.querySelector('header').style.background = "#050505";
}

function closeNav() {
    document.getElementById("menu-button").style.display = "flex";
    document.getElementById("close").style.display = "none";
    document.getElementById("nav-links").style.display = "none";
    document.querySelector('header').style.background = "none";
}

window.addEventListener('resize', checkDeviceWidth);

function checkDeviceWidth() {
    if (window.matchMedia("(min-width: 550px)").matches) {
        document.getElementById("close").style.display = "none";
        document.getElementById("menu-button").style.display = "none";
        document.getElementById("nav-links").style.display = "flex";
    } else {
        document.getElementById("menu-button").style.display = "flex";
        document.getElementById("nav-links").style.display = "none";
        document.querySelector('header').style.background = "none";
    }
}