import React, { useEffect, useState, useRef } from 'react';

interface FishData {
  id: number;
  src: string;
  x: number;
  y: number;
  initialX: number;
  initialY: number;
  scale: number;
  floatOffset: number;
  floatSpeed: number;
  opacity: number;
}

interface AnimatedFishRightProps {
  className?: string;
}

// Fish image paths for right-side fishes
const fishImages = [
  '/fishes-right/fish-01.png',
  '/fishes-right/fish-02.png',
  '/fishes-right/fish-03.png',
  '/fishes-right/fish-04.png',
  '/fishes-right/fish-05.png',
  '/fishes-right/fish-06.png',
  '/fishes-right/fish-07.png',
  '/fishes-right/fish-08.png',
];

const AnimatedFishRight: React.FC<AnimatedFishRightProps> = ({ className = '' }) => {
  const [fishes, setFishes] = useState<FishData[]>([]);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Generate fish data with relative positions
    const generatedFishes: FishData[] = fishImages.map((src, index) => {
      const initialX = 500 + (index * 40) + (Math.random() * 80 - 40); // Start from right side, spread horizontally
      const initialY = 150 + (Math.random() * 200); // Random vertical position

      return {
        id: index,
        src,
        x: initialX,
        y: initialY,
        initialX,
        initialY,
        scale: 0.4 + Math.random() * 0.4,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.01 + Math.random() * 0.02,
        opacity: 0,
      };
    });

    setFishes(generatedFishes);
  }, []);

  useEffect(() => {
    if (fishes.length === 0) return;

    let startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000; // Convert to seconds

      let shouldReset = false;

      const updatedFishes = fishes.map(fish => {
        // Group movement: slow drift right to left and downward diagonally
        const groupX = elapsed * -10; // Move left at 10px per second
        const groupY = elapsed * 6; // Move downward at 6px per second

        // Simple wave motion - super slow up and down movement
        const waveY = Math.sin(elapsed * 0.3 + fish.floatOffset) * 30; // Super slow vertical wave

        const newX = fish.initialX + groupX;
        const newY = fish.initialY + groupY + waveY;
        let groupOpacity = Math.min(1, fish.opacity + elapsed * 0.1);

        // Check if any fish has moved out of screen bounds (left side or bottom)
        if (newX < -800 || newY > window.innerHeight + 100) {
          shouldReset = true;
          groupOpacity = 0;
        }
        return {
          ...fish,
          x: newX,
          y: newY,
          opacity: groupOpacity,
        };
      });

      // If any fish went out of bounds, reset animation timer and fish positions
      if (shouldReset) {
        startTime = Date.now(); // Reset the timer
        setFishes(fishes.map(fish => ({
          ...fish,
          x: fish.initialX,
          y: fish.initialY,
          opacity: 0
        })));
        shouldReset = false;
      } else {
        setFishes(updatedFishes);
      }
    };

    intervalRef.current = setInterval(animate, 16); // ~60fps

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [fishes.length]);

  return (
    <div className={`relative ${className}`} style={{ width: '600px', height: '500px', overflow: 'visible' }}>
      {fishes.map((fish) => (
        <div
          key={fish.id}
          className="absolute transition-all duration-100 ease-out"
          style={{
            left: `${fish.x}px`,
            top: `${fish.y}px`,
            transform: `scale(${fish.scale}) scaleX(-1)`, // Flip horizontally to face left
            opacity: fish.opacity,
            zIndex: Math.floor(fish.scale * 10), // Larger fish appear in front
          }}
        >
          <img
            src={fish.src}
            alt={`Fish ${fish.id + 1}`}
            className="block"
            style={{
              maxWidth: '100px',
              height: 'auto',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedFishRight;
