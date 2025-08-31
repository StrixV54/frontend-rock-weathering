import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * Custom hook for tracking scroll progress using GSAP ScrollTrigger
 * @returns Object containing containerRef and progress value (0-1)
 */
export const useScrollProgress = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0); // progress 0-1 from top-bottom page scroll

    useGSAP(
        () => {
            if (!gsap) return;

            gsap.to(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    // markers: true, // Uncomment for debugging
                    onUpdate: (self) => {
                        setProgress(self.progress);
                    },
                },
            });
        },
        { scope: containerRef }
    );

    return { containerRef, progress };
};
