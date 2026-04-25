/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
    header.addEventListener("click", () => {

        const currentItem = header.parentElement;
        const content = header.nextElementSibling;

        // Close all other items
        document.querySelectorAll(".accordion-item").forEach(item => {
        if (item !== currentItem) {
            item.classList.remove("active");
            item.querySelector(".accordion-content").style.maxHeight = null;
        }
        });

        // Toggle current item
        currentItem.classList.toggle("active");

        if (currentItem.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        } else {
        content.style.maxHeight = null;
        }

    });
    });



// document.addEventListener("DOMContentLoaded", () => {

//   const images = document.querySelectorAll(".gallery-item");
//   const lightbox = document.getElementById("lightbox");
//   const lightboxImg = document.getElementById("lightboxImg");

//   const closeBtn = document.getElementById("lightboxClose");
//   const nextBtn = document.getElementById("nextBtn");
//   const prevBtn = document.getElementById("prevBtn");

//   if (!lightbox || !lightboxImg || !nextBtn || !prevBtn || !closeBtn) {
//     console.error("❌ Lightbox elements missing");
//     return;
//   }

//   let currentIndex = 0;

//   function showImage() {
//     lightboxImg.src = images[currentIndex].src;
//   }

//   images.forEach((img, index) => {
//     img.addEventListener("click", () => {
//       currentIndex = index;
//       showImage();
//       lightbox.style.display = "flex";
//     });
//   });

//   nextBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage();
//   });

//   prevBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     showImage();
//   });

//   closeBtn.addEventListener("click", () => {
//     lightbox.style.display = "none";
//   });

//   lightbox.addEventListener("click", (e) => {
//     if (e.target === lightbox) {
//       lightbox.style.display = "none";
//     }
//   });

// });


  const images = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentIndex = 0;
  let imageArray = Array.from(images);

  // OPEN LIGHTBOX
  images.forEach((img, index) => {
      img.addEventListener("click", () => {
          currentIndex = index;
          openLightbox(img.src);
      });
  });

  function openLightbox(src) {
      lightboxImg.src = src;
      lightbox.classList.add("active");
  }

  // CLOSE LIGHTBOX
  function closeLightbox() {
      lightbox.classList.remove("active");
  }

  closeBtn.addEventListener("click", closeLightbox);

  // click outside image closes
  lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
          closeLightbox();
      }
  });

  // NEXT IMAGE
  function showNext() {
      currentIndex = (currentIndex + 1) % imageArray.length;
      lightboxImg.src = imageArray[currentIndex].src;
  }

  // PREVIOUS IMAGE
  function showPrev() {
      currentIndex =
          (currentIndex - 1 + imageArray.length) % imageArray.length;
      lightboxImg.src = imageArray[currentIndex].src;
  }

  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  // keyboard support (optional but nice)
  document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("active")) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
  });

});
