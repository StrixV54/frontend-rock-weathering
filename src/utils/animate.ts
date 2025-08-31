// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export const defaultTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 1, ease: "easeInOut" as const };

export const defaultFadeVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    : {
        hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
        visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
    };
