"use client";

import { useEffect, useRef } from "react";

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, speed: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e && e.touches[0] ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e && e.touches[0] ? e.touches[0].clientY : (e as MouseEvent).clientY;
      mouseRef.current.tx = clientX - rect.left;
      mouseRef.current.ty = clientY - rect.top;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMove, { passive: true });
      parent.addEventListener("touchmove", handleMove, { passive: true });
    }

    let phase = 0;
    const waves = [
      { amplitude: 24, frequency: 0.002, speed: 0.45, color: "rgba(124, 58, 237, 0.25)" },  // Purple wave
      { amplitude: 16, frequency: 0.0035, speed: -0.3, color: "rgba(187, 204, 215, 0.20)" }, // Light blue-gray wave
      { amplitude: 10, frequency: 0.005, speed: 0.2, color: "rgba(124, 58, 237, 0.18)" }    // Deep glow wave
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      // Smooth interpolation for mouse position tracking
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      // Calculate speed based on distance between smoothed and current mouse target
      const dist = Math.hypot(mouse.tx - mouse.x, mouse.ty - mouse.y);
      mouse.speed += (dist - mouse.speed) * 0.05;

      // Speed up wave movement phase based on cursor hover activity
      phase += 0.03 + (mouse.speed * 0.001);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2.5;

        for (let x = 0; x < width; x += 3) {
          // Standard wave frequency calculation
          let y = Math.sin(x * wave.frequency + phase * wave.speed) * wave.amplitude;

          // Localized warp: push/distort waves locally when cursor hovers near
          const dx = x - mouse.x;
          if (Math.abs(dx) < 220) {
            const factor = (220 - Math.abs(dx)) / 220; // 0 (far) to 1 (near)
            // Bends wave lines vertically depending on cursor position and movement speed
            const hoverDistortion = Math.sin(dx * 0.015) * (mouse.speed * 0.2) * factor;
            y += hoverDistortion;
          }

          // Vertically align wave lines across the middle-lower region of Hero section
          const centerY = height * 0.58;

          if (x === 0) {
            ctx.moveTo(x, centerY + y);
          } else {
            ctx.lineTo(x, centerY + y);
          }
        }
        ctx.stroke();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMove);
        parent.removeEventListener("touchmove", handleMove);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}
