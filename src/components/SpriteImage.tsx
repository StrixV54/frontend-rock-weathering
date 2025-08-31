import React from "react";
import { motion } from "motion/react";

interface SpriteImageProps {
    /** Path to the sprite image */
    src: string;
    /** Total number of frames in the sprite */
    totalFrames: number;
    /** Which frame to display (0-based index) */
    currentFrame: number;
    /** Width of a single frame in pixels */
    frameWidth: number;
    /** Height of a single frame in pixels */
    frameHeight: number;
    /** Number of columns in the sprite (optional, defaults to all frames in one row) */
    columns?: number;
    /** Additional CSS classes */
    className?: string;
    /** Additional inline styles */
    style?: React.CSSProperties;
    /** Delay in seconds */
    delay?: number;
}

const SpriteImage: React.FC<SpriteImageProps> = ({ src, totalFrames, currentFrame, frameWidth, frameHeight, columns, className = "", style = {}, delay = 0 }) => {
    // Calculate sprite layout
    const cols = columns || totalFrames; // Default to horizontal layout
    const rows = Math.ceil(totalFrames / cols);

    // Calculate sprite dimensions
    const spriteWidth = cols * frameWidth;
    const spriteHeight = rows * frameHeight;

    // Calculate current frame position
    const row = Math.floor(currentFrame / cols);
    const col = currentFrame % cols;

    // Calculate background position (negative values to shift the sprite)
    const backgroundPositionX = -(col * frameWidth);
    const backgroundPositionY = -(row * frameHeight);

    // Clamp current frame to valid range
    const clampedFrame = Math.max(0, Math.min(currentFrame, totalFrames - 1));
    const isValidFrame = clampedFrame === currentFrame;

    return (
        <motion.div
            className={`overflow-hidden ${className}`}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0)", transition: { delay: delay } }}
            transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
                width: frameWidth,
                height: frameHeight,
                backgroundImage: `url(${src})`,
                backgroundSize: `${spriteWidth}px ${spriteHeight}px`,
                backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`,
                backgroundRepeat: "no-repeat",
                opacity: isValidFrame ? 1 : 0.5, // Dim invalid frames
                ...style,
            }}
            data-frame={currentFrame}
            data-total-frames={totalFrames}
        />
    );
};

export default SpriteImage;
