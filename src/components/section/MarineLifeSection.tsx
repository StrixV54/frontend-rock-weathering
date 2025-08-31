import React from "react";
import SpriteImage from "../ui/SpriteImage";
import { getFrameFromProgress } from "../../utils";

interface MarineLifeSectionProps {
    progress: number;
}

const MarineLifeSection: React.FC<MarineLifeSectionProps> = ({ progress }) => {
    return (
        <>
            {/* Stingray */}
            <SpriteImage
                src="/Stingray_00000.png"
                totalFrames={12}
                currentFrame={getFrameFromProgress(progress, 0, 0.5, 0, 11)}
                frameWidth={200}
                frameHeight={200}
                delay={2}
                style={{
                    transform: `translateX(${progress * -100}px) translateY(${progress * -100}px)`,
                }}
                className="absolute scale-[1.6] top-[62.6rem] right-[32.6rem] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Whale Shark */}
            <SpriteImage
                src="/Whale_Shark.png"
                totalFrames={12}
                currentFrame={getFrameFromProgress(progress, 0, 0.3, 0, 11)}
                frameWidth={800}
                frameHeight={800}
                style={{
                    transform: `translateY(${progress * -100 * 2}px) translateX(${progress * 100}px)`,
                }}
                delay={2}
                className="absolute scale-[0.4] top-[42.6rem] right-[-22.6rem] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Turtle */}
            <SpriteImage
                src="/Turtle_00000.png"
                totalFrames={12}
                currentFrame={getFrameFromProgress(progress, 0, 0.3, 0, 11)}
                frameWidth={688}
                frameHeight={688}
                delay={2}
                style={{
                    transform: `translateX(${progress * 100}px) translateY(${progress * -100}px)`,
                }}
                className="absolute z-10 scale-[1] top-[82.6rem] left-[32.6rem] -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
};

export default MarineLifeSection;
