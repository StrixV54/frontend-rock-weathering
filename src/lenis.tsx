/* eslint-disable no-constant-condition */
import React, { useEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function LenisProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time);
        }
        function updateMotion(data: { timestamp: number }) {
            const time = data.timestamp;
            lenisRef.current?.lenis?.raf(time);
        }
        const rafId = requestAnimationFrame(update);
        gsap.ticker.add(update);
        frame.update(updateMotion, true);

        return () => {
            cancelAnimationFrame(rafId);
            gsap.ticker.remove(update);
            cancelFrame(updateMotion);
        };
    }, []);

    return (
        <>
            {children}
            <ReactLenis
                root
                options={{
                    duration: 0.8,
                    autoRaf: false,
                    easing: (l) => 1 - Math.pow(1 - l, 4),
                }}
                ref={lenisRef}
            />
        </>
    );
}
export default LenisProvider;
