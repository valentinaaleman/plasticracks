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
  initMobileNav();
  initWeb3FormHandler();
  initUrlParamAutoFill();
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

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector(".kd-menu-toggle");
  const nav = document.querySelector(".kd-nav");
  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
    toggleBtn.innerHTML = isOpen
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !nav.contains(e.target) && nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    }
  });
}

/**
 * Web3Forms Serverless Submission Handler
 * Transmits RFQ specifications directly without exposing server credentials
 */
function initWeb3FormHandler() {
  const form = document.getElementById("rfqForm") || document.getElementById("contactForm");
  const statusBanner = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Check honeypot field
    const honeypot = form.querySelector('input[name="botcheck"]');
    if (honeypot && honeypot.value !== "") {
      console.warn("Spam bot detected.");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : "Submit";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation: spin 1s linear infinite; width: 18px; height: 18px; display: inline-block; vertical-align: middle; margin-right: 6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg> Transmitting Specifications...
      `;
    }

    if (statusBanner) {
      statusBanner.className = "kd-form-status";
      statusBanner.style.display = "none";
    }

    try {
      const formData = new FormData(form);
      const jsonObject = Object.fromEntries(formData.entries());

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(jsonObject),
      });

      const result = await response.json();

      if (response.status === 200 && (result.success || result.message)) {
        if (statusBanner) {
          statusBanner.className = "kd-form-status success";
          statusBanner.innerHTML = `
            <strong>Inquiry Transmitted Successfully.</strong><br/>
            Thank you! Your technical specifications and RFQ have been routed directly to our engineering team. We will review your parameters and provide a formal proposal within 1 business day.
          `;
          statusBanner.style.display = "block";
        }
        form.reset();
      } else {
        throw new Error(result.message || "Failed to submit form.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      if (statusBanner) {
        statusBanner.className = "kd-form-status error";
        statusBanner.innerHTML = `
          <strong>Notice:</strong> ${err.message || "Unable to send inquiry at this time. Please check your network or email us directly at sales@plastiracks.com."}
        `;
        statusBanner.style.display = "block";
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
}

/**
 * URL Parameter Auto-fill for RFQ Category Preselection
 */
function initUrlParamAutoFill() {
  const urlParams = new URLSearchParams(window.location.search);
  const productParam = urlParams.get("product");
  const categorySelect = document.getElementById("productCategory");

  if (productParam && categorySelect) {
    const validOptions = Array.from(categorySelect.options).map((opt) => opt.value);
    if (validOptions.includes(productParam)) {
      categorySelect.value = productParam;
      categorySelect.style.borderColor = "var(--kd-black)";
    }
  }
}

