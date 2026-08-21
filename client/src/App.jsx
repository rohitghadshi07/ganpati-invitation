import React, { useState, useEffect, useRef } from 'react';
import configData from './config';
import { PeacockFeather } from './components/PeacockFeather';
import { PeacockFeathersBackground } from './components/PeacockFeathersBackground';
import bappaImg from './assets/bappa.jpeg';
import './index.css';

function App() {
  const [config] = useState(configData);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showCurtainDom, setShowCurtainDom] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!config) return;
    const targetDate = new Date(config.countdownDate).getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' });
        return false;
      }
      
      setTimeLeft({
        days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        mins: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        secs: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0')
      });
      return true;
    };

    updateCountdown();
    const interval = setInterval(() => {
      if (!updateCountdown()) {
        clearInterval(interval);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [config]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log(e));
    }
    setMusicPlaying(!musicPlaying);
  };

  const handleOpenCurtain = () => {
    setCurtainOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log(e));
      setMusicPlaying(true);
    }
    // Completely remove curtains from DOM after transition finishes (1.8s)
    setTimeout(() => {
      setShowCurtainDom(false);
    }, 1800);
  };

  const shareInvitation = () => {
    if (!config) return;
    const shareText = `गणपती बाप्पा मोरया! 🙏 You are cordially invited to celebrate Makhanchor Ganpati with us.`;
    if (navigator.share) {
      navigator.share({
        title: 'गणपती बाप्पा मोरया! 🙏',
        text: shareText,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      alert('Link copied to clipboard! 📋');
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  if (!config) return <div style={{textAlign: 'center', padding: '50px'}}>Loading...</div>;

  return (
    <>
      {/* ── CURTAIN ANIMATION ── */}
      {showCurtainDom && (
        <div className={`curtain-container ${curtainOpen ? 'open' : ''}`} onClick={handleOpenCurtain} style={{cursor: 'pointer'}}>
          <div className="curtain-panel curtain-left"></div>
          <div className="curtain-panel curtain-right"></div>
          <div className="curtain-content">
            <i className="fa-regular fa-hand-pointer curtain-hand"></i>
          </div>
        </div>
      )}

      <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`} id="navbar" role="banner">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>🙏 गणपती बाप्पा मोरया!</a>
          <button id="nav-toggle" className="nav-toggle" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul id="nav-menu" className={`nav-menu ${menuOpen ? 'show' : ''}`}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a></li>
            <li><a href="#invitation" onClick={(e) => { e.preventDefault(); scrollTo('invitation'); }}>Invitation</a></li>
            <li><a href="#schedule" onClick={(e) => { e.preventDefault(); scrollTo('schedule'); }}>Schedule</a></li>
            <li><a href="#family" onClick={(e) => { e.preventDefault(); scrollTo('family'); }}>Family</a></li>
            <li><a href="#venue" onClick={(e) => { e.preventDefault(); scrollTo('venue'); }}>Venue</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* ── REALISTIC PEACOCK FEATHERS (MOR PANKH) BACKGROUND ── */}
      <PeacockFeathersBackground count={12} />

      <section id="welcome" className="welcome-screen" onClick={() => scrollTo('home')}>
        <div className="welcome-overlay"></div>
        <div className="welcome-content">
          <div className="diya diya-left"><i className="fa-solid fa-fire"></i></div>
          <div className="welcome-text">
            <p className="shree-ganesh" id="shloka">|| श्री गणेशाय नमः ||</p>
            <p className="welcome-subtitle">आपणास सहकुटुंब सप्रेम निमंत्रण</p>
          </div>
          <div className="diya diya-right"><i className="fa-solid fa-fire"></i></div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollTo('home')}>
          <span>Scroll Down</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </section>

      <main id="home">
        <section className="hero-section">
          <div className="container hero-content">
            <div className="hero-image-wrapper reveal">
              <div className="hero-backdrop"></div>
              <img className="hero-image" src={bappaImg} alt="Ganpati Bappa" loading="lazy" />
            </div>
            <div className="hero-intro reveal">
              <h1 className="hero-title">गणपती बाप्पा मोरया!</h1>
              <h2 className="hero-subtitle">माखणचोर गणपती</h2>
              <p className="hero-desc">With immense joy and devotion, we invite you to seek the blessings of Lord Ganesha and celebrate the divine presence of Bappa with us.</p>
              
              <div className="countdown-section">
                <p className="countdown-label">गणपती बाप्पा येत आहेत</p>
                <div className="countdown-wrapper">
                  <div className="countdown-item"><span className="count">{timeLeft.days}</span><span className="label">Days</span></div>
                  <div className="countdown-item"><span className="count">{timeLeft.hours}</span><span className="label">Hours</span></div>
                  <div className="countdown-item"><span className="count">{timeLeft.mins}</span><span className="label">Mins</span></div>
                  <div className="countdown-item"><span className="count">{timeLeft.secs}</span><span className="label">Secs</span></div>
                </div>
              </div>
              <a className="btn btn-primary" href="#invitation" onClick={(e) => { e.preventDefault(); scrollTo('invitation'); }}>
                <i className="fa-solid fa-envelope-open-text"></i> View Invitation
              </a>
            </div>
          </div>
        </section>
        
        <div className="section-divider"></div>

        <section id="invitation" className="invitation-section">
          <div className="container">
            <div className="card-glass reveal">
              <span className="card-corner card-corner-tl">❋</span>
              <span className="card-corner card-corner-tr">❋</span>
              <div className="invitation-feather-badge">
                <PeacockFeather size={48} idPrefix="invite-card-feather" />
              </div>
              <h4 className="mantra">|| श्री गणेशाय नमः ||</h4>
              <p className="invitation-greeting">आपणास सहकुटुंब सप्रेम निमंत्रण</p>
              <h3 className="invitation-heading">You are cordially invited to celebrate<br/>Makhanchor Ganpati with us.</h3>
              <div className="host-details">
                <p><i className="fa-solid fa-user-group"></i> <strong>{config.hostName}</strong></p>
                <p><i className="fa-solid fa-location-dot"></i> {config.venue}</p>
                <p>
                  <i className="fa-solid fa-phone"></i> 
                  <a href="tel:919833321453">Rohit: +91 9833321453</a> &nbsp;|&nbsp; 
                  <a href="tel:919833344444">Rahul: +91 9833344444</a>
                </p>
              </div>
              <span className="card-corner card-corner-bl">❋</span>
              <span className="card-corner card-corner-br">❋</span>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="schedule" className="schedule-section">
          <div className="container">
            <h2 className="section-title reveal">कार्यक्रम</h2>
            <p className="section-subtitle reveal">Event Schedule</p>
            <div className="timeline">
              {config.events.map((evt, i) => (
                <div key={i} className="timeline-item reveal" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="timeline-icon"><i className={`fa-solid ${evt.icon}`}></i></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{evt.title}</h4>
                    <p className="timeline-subtitle">{evt.title_en}</p>
                    <div className="timeline-meta">
                      <span className="timeline-date"><i className="fa-regular fa-calendar"></i> {evt.date}</span>
                      <span className="timeline-time"><i className="fa-regular fa-clock"></i> {evt.time}</span>
                    </div>
                    <p className="timeline-desc">{evt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="family" className="family-section">
          <div className="container">
            <h2 className="section-title reveal">कुटुंबाची ओळख</h2>
            <p className="section-subtitle reveal">Our Family</p>
            <div className="family-grid">
              {config.familyMembers.map((member, i) => (
                <div key={i} className="family-card reveal">
                  <div className="family-avatar"><i className="fa-solid fa-user"></i></div>
                  <h4 className="family-name">{member.name}</h4>
                  <p className="family-role">{member.relation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

    
      
        {/* <section id="gallery" className="gallery-section">
          <div className="container">
            <h2 className="section-title reveal">बाप्पा दर्शन</h2>
            <p className="section-subtitle reveal">Photo Gallery</p>
            <div className="gallery-grid">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <figure key={i} className="gallery-item reveal">
                  <img src={`/assets/images/gallery/placeholder-${i}.jpg`} alt={`Bappa darshan ${i}`} loading="lazy" />
                  <div className="gallery-overlay"><i className="fa-solid fa-expand"></i></div>
                </figure>
              ))}
            </div>
          </div>
        </section> */}


        <div className="section-divider"></div>

        <section id="venue" className="venue-section">
          <div className="container">
            <h2 className="section-title reveal">स्थळ</h2>
            <p className="section-subtitle reveal">Venue</p>
            <div className="venue-card reveal">
              <div className="address-details">
                <h4><i className="fa-solid fa-location-dot"></i> {config.hostName}</h4>
                <address>{config.venue}</address>
              </div>
              <div className="map-wrapper">
                <iframe src={`https://maps.google.com/maps?q=${encodeURIComponent(config.venue)}&output=embed`} allowFullScreen loading="lazy" title="Venue Location" style={{width: '100%', height: '100%', border: 0}}></iframe>
              </div>
              <div className="venue-actions">
                <a className="btn btn-primary" href={`https://www.google.com/maps/search/${encodeURIComponent(config.venue)}`} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-diamond-turn-right"></i> Get Directions
                </a>
                <button className="btn btn-outline share-btn" onClick={shareInvitation}>
                  <i className="fa-solid fa-share-nodes"></i> Share Location
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title reveal">संपर्क</h2>
            <p className="section-subtitle reveal">Get in Touch</p>
            <div className="contact-grid" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '850px', margin: '0 auto' }}>
              {config.hosts.map((host, idx) => (
                <div key={idx} className="contact-card reveal" style={{ flex: '1 1 300px', maxWidth: '380px' }}>
                  <div className="contact-icon"><i className="fa-solid fa-phone-volume"></i></div>
                  <h3>{host.name}</h3>
                  <p><a href={`tel:${host.phoneDigits}`}>{host.phone}</a></p>
                  <div className="contact-actions">
                    <a className="btn btn-whatsapp" href={`https://wa.me/${host.phoneDigits}?text=${encodeURIComponent('गणपती बाप्पा मोरया! 🙏 I would love to visit for darshan.')}`} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-whatsapp"></i> Message on WhatsApp
                    </a>
                    <a className="btn btn-primary" href={`tel:${host.phoneDigits}`}>
                      <i className="fa-solid fa-phone"></i> Call {host.name.split(' ')[0]}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
              <button className="btn btn-outline share-btn" onClick={shareInvitation}>
                <i className="fa-solid fa-share-nodes"></i> Share Invitation
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="container footer-inner">
          <div className="closing">
            <p className="footer-shloka">|| गणपती बाप्पा मोरया ||</p>
            <h3 className="footer-blessing">🙏 गणपती बाप्पा मोरया!</h3>
            <p className="footer-host">With love, {config.hostName} &amp; Family</p>
          </div>
          <div className="footer-contact" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', margin: '1rem 0' }}>
            {config.hosts.map((host, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <p><a href={`tel:${host.phoneDigits}`}><strong>{host.name}</strong>: {host.phone}</a></p>
                <p style={{ marginTop: '0.3rem' }}><a className="btn-whatsapp-sm" href={`https://wa.me/${host.phoneDigits}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i> WhatsApp</a></p>
              </div>
            ))}
          </div>
          <p className="footer-credits">Made with ❤️ &amp; devotion</p>
        </div>
      </footer>

      <button id="music-toggle" className={`music-toggle ${musicPlaying ? 'playing' : ''}`} onClick={toggleMusic}>
        <i className={`fa-solid ${musicPlaying ? 'fa-volume-high' : 'fa-volume-xmark'}`}></i>
      </button>

      <audio id="bg-music" ref={audioRef} loop preload="auto">
        <source src="/assets/audio/ganpati.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}

export default App;
