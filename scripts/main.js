function openNav() {
    document.getElementById("menu-button").style.display = "none";
    document.getElementById("close").style.display = "flex";
    document.getElementById("nav-links").style.display = "flex";
    document.querySelector('header').style.background = "#050505";
    document.querySelector('header').style.height = "100vh";
}

function closeNav() {
    document.getElementById("menu-button").style.display = "flex";
    document.getElementById("close").style.display = "none";
    document.getElementById("nav-links").style.display = "none";
    document.querySelector('header').style.background = "none";
    document.querySelector('header').style.height = "0";
}
