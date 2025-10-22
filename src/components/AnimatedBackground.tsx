import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Fiber/Wave system
    class Fiber {
      x: number;
      y: number;
      length: number;
      angle: number;
      speed: number;
      opacity: number;
      thickness: number;
      color: string;
      offset: number;
      waveAmplitude: number;
      waveFrequency: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.length = Math.random() * 200 + 100;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.thickness = Math.random() * 2 + 1;
        this.offset = Math.random() * 1000;
        this.waveAmplitude = Math.random() * 30 + 10;
        this.waveFrequency = Math.random() * 0.02 + 0.01;
        
        // Random color between indigo and purple
        const colors = [
          'rgba(99, 102, 241,', // Indigo
          'rgba(139, 92, 246,', // Purple
          'rgba(168, 85, 247,', // Purple variant
          'rgba(124, 58, 237,', // Violet
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

     update(time: number) {
  if (!canvas) return; // ✅ prevent null access

  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed;

  // Wrap around edges
  if (this.x < -this.length) this.x = canvas.width + this.length;
  if (this.x > canvas.width + this.length) this.x = -this.length;
  if (this.y < -this.length) this.y = canvas.height + this.length;
  if (this.y > canvas.height + this.length) this.y = -this.length;
}

      draw(ctx: CanvasRenderingContext2D, time: number) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Create gradient along fiber
        const gradient = ctx.createLinearGradient(0, 0, this.length, 0);
        gradient.addColorStop(0, `${this.color} 0)`);
        gradient.addColorStop(0.5, `${this.color} ${this.opacity})`);
        gradient.addColorStop(1, `${this.color} 0)`);

        // Draw wavy fiber
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';

        for (let i = 0; i <= this.length; i += 5) {
          const waveY =
            Math.sin((i + time * 50 + this.offset) * this.waveFrequency) *
            this.waveAmplitude;
          if (i === 0) {
            ctx.moveTo(i, waveY);
          } else {
            ctx.lineTo(i, waveY);
          }
        }

        ctx.stroke();
        ctx.restore();
      }
    }

    // Create fibers
    const fibers: Fiber[] = [];
    const fiberCount = 25;
    
    for (let i = 0; i < fiberCount; i++) {
      fibers.push(new Fiber(canvas.width, canvas.height));
    }

    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const time = (Date.now() - startTime) / 1000;

      // Clear with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw fibers
      fibers.forEach((fiber) => {
        fiber.update(time);
        fiber.draw(ctx, time);
      });

      // Add subtle gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    // Initial clear
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
