/* =====================================================
   Modern Portfolio Interactions
===================================================== */

/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-xmark"></i>'
    : '<i class="fas fa-bars"></i>';
});

/* Close menu after clicking link */

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

/* ================= DARK MODE ================= */

const themeToggle = document.querySelector("#theme-toggle");

const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.remove("fa-sun");

    themeIcon.classList.add("fa-moon");

    localStorage.setItem("theme", "light");
  }
});

/* Remember theme */

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");

  themeIcon.classList.remove("fa-moon");

  themeIcon.classList.add("fa-sun");
}

/* ================= TYPING EFFECT ================= */

const typingText = document.querySelector(".typing-text");

const words = [
  "Full Stack Developer",

  "AI Engineer",

  "Machine Learning Enthusiast",

  "Mechanical Engineer",

  "Software & Engineering Innovator",
];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {
  let currentWord = words[wordIndex];

  if (!deleting) {
    typingText.textContent = currentWord.substring(0, charIndex++);

    if (charIndex > currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex--);

    if (charIndex < 0) {
      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

/* ================= STICKY NAVBAR ================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
  ".section, .service-card, .skill-card, .project-card, .certificate-card, .timeline-item",
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ================= BACK TO TOP ================= */

const scrollTop = document.querySelector("#scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/* ================= CONTACT FORM ================= */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thank you for your message! I will get back to you soon.");

  form.reset();
});

/* ================= CURRENT YEAR ================= */

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
  copyright.innerHTML = `© ${year} Mesafint Tekletsadik. All Rights Reserved.`;
}
