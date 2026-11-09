/**
 * Kendu-Inspired Spatial Scaffold — JavaScript Interactions
 * Handles sticky header scroll states, the signature expanding accordion,
 * background video playback resilience, and touch interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initAccordionShowcase();
  initVideoPlayback();
  initCtaForm();
  initDynamicYear();
});

/**
 * Sticky Header Scroll Observer
 * Transitions header from floating transparent to frosted white on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector(".kd-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Kendu Expanding Accordion Showcase Controller
 * Supports hover on desktop, tap on mobile/touch, and keyboard navigation
 */
function initAccordionShowcase() {
  const panels = document.querySelectorAll(".kd-accordion-panel");
  if (!panels.length) return;

  // Make the first panel active initially for instant visual impact
  panels[0].classList.add("is-active");

  panels.forEach((panel) => {
    // Mouse hover activates panel
    panel.addEventListener("mouseenter", () => {
      panels.forEach((p) => p.classList.remove("is-active"));
      panel.classList.add("is-active");
    });

    // Touch / Click activation for mobile devices
    panel.addEventListener("click", () => {
      panels.forEach((p) => p.classList.remove("is-active"));
      panel.classList.add("is-active");
    });

    // Keyboard accessibility (Tab + Enter/Space)
    panel.setAttribute("tabindex", "0");
    panel.setAttribute("role", "button");
    panel.setAttribute("aria-label", "Expand project showcase panel");

    panel.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        panels.forEach((p) => p.classList.remove("is-active"));
        panel.classList.add("is-active");
      }
    });
  });

  // When mouse leaves the entire accordion container, return focus to first panel
  const container = document.querySelector(".kd-accordion-wrapper");
  if (container) {
    container.addEventListener("mouseleave", () => {
      panels.forEach((p) => p.classList.remove("is-active"));
      panels[0].classList.add("is-active");
    });
  }
}

/**
 * Video Autoplay Safety Controller
 * Ensures background videos loop quietly without blocking or console warnings
 */
function initVideoPlayback() {
  const videos = document.querySelectorAll(".kd-video-bg");
  videos.forEach((video) => {
    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay prevented by browser power saver; fallback poster remains visible
        video.classList.add("autoplay-blocked");
      });
    }
  });
}

/**
 * Minimalist CTA Inquiry Form Handler
 */
function initCtaForm() {
  const form = document.getElementById("kdInquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type='email']");
    const btn = form.querySelector("button[type='submit']");
    if (!input || !input.value) return;

    const originalText = btn.innerHTML;
    btn.innerHTML = "REQUEST RECEIVED ✓";
    btn.style.backgroundColor = "#ffffff";
    btn.style.color = "#0b0d11";
    input.value = "";
    input.placeholder = "Thank you! Our spatial team will be in touch.";

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.backgroundColor = "";
      btn.style.color = "";
      input.placeholder = "Enter your business email...";
    }, 4000);
  });
}

/**
 * Dynamic Copyright Year
 */
function initDynamicYear() {
  const yearElements = document.querySelectorAll(".kd-year");
  const year = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = year;
  });
}
