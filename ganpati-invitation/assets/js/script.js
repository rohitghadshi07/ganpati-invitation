/* ==========================================================================
   Ganpati Invitation – Premium Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ────────────────────────────────────────────
     0. CURTAIN ANIMATION
  ──────────────────────────────────────────── */
  const curtain = document.getElementById('curtain');
  
  if (curtain) {
    curtain.addEventListener('click', function() {
      curtain.classList.add('open');
      
      // Try play music on open
      if (typeof tryPlayMusic === 'function') {
        tryPlayMusic();
      } else {
        const bgMusic = document.getElementById('bg-music');
        const musicToggle = document.getElementById('music-toggle');
        if (bgMusic) {
          bgMusic.play().then(() => {
            if (musicToggle) {
               musicToggle.classList.add('playing');
               musicToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            }
          }).catch(e => console.log(e));
        }
      }

      // Remove from DOM after animation completes to allow interaction below
      setTimeout(() => {
        curtain.remove();
      }, 1800);
    });
  }


  /* ────────────────────────────────────────────
     1. WELCOME SCREEN – auto-scroll past
  ──────────────────────────────────────────── */
  const welcomeScreen = document.getElementById('welcome');
  const scrollIndicator = document.getElementById('scroll-indicator');

  function dismissWelcome() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', dismissWelcome);
  }
  if (welcomeScreen) {
    welcomeScreen.addEventListener('click', function (e) {
      if (e.target === welcomeScreen || e.target.closest('.welcome-content')) {
        dismissWelcome();
      }
    });
  }

  /* ────────────────────────────────────────────
     2. SCROLL REVEAL – IntersectionObserver
  ──────────────────────────────────────────── */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) { el.classList.add('active'); });
  }

  /* ────────────────────────────────────────────
     3. NAVBAR – scroll effect & active section
  ──────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section[id]');

  function handleNavScroll() {
    if (!navbar) return;
    if (window.scrollY > 100) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }

    // Highlight active section
    let current = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active-link');
      }
    });
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ────────────────────────────────────────────
     4. MOBILE NAV TOGGLE
  ──────────────────────────────────────────── */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('show');
    });
  }

  /* ────────────────────────────────────────────
     5. SMOOTH SCROLL for anchor links
  ──────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile nav
        if (navMenu && navMenu.classList.contains('show')) {
          navMenu.classList.remove('show');
          if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  /* ────────────────────────────────────────────
     6. MUSIC TOGGLE
  ──────────────────────────────────────────── */
  const musicToggle = document.getElementById('music-toggle');
  const bgMusic = document.getElementById('bg-music');
  let musicStarted = false;

  function tryPlayMusic() {
    if (!bgMusic || musicStarted) return;
    bgMusic.play().then(function () {
      musicStarted = true;
      if (musicToggle) {
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      }
    }).catch(function () { /* autoplay blocked — user will click */ });
  }

  if (musicToggle && bgMusic) {
    musicToggle.addEventListener('click', function () {
      if (bgMusic.paused) {
        bgMusic.play().then(function () {
          musicToggle.classList.add('playing');
          musicToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
          musicStarted = true;
        }).catch(function () {});
      } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
      }
    });
  }

  // Try autoplay on first user interaction
  document.addEventListener('click', function () { tryPlayMusic(); }, { once: true });
  document.addEventListener('scroll', function () { tryPlayMusic(); }, { once: true });

  /* ────────────────────────────────────────────
     7. COUNTDOWN TIMER
  ──────────────────────────────────────────── */
  const countdownEl = document.getElementById('countdown');

  if (countdownEl) {
    var targetDate = new Date(countdownEl.getAttribute('data-target')).getTime();
    var cdDays = document.getElementById('cd-days');
    var cdHours = document.getElementById('cd-hours');
    var cdMins = document.getElementById('cd-mins');
    var cdSecs = document.getElementById('cd-secs');

    function updateCountdown() {
      var now = Date.now();
      var diff = targetDate - now;

      if (diff <= 0) {
        if (cdDays) cdDays.textContent = '🎉';
        if (cdHours) cdHours.textContent = '';
        if (cdMins) cdMins.textContent = '';
        if (cdSecs) cdSecs.textContent = '';
        var labels = countdownEl.querySelectorAll('.label');
        labels.forEach(function (l) { l.textContent = ''; });
        labels[0] && (labels[0].textContent = 'गणपती बाप्पा आले!');
        return;
      }

      var days = Math.floor(diff / 86400000);
      var hours = Math.floor((diff % 86400000) / 3600000);
      var mins = Math.floor((diff % 3600000) / 60000);
      var secs = Math.floor((diff % 60000) / 1000);

      if (cdDays) cdDays.textContent = String(days).padStart(2, '0');
      if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
      if (cdMins) cdMins.textContent = String(mins).padStart(2, '0');
      if (cdSecs) cdSecs.textContent = String(secs).padStart(2, '0');

      requestAnimationFrame(function () { setTimeout(updateCountdown, 1000); });
    }

    updateCountdown();
  }

  /* ────────────────────────────────────────────
     8. FLOATING PETALS
  ──────────────────────────────────────────── */
  const petalsContainer = document.getElementById('petals');

  if (petalsContainer) {
    var petalCount = window.innerWidth < 768 ? 10 : 20;
    for (var i = 0; i < petalCount; i++) {
      var petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = (Math.random() * 100) + '%';
      petal.style.animationDuration = (8 + Math.random() * 12) + 's, ' + (3 + Math.random() * 4) + 's';
      petal.style.animationDelay = (Math.random() * 10) + 's';
      petal.style.opacity = (0.3 + Math.random() * 0.5).toFixed(2);
      petal.style.width = (10 + Math.random() * 10) + 'px';
      petal.style.height = (14 + Math.random() * 12) + 'px';
      petalsContainer.appendChild(petal);
    }
  }

  /* ────────────────────────────────────────────
     9. PHOTO GALLERY LIGHTBOX
  ──────────────────────────────────────────── */
  var galleryImages = [];
  var currentImageIndex = 0;

  document.querySelectorAll('.lightbox').forEach(function (link, index) {
    galleryImages.push(link.href);
    link.addEventListener('click', function (e) {
      e.preventDefault();
      currentImageIndex = index;
      openLightbox(this.href, this.querySelector('img') ? this.querySelector('img').alt : '');
    });
  });

  function openLightbox(src, alt) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeBtn.addEventListener('click', function () { closeLightbox(overlay); });

    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';

    overlay.appendChild(closeBtn);
    overlay.appendChild(img);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox(overlay);
    });

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Keyboard navigation
    overlay._keyHandler = function (e) {
      if (e.key === 'Escape') closeLightbox(overlay);
      if (e.key === 'ArrowRight' && currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
        img.src = galleryImages[currentImageIndex];
      }
      if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
        currentImageIndex--;
        img.src = galleryImages[currentImageIndex];
      }
    };
    document.addEventListener('keydown', overlay._keyHandler);

    // Touch swipe
    var touchStartX = 0;
    overlay.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    overlay.addEventListener('touchend', function (e) {
      var diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff < 0 && currentImageIndex < galleryImages.length - 1) {
          currentImageIndex++;
          img.src = galleryImages[currentImageIndex];
        } else if (diff > 0 && currentImageIndex > 0) {
          currentImageIndex--;
          img.src = galleryImages[currentImageIndex];
        }
      }
    }, { passive: true });
  }

  function closeLightbox(overlay) {
    if (overlay._keyHandler) document.removeEventListener('keydown', overlay._keyHandler);
    document.body.removeChild(overlay);
    document.body.style.overflow = '';
  }

  /* ────────────────────────────────────────────
     10. SHARE FUNCTIONALITY
  ──────────────────────────────────────────── */
  document.querySelectorAll('.share-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var shareText = this.getAttribute('data-share-text') || 'गणपती बाप्पा मोरया! 🙏';
      var shareUrl = window.location.href;

      if (navigator.share) {
        navigator.share({
          title: 'Ganpati Bappa Morya! 🙏',
          text: shareText,
          url: shareUrl,
        }).catch(function () {});
      } else {
        // Fallback: copy to clipboard
        var textToCopy = shareText + ' ' + shareUrl;
        navigator.clipboard.writeText(textToCopy).then(function () {
          alert('Link copied to clipboard! 📋');
        }).catch(function () {
          // Final fallback
          prompt('Copy this link:', textToCopy);
        });
      }
    });
  });

  /* ────────────────────────────────────────────
     11. PARALLAX (desktop only)
  ──────────────────────────────────────────── */
  if (window.innerWidth >= 768) {
    var heroBackdrop = document.querySelector('.hero-backdrop');
    window.addEventListener('scroll', function () {
      if (heroBackdrop) {
        var scrolled = window.scrollY;
        heroBackdrop.style.transform = 'translate(-50%, -50%) scale(' + (1 + scrolled * 0.0003) + ')';
      }
    }, { passive: true });
  }

});
