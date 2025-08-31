import React from "react";
import { motion } from "motion/react";
import { defaultTransition, defaultFadeVariants } from "../utils/animate";

export default function BlurReveal({ text, className, duration = 1 }: { text: string; className?: string; duration?: number }) {
    const words = text.split(" ");
    const prefersReducedMotion = typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;

    const transition = prefersReducedMotion
        ? { duration: 0 }
        : { ...defaultTransition, duration: duration || 1 };
    const variants = defaultFadeVariants;
    const staggerDelay = prefersReducedMotion ? 0 : 0.04;

    return (
        <motion.div initial="hidden" whileInView="visible" transition={{ staggerChildren: staggerDelay }}>
            <motion.div className={className || ""}>
                {words.map((word, index) => (
                    <React.Fragment key={index}>
                        <motion.span className="inline-block" transition={transition} variants={variants}>
                            {word}
                        </motion.span>
                        {index < words.length - 1 && " "}
                    </React.Fragment>
                ))}
            </motion.div>
        </motion.div>
    );
}
