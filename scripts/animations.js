const animteToBottomElements = document.querySelectorAll(".animate-to-bottom");
const animateToTopElements = document.querySelectorAll(".animate-to-top");
const animateToLeftElements = document.querySelectorAll(".animate-to-left");
const animateToRightElements = document.querySelectorAll(".animate-to-right");

const toBottomObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-to-bottom");
    } else {
      entry.target.classList.remove("show-to-bottom");
    }
  });
});

const toTopObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-to-top");
    } else {
      entry.target.classList.remove("show-to-top");
    }
  });
});

const toLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-to-left");
    } else {
      entry.target.classList.remove("show-to-left");
    }
  });
});

const toRightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
        entry.target.classList.add("show-to-right");
        } else {
        entry.target.classList.remove("show-to-right");
        }
    });
});

animteToBottomElements.forEach((el) => toBottomObserver.observe(el));
animateToTopElements.forEach((el) => toTopObserver.observe(el));
animateToLeftElements.forEach((el) => toLeftObserver.observe(el));
animateToRightElements.forEach((el) => toRightObserver.observe(el));
