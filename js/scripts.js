document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     NAVBAR SHRINK
  ========================= */
  const navbarShrink = () => {
    const navbar = document.querySelector('#mainNav');
    if (!navbar) return;

    navbar.classList.toggle('navbar-shrink', window.scrollY !== 0);
  };

  navbarShrink();
  document.addEventListener('scroll', navbarShrink);


  /* =========================
     BOOTSTRAP SCROLLSPY
  ========================= */
  const mainNav = document.querySelector('#mainNav');

  if (mainNav && window.bootstrap) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }


  /* =========================
     RESPONSIVE NAV
  ========================= */
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');

  if (navbarToggler) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });
  }


  /* =========================
     ACCORDION
  ========================= */
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;

      document.querySelectorAll('.accordion-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const c = other.querySelector('.accordion-content');
          if (c) c.style.maxHeight = null;
        }
      });

      item.classList.toggle('active');

      if (content) {
        content.style.maxHeight = item.classList.contains('active')
          ? content.scrollHeight + 'px'
          : null;
      }
    });
  });


  /* =========================
     LIGHTBOX
  ========================= */
  const images = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  if (images.length && lightbox && lightboxImg) {

    let currentIndex = 0;
    const imageArray = Array.from(images);

    const open = (src, i) => {
      currentIndex = i;
      lightboxImg.src = src;
      lightbox.classList.add('active');
    };

    const close = () => lightbox.classList.remove('active');

    const next = () => {
      currentIndex = (currentIndex + 1) % imageArray.length;
      lightboxImg.src = imageArray[currentIndex].src;
    };

    const prev = () => {
      currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
      lightboxImg.src = imageArray[currentIndex].src;
    };

    images.forEach((img, i) => img.addEventListener('click', () => open(img.src, i)));

    closeBtn?.addEventListener('click', close);
    nextBtn?.addEventListener('click', next);
    prevBtn?.addEventListener('click', prev);

    lightbox?.addEventListener('click', e => {
      if (e.target === lightbox) close();
    });
  }


  /* =========================
     SERVICE UI
  ========================= */
  const serviceType = document.getElementById('serviceType');
  const weddingOptions = document.getElementById('weddingOptions');
  const eventOptions = document.getElementById('eventOptions');
  const eventPackage = document.getElementById('eventPackage');
  const hoursField = document.getElementById('hoursField');

  const hideAll = () => {
    weddingOptions && (weddingOptions.style.display = 'none');
    eventOptions && (eventOptions.style.display = 'none');
    hoursField && (hoursField.style.display = 'none');
  };

  serviceType?.addEventListener('change', () => {
    hideAll();

    if (serviceType.value === 'wedding' && weddingOptions) {
      weddingOptions.style.display = 'block';
    }

    if (serviceType.value === 'event' && eventOptions) {
      eventOptions.style.display = 'block';
    }
  });

  eventPackage?.addEventListener('change', () => {
    if (!hoursField) return;

    hoursField.style.display =
      eventPackage.value === 'hourly' ? 'block' : 'none';
  });


  /* =========================
     BOOKING FORM
  ========================= */
  const bookingForm = document.querySelector(".booking-form");

  if (!bookingForm) {
    console.warn("Booking form not found — check your selector or HTML.");
    return;
  }

  bookingForm.reset(); // clears browser-restored values on page load

  bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xrejlqyl", {
        method: "POST",
        body: new FormData(bookingForm),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("Thank you! We will get back to you soon.");
        bookingForm.reset();  // ✅ correct variable
        window.location.href = "#contact";
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Network error. Please check your connection and try again.");
    }
  });


  /* =========================
     INQUIRY FORM
  ========================= */
  // const inquiryForm = document.querySelector(".inquiry-form");

  // inquiryForm?.addEventListener("submit", async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("https://formspree.io/f/xrejlqyl", {
  //       method: "POST",
  //       body: new FormData(inquiryForm),
  //       headers: { Accept: "application/json" }
  //     });

      // if (response.ok) {
      //   alert("Thank you! We will get back to you soon.");
      //   inquiryForm.reset();

        // setTimeout(() => {
        //   window.location.href = "#contact";
        // }, 500);

  //       if (response.ok) {
  //         alert("Thank you! We will get back to you soon.");
  //         inquiryForm.reset();
  //         window.location.href = "#contact";
  //       }
        

  //     } else {
  //       alert("Failed to send inquiry.");
  //     }
  //   } catch (err) {
  //     alert("Network error.");
  //   }
  // });


  // const inquiryForm = document.querySelector(".inquiry-form");

  // inquiryForm?.addEventListener("submit", async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("https://formspree.io/f/xrejlqyl", {
  //       method: "POST",
  //       body: new FormData(inquiryForm),
  //       headers: { Accept: "application/json" }
  //     });

  //     if (response.ok) {

  //       inquiryForm.reset();

  //       // waits until user clicks OK
  //       alert("Thank you! We will get back to you soon.");

  //       // redirect AFTER OK
  //       window.location.href = "#contact";

  //     } else {
  //       alert("Failed to send inquiry.");
  //     }

  //   } catch (err) {
  //     alert("Network error.");
  //   }
  // });


  const inquiryForm = document.querySelector(".inquiry-form");

  if (!inquiryForm) {
    console.warn("Inquiry form not found — check your selector or HTML.");
    return;
  }

  inquiryForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xrejlqyl", {
        method: "POST",
        body: new FormData(inquiryForm),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("Thank you! We will get back to you soon.");
        inquiryForm.reset();
        window.location.href = "#contact";
      } else {
        alert("Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Network error. Please check your connection and try again.");
    }
  });
});