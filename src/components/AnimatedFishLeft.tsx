import React, { useEffect, useState, useRef } from "react";

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

interface AnimatedFishProps {
    className?: string;
}

// Fish image paths
const fishImages = [
    "/fishes-left/Fish-01.png",
    "/fishes-left/Fish-02.png",
    "/fishes-left/Fish-03.png",
    "/fishes-left/Fish-04.png",
    "/fishes-left/Fish-05.png",
    "/fishes-left/Fish-06.png",
    "/fishes-left/Fish-07.png",
    "/fishes-left/Fish-08.png",
    "/fishes-left/Fish-09.png",
    "/fishes-left/Fish-11.png",
    "/fishes-left/Fish-12.png",
];

const AnimatedFishLeft: React.FC<AnimatedFishProps> = ({ className = "" }) => {
    const [fishes, setFishes] = useState<FishData[]>([]);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        // Generate fish data with relative positions
        const generatedFishes: FishData[] = fishImages.map((src, index) => {
            const initialX = -100 + index * 40 + (Math.random() * 80 - 40); // Spread fish horizontally
            const initialY = 200 + Math.random() * 200; // Random vertical position

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
        let shouldReset = false;

        const animate = () => {
            const currentTime = Date.now();
            const elapsed = (currentTime - startTime) / 1000;

            const updatedFishes = fishes.map((fish) => {
                // Group movement: slow drift left to right and upward
                const groupX = elapsed * 10; // Move right at 10px per second
                const groupY = elapsed * -4; // Move upward at 4px per second
                let groupOpacity = Math.min(1, fish.opacity + elapsed * 0.1);

                // Simple wave motion - super slow up and down movement
                const waveY = Math.sin(elapsed * 0.3 + fish.floatOffset) * 30; // Super slow vertical wave

                const newX = fish.initialX + groupX;
                const newY = fish.initialY + groupY + waveY;

                // Check if any fish has moved out of screen bounds (right side or top)
                if (newX > window.innerWidth + 100 || newY < -100) {
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
                setFishes(
                    fishes.map((fish) => ({
                        ...fish,
                        x: fish.initialX,
                        y: fish.initialY,
                        opacity: 0,
                    }))
                );
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
        <div className={`relative ${className}`} style={{ width: "600px", height: "500px", overflow: "visible" }}>
            {fishes.map((fish) => (
                <div
                    key={fish.id}
                    className="absolute transition-all duration-100 ease-out"
                    style={{
                        left: `${fish.x}px`,
                        top: `${fish.y}px`,
                        transform: `scale(${fish.scale})`,
                        opacity: fish.opacity,
                        zIndex: Math.floor(fish.scale * 10), // Larger fish appear in front
                    }}
                >
                    <img
                        src={fish.src}
                        alt={`Fish ${fish.id + 1}`}
                        className="block scale-[1.6]"
                        style={{
                            maxWidth: "100px",
                            height: "auto",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default AnimatedFishLeft;
