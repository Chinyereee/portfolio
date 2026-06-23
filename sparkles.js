// ============================================================
//  Sparkle Canvas Animation
//  Only used on the home page (index.html)
// ============================================================

const sc   = document.getElementById('sparkleCanvas');
const sctx = sc.getContext('2d');

function rnd(a, b) { return a + Math.random() * (b - a); }

function resizeSC() {
  sc.width  = window.innerWidth;
  sc.height = window.innerHeight;
}
resizeSC();
window.addEventListener('resize', resizeSC);

const SPARK_COLORS = ['#febe65', '#d97706', '#633807', '#946f3b',];

const sparks = Array.from({ length: 120 }, () => ({
  x:       rnd(0, sc.width),
  y:       rnd(0, sc.height),
  size:    rnd(1, 3.5),
  maxOp:   rnd(0.35, 0.9),
  phase:   rnd(0, Math.PI * 2),
  twinkle: rnd(0.6, 1.4),
  color:   SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
  isStar:  Math.random() > 0.6,
}));

function drawStar(x, y, r, color, op) {
  sctx.save();
  sctx.globalAlpha  = op;
  sctx.fillStyle    = color;
  sctx.shadowColor  = color;
  sctx.shadowBlur   = r * 4;
  sctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    const l = i % 2 === 0 ? r : r * 0.35;
    i === 0
      ? sctx.moveTo(x + Math.cos(a) * l, y + Math.sin(a) * l)
      : sctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
  }
  sctx.closePath();
  sctx.fill();
  sctx.restore();
}

function drawDot(x, y, r, color, op) {
  sctx.save();
  sctx.globalAlpha = op;
  sctx.fillStyle   = color;
  sctx.shadowColor = color;
  sctx.shadowBlur  = r * 5;
  sctx.beginPath();
  sctx.arc(x, y, r, 0, Math.PI * 2);
  sctx.fill();
  sctx.restore();
}

let t = 0;
function animateSparks() {
  sctx.clearRect(0, 0, sc.width, sc.height);
  t += 0.016;
  sparks.forEach(s => {
    const op = s.maxOp * (0.5 + 0.5 * Math.sin(t * s.twinkle + s.phase));
    s.isStar
      ? drawStar(s.x, s.y, s.size,       s.color, op)
      : drawDot (s.x, s.y, s.size * 0.6, s.color, op);
  });
  requestAnimationFrame(animateSparks);
}
animateSparks();
