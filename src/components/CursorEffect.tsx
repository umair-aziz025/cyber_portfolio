import React, { useEffect } from 'react';

const CursorEffect: React.FC = () => {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile touch trail setup - NO SPOTLIGHT
      let touchTrailArray: Array<{
        x: number;
        y: number;
        element: HTMLElement;
        timestamp: number;
      }> = [];

      // Create touch trail dots
      const createTouchTrailDot = (x: number, y: number) => {
        const dot = document.createElement('div');
        const variants = ['', 'variant-1', 'variant-2'];
        const randomVariant = variants[Math.floor(Math.random() * variants.length)];
        
        dot.className = `cursor-trail ${randomVariant}`;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        
        document.body.appendChild(dot);
        
        // Store trail element
        touchTrailArray.push({
          x,
          y,
          element: dot,
          timestamp: Date.now()
        });
        
        // Remove dot after animation
        setTimeout(() => {
          if (dot.parentNode) {
            dot.parentNode.removeChild(dot);
          }
          // Clean up trail array
          touchTrailArray = touchTrailArray.filter(trail => trail.element !== dot);
        }, 1000); // Slightly faster fade for mobile
      };

      // Handle touch events
      let lastTouchTime = 0;
      const touchInterval = 60; // Create trail every 60ms for smoother mobile experience
      
      const handleTouchMove = (e: TouchEvent) => {
        // DON'T prevent default - allow normal scrolling
        const now = Date.now();
        
        if (now - lastTouchTime > touchInterval) {
          const touch = e.touches[0];
          if (touch) {
            createTouchTrailDot(touch.clientX, touch.clientY);
            lastTouchTime = now;
          }
        }
      };

      const handleTouchStart = (e: TouchEvent) => {
        const touch = e.touches[0];
        if (touch) {
          createTouchTrailDot(touch.clientX, touch.clientY);
        }
      };

      // Add touch event listeners with passive: true for better scrolling performance
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('touchstart', handleTouchStart, { passive: true });

      // Cleanup for mobile
      return () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchstart', handleTouchStart);
        
        // Clean up any remaining touch trail elements
        touchTrailArray.forEach(trail => {
          if (trail.element.parentNode) {
            trail.element.parentNode.removeChild(trail.element);
          }
        });
      };
    } else {
      // DESKTOP ONLY - Full cursor + spotlight experience
      let mouseX = 0;
      let mouseY = 0;
      let lastMouseX = 0;
      let lastMouseY = 0;
      let isMoving = false;
      let moveTimeout: number;
      let glowElement: HTMLElement | null = null;
      let spotlightOverlay: HTMLElement | null = null;
      
      let trailArray: Array<{
        x: number;
        y: number;
        element: HTMLElement;
        timestamp: number;
      }> = [];

      // Create spotlight overlay element
      const createSpotlightOverlay = () => {
        const overlay = document.createElement('div');
        overlay.className = 'spotlight-overlay';
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle 150px at 50% 50%, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.7) 100%);
          pointer-events: none;
          z-index: 9997;
          opacity: 0;
          transition: opacity 0.8s ease;
        `;
        document.body.appendChild(overlay);
        return overlay;
      };

      // Create glow area element
      const createGlowArea = () => {
        const glow = document.createElement('div');
        glow.className = 'cursor-glow-area';
        glow.style.cssText = `
          position: fixed;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(0, 255, 136, 0.3) 0%, rgba(0, 255, 136, 0.15) 40%, rgba(0, 255, 136, 0.05) 70%, transparent 100%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          opacity: 0;
          transition: opacity 0.5s ease;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 60px rgba(0, 255, 136, 0.4), 0 0 100px rgba(0, 255, 136, 0.2);
        `;
        document.body.appendChild(glow);
        return glow;
      };

      // Handle mouse movement
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Check if actually moving
        const moved = Math.abs(mouseX - lastMouseX) > 2 || Math.abs(mouseY - lastMouseY) > 2;
        
        if (moved) {
          isMoving = true;
          lastMouseX = mouseX;
          lastMouseY = mouseY;
          
          // Hide spotlight and glow when moving
          if (glowElement) {
            glowElement.style.opacity = '0';
          }
          if (spotlightOverlay) {
            spotlightOverlay.style.opacity = '0';
          }
          
          // Clear existing timeout
          if (moveTimeout) {
            clearTimeout(moveTimeout);
          }
          // Set timeout to detect when cursor stops
          moveTimeout = setTimeout(() => {
            isMoving = false;
            showSpotlight();
          }, 1000); // Show spotlight after 1 second of no movement
        }
      };

      // Show spotlight effect when cursor stops
      const showSpotlight = () => {
        if (!glowElement) {
          glowElement = createGlowArea();
        }
        if (!spotlightOverlay) {
          spotlightOverlay = createSpotlightOverlay();
        }
        
        // Position the glow area
        glowElement.style.left = `${mouseX}px`;
        glowElement.style.top = `${mouseY}px`;
        glowElement.style.opacity = '1';
        
        // Update spotlight position and show it
        const spotlightX = (mouseX / window.innerWidth) * 100;
        const spotlightY = (mouseY / window.innerHeight) * 100;
        
        spotlightOverlay.style.background = `radial-gradient(circle 150px at ${spotlightX}% ${spotlightY}%, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.7) 100%)`;
        spotlightOverlay.style.opacity = '1';
      };

      // Create trail dots
      const createTrailDot = (x: number, y: number) => {
        const dot = document.createElement('div');
        const variants = ['', 'variant-1', 'variant-2'];
        const randomVariant = variants[Math.floor(Math.random() * variants.length)];
        
        dot.className = `cursor-trail ${randomVariant}`;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        
        document.body.appendChild(dot);
        
        // Store trail element
        trailArray.push({
          x,
          y,
          element: dot,
          timestamp: Date.now()
        });
        
        // Remove dot after animation
        setTimeout(() => {
          if (dot.parentNode) {
            dot.parentNode.removeChild(dot);
          }
          // Clean up trail array
          trailArray = trailArray.filter(trail => trail.element !== dot);
        }, 1200);
      };

      // Trail creation logic - only when moving
      let lastTrailTime = 0;
      const trailInterval = 80; // Create trail every 80ms
      
      const handleTrailCreation = () => {
        const now = Date.now();
        
        // Only create trails when cursor is moving
        if (isMoving && now - lastTrailTime > trailInterval) {
          createTrailDot(mouseX, mouseY);
          lastTrailTime = now;
        }
        
        requestAnimationFrame(handleTrailCreation);
      };

      // Initialize desktop events
      document.addEventListener('mousemove', handleMouseMove);
      
      // Start trail animation
      handleTrailCreation();

      // Cleanup for desktop
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        
        if (moveTimeout) {
          clearTimeout(moveTimeout);
        }
        
        if (glowElement && glowElement.parentNode) {
          glowElement.parentNode.removeChild(glowElement);
        }
        
        if (spotlightOverlay && spotlightOverlay.parentNode) {
          spotlightOverlay.parentNode.removeChild(spotlightOverlay);
        }
        
        // Clean up any remaining trail elements
        trailArray.forEach(trail => {
          if (trail.element.parentNode) {
            trail.element.parentNode.removeChild(trail.element);
          }
        });
      };
    }
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default CursorEffect;
