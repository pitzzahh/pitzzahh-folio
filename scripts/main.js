window.addEventListener("resize", checkDeviceWidth)

let isActive = false

function openNav() {
  isActive = !isActive

  if (isActive) {
    document.getElementById("nav-links").style.display = "flex"
    document.querySelector("header").style.background = "#050505"
  } else {
    document.getElementById("nav-links").style.display = "none"
    document.querySelector("header").style.background = "none"
  }
}

function checkDeviceWidth() {
  if (window.matchMedia("(min-width: 550px)").matches) {
    document.getElementById("nav-links").style.display = "flex"
  } else {
    document.getElementById("nav-links").style.display = "none"
    document.querySelector("header").style.background = "none"
    document.querySelector(".hamburger").classList.remove("is-active")
  }
}
