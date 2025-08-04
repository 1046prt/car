const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");
mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileToggle.innerHTML = navMenu.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Hero Slider
const heroSlides = document.querySelectorAll(".hero-slider .slide");
const heroDots = document.querySelectorAll(".slider-nav .slider-dot");
let currentHeroSlide = 0;

function showHeroSlide(index) {
  heroSlides.forEach((slide) => slide.classList.remove("active"));
  heroDots.forEach((dot) => dot.classList.remove("active"));

  heroSlides[index].classList.add("active");
  heroDots[index].classList.add("active");
  currentHeroSlide = index;
}

heroDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIndex = parseInt(dot.getAttribute("data-slide"));
    showHeroSlide(slideIndex);
  });
});

// Auto-rotate hero slider
setInterval(() => {
  currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
  showHeroSlide(currentHeroSlide);
}, 6000);

// Dashboard Slider
const dashboardSlides = document.querySelectorAll(
  ".dashboard-slider .dashboard-slide"
);
const dashboardDots = document.querySelectorAll(
  ".dashboard-nav .dashboard-dot"
);
let currentDashboardSlide = 0;

function showDashboardSlide(index) {
  dashboardSlides.forEach((slide) => slide.classList.remove("active"));
  dashboardDots.forEach((dot) => dot.classList.remove("active"));

  dashboardSlides[index].classList.add("active");
  dashboardDots[index].classList.add("active");
  currentDashboardSlide = index;
}

dashboardDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIndex = parseInt(dot.getAttribute("data-slide"));
    showDashboardSlide(slideIndex);
  });
});

// Auto-rotate dashboard slider
setInterval(() => {
  currentDashboardSlide = (currentDashboardSlide + 1) % dashboardSlides.length;
  showDashboardSlide(currentDashboardSlide);
}, 5000);

// Testimonial Slider
const testimonialSlides = document.querySelectorAll(
  ".testimonial-slider .testimonial-slide"
);
const testimonialDots = document.querySelectorAll(
  ".testimonial-nav .testimonial-dot"
);
let currentTestimonialSlide = 0;

function showTestimonialSlide(index) {
  testimonialSlides.forEach((slide) => slide.classList.remove("active"));
  testimonialDots.forEach((dot) => dot.classList.remove("active"));

  testimonialSlides[index].classList.add("active");
  testimonialDots[index].classList.add("active");
  currentTestimonialSlide = index;
}

testimonialDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIndex = parseInt(dot.getAttribute("data-slide"));
    showTestimonialSlide(slideIndex);
  });
});

// Auto-rotate testimonial slider
setInterval(() => {
  currentTestimonialSlide =
    (currentTestimonialSlide + 1) % testimonialSlides.length;
  showTestimonialSlide(currentTestimonialSlide);
}, 8000);

// Header Scroll Effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Scroll Animation
const animateElements = document.querySelectorAll(".animate-on-scroll");

function checkScroll() {
  animateElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("animated");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

// Counter Animation for Stats
function animateCounter(element, target, duration) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      clearInterval(timer);
      current = target;
    }
    element.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

function initCounters() {
  const stat1 = document.getElementById("stat1");
  const stat2 = document.getElementById("stat2");
  const stat3 = document.getElementById("stat3");
  const stat4 = document.getElementById("stat4");

  if (stat1.getBoundingClientRect().top < window.innerHeight - 100) {
    animateCounter(stat1, 1250, 2000);
    animateCounter(stat2, 85, 2000);
    animateCounter(stat3, 18, 2000);
    animateCounter(stat4, 32, 2000);
    window.removeEventListener("scroll", initCounters);
  }
}

window.addEventListener("scroll", initCounters);
window.addEventListener("load", initCounters);
