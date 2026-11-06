/**
 * Plastiracks — Modern Vanilla JavaScript Controller
 * Handles mobile navigation, Web3Forms submission, and dynamic RFQ helpers.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initWeb3FormHandler();
  initUrlParamAutoFill();
  initCurrentYear();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
    toggleBtn.innerHTML = isOpen
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
    }
  });
}

/**
 * Web3Forms Serverless Submission Handler
 * Routes form safely to GoDaddy inbox without exposing credentials
 */
function initWeb3FormHandler() {
  const form = document.getElementById("rfqForm") || document.getElementById("contactForm");
  const statusBanner = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Check honeypot field (bot trap)
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
        </svg> Processing Request...
      `;
    }

    if (statusBanner) {
      statusBanner.className = "form-status";
      statusBanner.style.display = "none";
    }

    try {
      const formData = new FormData(form);
      const jsonObject = Object.fromEntries(formData.entries());

      // Submit to Web3Forms API
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
          statusBanner.className = "form-status success";
          statusBanner.innerHTML = `
            <strong>Inquiry Transmitted Successfully.</strong><br/>
            Thank you! Your technical specifications and RFQ have been routed directly to the Plastiracks engineering team. We will review your load parameters and provide a formal proposal within 1 business day.
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
        statusBanner.className = "form-status error";
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
 * Auto-select product in RFQ form if query parameter exists (e.g. ?product=cooler-cart)
 */
function initUrlParamAutoFill() {
  const params = new URLSearchParams(window.location.search);
  const productParam = params.get("product");
  const selectElement = document.getElementById("productCategory");

  if (productParam && selectElement) {
    const options = Array.from(selectElement.options);
    const matchingOption = options.find((opt) => opt.value.toLowerCase() === productParam.toLowerCase());
    if (matchingOption) {
      selectElement.value = matchingOption.value;
    }
  }
}

/**
 * Dynamic Copyright Year
 */
function initCurrentYear() {
  const yearElements = document.querySelectorAll(".current-year");
  const year = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = year;
  });
}
