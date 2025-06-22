import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    console.log('Matrix Background initialized!'); // Debug log

    // Matrix characters (cybersecurity focused)
    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]|\\/-+*=<>()#$%&@!?~`';
    const cybersecurityTerms = ['SEC', 'PWD', 'SSL', 'TLS', 'VPN', 'IDS', 'IPS', 'APT', 'SOC', 'XSS', 'SQL', 'AES', 'RSA', 'PKI', 'IAM', 'MFA', 'DLP', 'EDR', 'SIEM', 'CVE', 'IOC', 'TTPs'];
    
    const fontSize = 16;
    let drops: Array<{
      y: number;
      speed: number;
      length: number;
      chars: string[];
      showTerm: boolean;
      termIndex: number;
    }> = [];

    let currentColumns = 0;
    let isInitialized = false;

    // Initialize drops function
    const initializeDrops = (columns: number) => {
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = {
          y: Math.random() * -100,
          speed: 0.5 + Math.random() * 1.5,
          length: 15 + Math.random() * 15,
          chars: [],
          showTerm: Math.random() > 0.9, // 10% chance to show cybersecurity term
          termIndex: Math.floor(Math.random() * cybersecurityTerms.length)
        };
        
        // Initialize character array for this column
        for (let j = 0; j < drops[i].length; j++) {
          drops[i].chars[j] = characters[Math.floor(Math.random() * characters.length)];
        }
      }
      currentColumns = columns;
      isInitialized = true;
    };

    // Set canvas size - improved to prevent unnecessary reinitialization
    const resizeCanvas = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newColumns = Math.floor(newWidth / fontSize);
      
      // Only resize canvas if size actually changed
      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        console.log(`Canvas resized to: ${canvas.width}x${canvas.height}`);
      }
      
      // Only reinitialize drops if columns changed significantly or not initialized
      if (!isInitialized || Math.abs(newColumns - currentColumns) > 5) {
        console.log(`Reinitializing drops: ${currentColumns} -> ${newColumns}`);
        initializeDrops(newColumns);
      }
    };    // Throttled resize handler to prevent excessive calls on mobile
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 200); // 200ms delay to throttle resize events
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Only draw if drops are initialized
      if (!isInitialized || drops.length === 0) return;
      
      // Create trailing effect with very subtle fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.fillStyle = '#00ff88'; // Bright green for testing

      // Simple test - draw some visible characters
      for (let i = 0; i < Math.min(currentColumns, 20); i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = (Math.sin(Date.now() * 0.001 + i) * 100) + 200;
        ctx.fillText(char, x, y);
      }

      // Draw characters for each column
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        
        // Draw the trail of characters
        for (let j = 0; j < drop.length; j++) {
          const yPos = (drop.y - j) * fontSize;
          
          if (yPos > -fontSize && yPos < canvas.height + fontSize) {
            // Calculate opacity based on position in trail (head is brightest)
            const opacity = j === 0 ? 1 : Math.max(0.1, 1 - (j / drop.length));
            
            // Different shades of green for variety
            let color;
            if (j === 0) {
              color = `rgba(0, 255, 136, ${opacity})`; // Bright green for head
            } else if (j < 3) {
              color = `rgba(0, 204, 106, ${opacity * 0.8})`; // Medium green
            } else {
              color = `rgba(0, 136, 85, ${opacity * 0.6})`; // Darker green
            }
            
            ctx.fillStyle = color;
            
            // Show cybersecurity term occasionally
            if (drop.showTerm && j === 0 && Math.random() > 0.98) {
              ctx.fillText(cybersecurityTerms[drop.termIndex], i * fontSize, yPos);
              drop.termIndex = (drop.termIndex + 1) % cybersecurityTerms.length;
            } else {
              // Randomly change character occasionally
              if (Math.random() > 0.95) {
                drop.chars[j] = characters[Math.floor(Math.random() * characters.length)];
              }
              ctx.fillText(drop.chars[j], i * fontSize, yPos);
            }
          }
        }

        // Move drop down
        drop.y += drop.speed;

        // Reset drop when it goes off screen
        if (drop.y * fontSize > canvas.height + drop.length * fontSize) {
          drop.y = -drop.length;
          drop.speed = 0.5 + Math.random() * 1.5;
          drop.showTerm = Math.random() > 0.9;
          drop.termIndex = Math.floor(Math.random() * cybersecurityTerms.length);
        }
      }
    };

    // Animation loop - slower for subtlety
    const interval = setInterval(draw, 80);    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, []);  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ 
        background: 'transparent',
        opacity: 0.3 // Reduced to 30%
      }}
    />
  );
};

export default MatrixBackground;
