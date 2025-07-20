import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const PHRASES = ['Get Hecked.',
  '>>> leaking credentials...',
  'tcpdump > soul.log',
  'rm -rf /fear',
  'alias trace="you"',
  '404: morality not found'];

const LetterGlitch = ({
  glitchColors = ['#720455', '#c286ff', '#FFE1E0'],
  className = '',
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const letters = useRef([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef(null);
  const lastGlitchTime = useRef(Date.now());

  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  const lettersAndSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:<>,.?/~'.split('');

  const getRandomChar = () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  const getRandomColor = () => glitchColors[Math.floor(Math.random() * glitchColors.length)];

  const hexToRgb = (hex) => {
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
  };

  const interpolateColor = (start, end, factor) => {
    const r = Math.round(start.r + (end.r - start.r) * factor);
    const g = Math.round(start.g + (end.g - start.g) * factor);
    const b = Math.round(start.b + (end.b - start.b) * factor);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const calculateGrid = (width, height) => ({
    columns: Math.ceil(width / charWidth),
    rows: Math.ceil(height / charHeight),
  });

  const initializeLetters = (columns, rows) => {
    grid.current = { columns, rows };
    const total = columns * rows;
    letters.current = Array.from({ length: total }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
    }));
  };
const resizeCanvas = () => {
  const canvas = canvasRef.current;
  const parent = canvas?.parentElement;
  if (!canvas || !parent) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = parent.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;

  const ctx = canvas.getContext('2d');
  context.current = ctx;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const { columns, rows } = calculateGrid(rect.width, rect.height);
  initializeLetters(columns, rows);
  drawLetters();
};


  const drawLetters = () => {
    const ctx = context.current;
    const { width, height } = canvasRef.current.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';
    letters.current.forEach((letter, i) => {
      const x = (i % grid.current.columns) * charWidth;
      const y = Math.floor(i / grid.current.columns) * charHeight;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  };

  const updateLetters = () => {
    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));
    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      if (!letters.current[index]) continue;
      letters.current[index].char = getRandomChar();
      letters.current[index].targetColor = getRandomColor();
      if (!smooth) {
        letters.current[index].color = letters.current[index].targetColor;
        letters.current[index].colorProgress = 1;
      } else {
        letters.current[index].colorProgress = 0;
      }
    }
  };

  const handleSmoothTransitions = () => {
    let needsRedraw = false;
    letters.current.forEach((letter) => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05;
        if (letter.colorProgress > 1) letter.colorProgress = 1;
        const start = hexToRgb(letter.color);
        const end = hexToRgb(letter.targetColor);
        if (start && end) {
          letter.color = interpolateColor(start, end, letter.colorProgress);
          needsRedraw = true;
        }
      }
    });
    if (needsRedraw) drawLetters();
  };

  const animate = () => {
    if (Date.now() - lastGlitchTime.current >= glitchSpeed) {
      updateLetters();
      drawLetters();
      lastGlitchTime.current = Date.now();
    }
    if (smooth) handleSmoothTransitions();
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    context.current = canvas.getContext('2d');
    resizeCanvas();
    animate();
    const handleResize = () => {
      cancelAnimationFrame(animationRef.current);
      resizeCanvas();
      animate();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Typing loop effect
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[textIndex];
    let typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      setTypedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentPhrase.slice(0, prev.length + 1)
      );

      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % PHRASES.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting]);
   const [containerHeight, setContainerHeight] = useState('60vh');

useEffect(() => {
  const updateHeight = () => {
    setContainerHeight(window.innerWidth < 768 ? '60vh' : '40vh');
  };
  updateHeight();
  window.addEventListener('resize', updateHeight);
  return () => window.removeEventListener('resize', updateHeight);
}, []);

  // Style Objects
  const containerStyle = {
  position: 'relative',
  width: '100%',
  height: containerHeight,
  minHeight: '40%', // Ensures a base height on small screens
  backgroundColor: 'transparent',
  overflow: 'hidden',
};


  

  const canvasStyle = {
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
};


  const centeredLinkStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Ndot, monospace',
    fontSize: '1.5rem',
    color: '#c286ff',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    border: 'none',
    padding: '0.5em 1.2em',
    borderRadius: '8px',
    letterSpacing: '0.1em',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    zIndex: 4,
  };

  const outerVignetteStyle = {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%', height: '100%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
  };

  const centerVignetteStyle = {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%', height: '100%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
  };

 return (
  <motion.div
    className={className}
    style={{
      ...containerStyle,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}
    initial={{ opacity: 0, y: -80 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 80 }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    viewport={{ once: true }}
  >
    <canvas ref={canvasRef} style={canvasStyle} />
    <a
      href="https://cyber-port-chi.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      style={centeredLinkStyle}
    >
      {typedText}
      <span className="cursor">|</span>
    </a>
    {outerVignette && <div style={outerVignetteStyle} />}
    {centerVignette && <div style={centerVignetteStyle} />}
  </motion.div>
);
};

export default LetterGlitch;
