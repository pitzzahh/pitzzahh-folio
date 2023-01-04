window.addEventListener("resize", checkDeviceWidth)
const hiddenElements = document.querySelectorAll(".hidden")
const avatarElement = document.querySelectorAll(".hidden-2")

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-2")
    } else {
      entry.target.classList.remove("show-2")
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el))
avatarElement.forEach((el) => observer2.observe(el))

let isActive = false

function openNav() {
  isActive = !isActive

  if (isActive) {
    document.getElementById("nav-links").style.display = "flex";
    document.querySelector("header").style.background = "#050505";
  } else {
    document.getElementById("nav-links").style.display = "none";
    document.querySelector("header").style.background = "none";
  }
}

function checkDeviceWidth() {
  if (window.matchMedia("(min-width: 550px)").matches) {
    document.getElementById("nav-links").style.display = "flex";
  } else {
    document.getElementById("nav-links").style.display = "none";
    document.querySelector("header").style.background = "none";
  }
}
