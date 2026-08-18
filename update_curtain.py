import re

with open('client/src/index.css', 'r') as f:
    css = f.read()

curtain_start = '/* ── Curtains Animation ── */'
new_curtain_css = """/* ── Curtains Animation ── */
.curtain-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  overflow: hidden;
  pointer-events: none;
}
.curtain-panel {
  position: relative;
  width: 50%;
  height: 100%;
  /* Beautiful Peacock Velvet Folds */
  background: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 40px,
      rgba(0, 0, 0, 0.5) 50px,
      transparent 60px
    ),
    linear-gradient(90deg, #001F3F 0%, #00695C 25%, #0D47A1 50%, #009688 75%, #001F3F 100%);
  box-shadow: inset 0 0 50px rgba(0,0,0,0.8);
  transition: transform 1.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  pointer-events: auto;
  border-bottom: 15px solid var(--gold);
}
.curtain-panel::before {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100%;
  height: 15px;
  /* Gold fringe effect */
  background: repeating-linear-gradient(
    90deg,
    var(--gold),
    var(--gold) 2px,
    var(--gold-light) 4px,
    transparent 4px,
    transparent 6px
  );
}
.curtain-panel::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15px;
  background: var(--gold-gradient);
  box-shadow: 0 0 25px rgba(212,175,55,0.6);
  z-index: 2;
}
.curtain-left { transform-origin: left; }
.curtain-left::after { right: 0; }
.curtain-right { transform-origin: right; }
.curtain-right::after { left: 0; }

.curtain-container.open .curtain-left { transform: translateX(-100%); }
.curtain-container.open .curtain-right { transform: translateX(100%); }

.curtain-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  text-align: center;
  pointer-events: auto;
  transition: opacity 0.5s ease-out;
}
.curtain-container.open .curtain-content { opacity: 0; pointer-events: none; }

.curtain-btn {
  background: var(--gold-gradient);
  border: 2px solid #fff;
  padding: 15px 40px;
  font-size: 1.6rem;
  border-radius: 50px;
  font-family: var(--font-heading);
  color: var(--bg-dark);
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0,0,0,0.8), inset 0 0 10px rgba(255,255,255,0.5);
  animation: pulse 2s infinite;
  transition: transform 0.3s, filter 0.3s;
}
.curtain-btn:hover { 
  transform: scale(1.08); 
  filter: brightness(1.1);
}
"""

if curtain_start in css:
    css = css[:css.find(curtain_start)] + new_curtain_css
else:
    css = css + "\n" + new_curtain_css

with open('client/src/index.css', 'w') as f:
    f.write(css)

print("Updated client/src/index.css")
