document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     NAVBAR SHRINK
  ========================= */
  const navbarShrink = () => {
    const navbar = document.querySelector('#mainNav');
    if (!navbar) return;

    if (window.scrollY === 0) {
      navbar.classList.remove('navbar-shrink');
    } else {
      navbar.classList.add('navbar-shrink');
    }
  };

  navbarShrink();
  document.addEventListener('scroll', navbarShrink);


  /* =========================
     BOOTSTRAP SCROLLSPY
  ========================= */
  const mainNav = document.querySelector('#mainNav');

  if (mainNav && typeof bootstrap !== 'undefined') {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }


  /* =========================
     RESPONSIVE NAV COLLAPSE
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

      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });


  /* =========================
     GALLERY LIGHTBOX
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

    const openLightbox = (src, index) => {
      currentIndex = index;
      lightboxImg.src = src;
      lightbox.classList.add('active');
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
    };

    const showNext = () => {
      currentIndex = (currentIndex + 1) % imageArray.length;
      lightboxImg.src = imageArray[currentIndex].src;
    };

    const showPrev = () => {
      currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
      lightboxImg.src = imageArray[currentIndex].src;
    };

    images.forEach((img, index) => {
      img.addEventListener('click', () => openLightbox(img.src, index));
    });

    closeBtn?.addEventListener('click', closeLightbox);
    nextBtn?.addEventListener('click', showNext);
    prevBtn?.addEventListener('click', showPrev);

    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });
  }


  /* =========================
     SERVICE FORM DYNAMIC UI
  ========================= */
  const serviceType = document.getElementById('serviceType');
  const weddingOptions = document.getElementById('weddingOptions');
  const eventOptions = document.getElementById('eventOptions');
  const eventPackage = document.getElementById('eventPackage');
  const hoursField = document.getElementById('hoursField');

  const hideAll = () => {
    weddingOptions?.style && (weddingOptions.style.display = 'none');
    eventOptions?.style && (eventOptions.style.display = 'none');
    hoursField?.style && (hoursField.style.display = 'none');
  };

  if (serviceType) {
    serviceType.addEventListener('change', () => {
      hideAll();

      if (serviceType.value === 'wedding') {
        weddingOptions.style.display = 'block';
      } else if (serviceType.value === 'event') {
        eventOptions.style.display = 'block';
      }
    });
  }

  if (eventPackage) {
    eventPackage.addEventListener('change', () => {
      if (eventPackage.value === 'hourly') {
        hoursField.style.display = 'block';
      } else {
        hoursField.style.display = 'none';
      }
    });
  }


  /* =========================
     INQUIRY FORM (MODAL)
  ========================= */
  const inquiryForm = document.querySelector('#inquiryModal form');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(inquiryForm);

      try {
        const response = await fetch(inquiryForm.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          inquiryForm.reset();

          const modalEl = document.getElementById('inquiryModal');
          const modal = bootstrap?.Modal?.getInstance(modalEl);
          modal?.hide();

          alert('Thank you! We will get back to you soon.');
        } else {
          alert('Failed to send inquiry.');
        }
      } catch (err) {
        console.error(err);
        alert('Something went wrong.');
      }
    });
  }


  /* =========================
     BOOKING FORM (FORMSPREE)
  ========================= */
    document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.querySelector(".booking-form");

    if (!bookingForm) {
      console.warn("Booking form not found");
      return;
    }

    bookingForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      console.log("Submit intercepted");

      try {
        const response = await fetch("https://formspree.io/f/xrejlqyl", {
          method: "POST",
          body: new FormData(bookingForm),
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          alert("Booking submitted successfully!");
          bookingForm.reset();
        } else {
          alert("Something went wrong.");
        }
      } catch (err) {
        alert("Network error.");
      }
    });
  });

});
  