<?php require_once __DIR__ . '/../config.php'; ?>

  <!-- Footer -->
  <footer class="site-footer" id="footer">
    <div class="container footer-inner">
      <div class="closing">
        <p class="footer-shloka">|| गणपती बाप्पा मोरया ||</p>
        <h3 class="footer-blessing">🙏 Ganpati Bappa Morya!</h3>
        <p class="footer-host">With love, <?php echo htmlspecialchars($hostName); ?> &amp; Family</p>
      </div>
      <div class="footer-contact">
        <p><a href="tel:+<?php echo htmlspecialchars($phoneDigits); ?>"><?php echo htmlspecialchars($phone); ?></a></p>
        <p><a class="btn-whatsapp-sm" href="https://wa.me/<?php echo htmlspecialchars($phoneDigits); ?>" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a></p>
      </div>
      <p class="footer-credits">Made with ❤️ &amp; devotion</p>
    </div>
  </footer>

  <!-- Music Toggle -->
  <button id="music-toggle" class="music-toggle" aria-pressed="false" title="Toggle Music">
    <i class="fa-solid fa-volume-high"></i>
  </button>

  <!-- Audio -->
  <audio id="bg-music" loop preload="auto">
    <source src="assets/audio/ganpati.mp3" type="audio/mpeg">
  </audio>

  <script src="assets/js/script.js"></script>
</body>
</html>
