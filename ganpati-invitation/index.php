<?php
require_once __DIR__ . '/config.php';
include __DIR__ . '/includes/header.php';
include __DIR__ . '/includes/navbar.php';
?>


<!-- CURTAIN ANIMATION -->
<div class="curtain-container" id="curtain" style="cursor: pointer;">
  <div class="curtain-panel curtain-left"></div>
  <div class="curtain-panel curtain-right"></div>
  <div class="curtain-content">
    <i class="fa-regular fa-hand-pointer curtain-hand"></i>
  </div>
</div>

<!-- Floating Petals Container -->
<div class="petals-container" id="petals"></div>

<!-- ═══════════════════════════════════════════════ -->
<!-- 1. WELCOME / SPLASH SCREEN                     -->
<!-- ═══════════════════════════════════════════════ -->
<section id="welcome" class="welcome-screen">
  <div class="welcome-overlay"></div>
  <div class="welcome-content">
    <div class="diya diya-left"><i class="fa-solid fa-fire"></i></div>
    <div class="welcome-text">
      <p class="shree-ganesh" id="shloka">|| श्री गणेशाय नमः ||</p>
      <p class="welcome-subtitle">आपणास सहकुटुंब सप्रेम निमंत्रण</p>
    </div>
    <div class="diya diya-right"><i class="fa-solid fa-fire"></i></div>
  </div>
  <div class="scroll-indicator" id="scroll-indicator">
    <span>Scroll Down</span>
    <i class="fa-solid fa-chevron-down"></i>
  </div>
</section>

<!-- ═══════════════════════════════════════════════ -->
<!-- 2. HERO SECTION                                -->
<!-- ═══════════════════════════════════════════════ -->
<main id="home">
<section class="hero-section">
  <div class="container hero-content">
    <div class="hero-image-wrapper reveal">
      <div class="hero-backdrop"></div>
      <img class="hero-image" src="assets/images/ganpati/ganpati-placeholder.png" alt="Ganpati Bappa" loading="lazy">
    </div>
    <div class="hero-intro reveal">
      <h1 class="hero-title">Ganpati Bappa Morya!</h1>
      <h2 class="hero-subtitle">Makhanchor Ganpati</h2>
      <p class="hero-desc">With immense joy and devotion, we invite you to seek the blessings of Lord Ganesha and celebrate the divine presence of Bappa with us.</p>

      <!-- Countdown Timer -->
      <div class="countdown-section">
        <p class="countdown-label">गणपती बाप्पा येत आहेत</p>
        <div class="countdown-wrapper" id="countdown" data-target="<?php echo $countdownDate; ?>">
          <div class="countdown-item">
            <span class="count" id="cd-days">00</span>
            <span class="label">Days</span>
          </div>
          <div class="countdown-item">
            <span class="count" id="cd-hours">00</span>
            <span class="label">Hours</span>
          </div>
          <div class="countdown-item">
            <span class="count" id="cd-mins">00</span>
            <span class="label">Mins</span>
          </div>
          <div class="countdown-item">
            <span class="count" id="cd-secs">00</span>
            <span class="label">Secs</span>
          </div>
        </div>
      </div>

      <a class="btn btn-primary" href="#invitation"><i class="fa-solid fa-envelope-open-text"></i> View Invitation</a>
    </div>
  </div>
</section>

<!-- Section Divider -->
<div class="section-divider"></div>

<!-- ═══════════════════════════════════════════════ -->
<!-- 3. INVITATION CARD                             -->
<!-- ═══════════════════════════════════════════════ -->
<section id="invitation" class="invitation-section">
  <div class="container">
    <div class="card-glass reveal">
      <span class="card-corner card-corner-tl">❋</span>
      <span class="card-corner card-corner-tr">❋</span>

      <h4 class="mantra">|| श्री गणेशाय नमः ||</h4>
      <p class="invitation-greeting">आपणास सहकुटुंब सप्रेम निमंत्रण</p>
      <h3 class="invitation-heading">You are cordially invited to celebrate<br>Makhanchor Ganpati with us.</h3>

      <div class="host-details">
        <p><i class="fa-solid fa-user"></i> <strong><?php echo htmlspecialchars($hostName); ?></strong></p>
        <p><i class="fa-solid fa-location-dot"></i> <?php echo nl2br(htmlspecialchars($venue)); ?></p>
        <p><i class="fa-solid fa-phone"></i> <a href="tel:+<?php echo htmlspecialchars($phoneDigits); ?>"><?php echo htmlspecialchars($phone); ?></a></p>
      </div>

      <span class="card-corner card-corner-bl">❋</span>
      <span class="card-corner card-corner-br">❋</span>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ═══════════════════════════════════════════════ -->
<!-- 4. EVENT SCHEDULE (कार्यक्रम)                   -->
<!-- ═══════════════════════════════════════════════ -->
<section id="schedule" class="schedule-section">
  <div class="container">
    <h2 class="section-title reveal">कार्यक्रम</h2>
    <p class="section-subtitle reveal">Event Schedule</p>

    <div class="timeline">
      <?php foreach ($events as $i => $event): ?>
      <div class="timeline-item reveal" style="animation-delay: <?php echo $i * 0.15; ?>s">
        <div class="timeline-icon">
          <i class="fa-solid <?php echo htmlspecialchars($event['icon']); ?>"></i>
        </div>
        <div class="timeline-content">
          <h4 class="timeline-title"><?php echo htmlspecialchars($event['title']); ?></h4>
          <p class="timeline-subtitle"><?php echo htmlspecialchars($event['title_en']); ?></p>
          <div class="timeline-meta">
            <span class="timeline-date"><i class="fa-regular fa-calendar"></i> <?php echo htmlspecialchars($event['date']); ?></span>
            <span class="timeline-time"><i class="fa-regular fa-clock"></i> <?php echo htmlspecialchars($event['time']); ?></span>
          </div>
          <p class="timeline-desc"><?php echo htmlspecialchars($event['desc']); ?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ═══════════════════════════════════════════════ -->
<!-- 5. FAMILY INTRODUCTION                         -->
<!-- ═══════════════════════════════════════════════ -->
<section id="family" class="family-section">
  <div class="container">
    <h2 class="section-title reveal">कुटुंबाची ओळख</h2>
    <p class="section-subtitle reveal">Our Family</p>
    <div class="family-grid">
      <?php foreach ($familyMembers as $member): ?>
      <div class="family-card reveal">
        <div class="family-avatar"><i class="fa-solid fa-user"></i></div>
        <h4 class="family-name"><?php echo htmlspecialchars($member['name']); ?></h4>
        <p class="family-role"><?php echo htmlspecialchars($member['relation']); ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ═══════════════════════════════════════════════ -->
<!-- 6. MAKHANCHOR SECTION                          -->
<!-- ═══════════════════════════════════════════════ -->
<section id="makhanchor" class="makhanchor-section">
  <div class="container">
    <h2 class="section-title reveal">Makhanchor Bappa</h2>
    <div class="makh-grid reveal">
      <div class="makh-text">
        <p>Our Makhanchor concept celebrates the playful, childlike charm while keeping Lord Ganesha as the heart of the festival. Expect butter-pot motifs, peacock accents, and tasteful Maharashtrian patterns woven into the celebration.</p>
      </div>
      <div class="makh-art">
        <img src="assets/images/ganpati/makhanchor.png" alt="Makhanchor motif" loading="lazy">
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ═══════════════════════════════════════════════ -->
<!-- 7. PHOTO GALLERY                               -->
<!-- ═══════════════════════════════════════════════ -->
<section id="gallery" class="gallery-section">
  <div class="container">
    <h2 class="section-title reveal">बाप्पा दर्शन</h2>
    <p class="section-subtitle reveal">Photo Gallery</p>
    <div class="gallery-grid">
      <?php for($i=1; $i<=6; $i++): ?>
      <figure class="gallery-item reveal">
        <a href="assets/images/gallery/placeholder-<?php echo $i; ?>.jpg" class="lightbox">
          <img src="assets/images/gallery/placeholder-<?php echo $i; ?>.jpg" alt="Bappa darshan <?php echo $i; ?>" loading="lazy">
          <div class="gallery-overlay">
            <i class="fa-solid fa-expand"></i>
          </div>
        </a>
      </figure>
      <?php endfor; ?>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ═══════════════════════════════════════════════ -->
<!-- 8. VENUE & MAP                                 -->
<!-- ═══════════════════════════════════════════════ -->
<section id="venue" class="venue-section">
  <div class="container">
    <h2 class="section-title reveal">स्थळ</h2>
    <p class="section-subtitle reveal">Venue</p>
    <div class="venue-card reveal">
      <div class="address-details">
        <h4><i class="fa-solid fa-location-dot"></i> <?php echo htmlspecialchars($hostName); ?></h4>
        <address><?php echo nl2br(htmlspecialchars($venue)); ?></address>
      </div>
      <div class="map-wrapper">
        <iframe src="<?php echo googleMapsEmbedUrl($venue); ?>"
                allowfullscreen loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Venue Location"></iframe>
      </div>
      <div class="venue-actions">
        <a class="btn btn-primary" href="<?php echo googleMapsSearchUrl($venue); ?>" target="_blank" rel="noopener">
          <i class="fa-solid fa-diamond-turn-right"></i> Get Directions
        </a>
        <button class="btn btn-outline share-btn" data-share-text="Ganpati Darshan at <?php echo htmlspecialchars($venue); ?>">
          <i class="fa-solid fa-share-nodes"></i> Share Location
        </button>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ═══════════════════════════════════════════════ -->
<!-- 9. CONTACT & SHARE                             -->
<!-- ═══════════════════════════════════════════════ -->
<section id="contact" class="contact-section">
  <div class="container">
    <h2 class="section-title reveal">संपर्क</h2>
    <p class="section-subtitle reveal">Get in Touch</p>
    <div class="contact-card reveal">
      <div class="contact-icon"><i class="fa-solid fa-phone-volume"></i></div>
      <h3><?php echo htmlspecialchars($hostName); ?></h3>
      <p><a href="tel:+<?php echo htmlspecialchars($phoneDigits); ?>"><?php echo htmlspecialchars($phone); ?></a></p>

      <div class="contact-actions">
        <a class="btn btn-whatsapp" href="https://wa.me/<?php echo htmlspecialchars($phoneDigits); ?>?text=<?php echo urlencode('गणपती बाप्पा मोरया! 🙏 I would love to visit for darshan.'); ?>" target="_blank" rel="noopener">
          <i class="fa-brands fa-whatsapp"></i> Message on WhatsApp
        </a>
        <button class="btn btn-outline share-btn" data-share-text="गणपती बाप्पा मोरया! 🙏 You are cordially invited to celebrate Makhanchor Ganpati with us. Visit: ">
          <i class="fa-solid fa-share-nodes"></i> Share Invitation
        </button>
      </div>
    </div>
  </div>
</section>

</main>

<?php include __DIR__ . '/includes/footer.php'; ?>
