const animteFromBottomElements = document.querySelectorAll(".animate-from-bottom");
const animateFromTopElements = document.querySelectorAll(".animate-from-top");
const animateFromLeftElements = document.querySelectorAll(".animate-from-left");
const animateFromRightElements = document.querySelectorAll(".animate-from-right");

const projectElements = document.querySelectorAll(".project");

const fromBottomObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-from-bottom");
    } else {
      entry.target.classList.remove("show-from-bottom");
    }
  });
});

const fromTopObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-from-top");
    } else {
      entry.target.classList.remove("show-from-top");
    }
  });
});

const fromLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-from-left");
    } else {
      entry.target.classList.remove("show-from-left");
    }
  });
});

const fromRightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
        entry.target.classList.add("show-from-right");
        } else {
        entry.target.classList.remove("show-from-right");
        }
    });
});

animteFromBottomElements.forEach((el) => fromBottomObserver.observe(el));
animateFromTopElements.forEach((el) => fromTopObserver.observe(el));
animateFromLeftElements.forEach((el) => fromLeftObserver.observe(el));
animateFromRightElements.forEach((el) => fromRightObserver.observe(el));


projectElements.forEach((el) => {
  el.addEventListener('touchstart', () => {
    el.classList.add('hover');
  });
  el.addEventListener('touchend', () => {
    el.classList.remove('hover');
  });
});