import LenisProvider from "./lenis";
import SpriteImage from "./components/SpriteImage";
import AnimatedFishLeft from "./components/AnimatedFishLeft";
import AnimatedFishRight from "./components/AnimatedFishRight";
import CustomTooltip from "./components/CustomTooltip";
import { useGSAP } from "@gsap/react";
import Logo from "./components/Logo";
import Image from "./components/Image";
import gsap from "gsap";
import { useRef, useState } from "react";
import { getFrameFromProgress } from "./utils";
import BlurReveal from "./components/BlurReveal";
import { PLACEHOLDERS } from "./utils/placeholders";

function App() {
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
                    // markers: true,
                    onUpdate: (self) => {
                        setProgress(self.progress);
                    },
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <>
            <LenisProvider>
                <main ref={containerRef} className="flex relative min-h-screen max-w-screen overflow-hidden" style={{
                    backgroundImage: `url(${PLACEHOLDERS.coralsSea})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                    <Logo />
                    <Image src="/Corals_Sea_1920x2798.png" placeholderSrc={PLACEHOLDERS.coralsSea} alt="Coral sea background" className="w-full h-full" />
                    <div className="absolute top-0 left-0">
                        <AnimatedFishLeft />
                    </div>
                    <div className="absolute top-0 right-0">
                        <AnimatedFishRight />
                    </div>
                    <Image src="/Corals_AddedLight_1920x2798_LIGHTERCOLOR_01.png" placeholderSrc={PLACEHOLDERS.coralsAddedLight} alt="Coral added light layer" className="absolute top-[0] left-[0] w-full h-full coral-sway" />
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
                    <h1 className="uppercase w-[600px] text-8xl text-center text-white absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <BlurReveal text="CREATING CORALS FROM CLOUDS" duration={1} />
                    </h1>
                    <SpriteImage
                        src="/moving-coral-clusters/Coral_Cluster_03.png"
                        totalFrames={12}
                        currentFrame={getFrameFromProgress(progress, 0, 0.2, 0, 11)}
                        frameWidth={871}
                        frameHeight={871}
                        delay={2}
                        className="absolute 3xl:scale-[1] 3xl:top-[69.5rem] 3xl:left-[28rem]
                        2xl:top-[60.5rem] 2xl:left-[23.6rem]
                        scale-[0.8] top-[59rem] left-[22.6rem] -translate-x-1/2 -translate-y-1/2"
                    />
                    <SpriteImage
                        src="/moving-coral-clusters/Coral_Cluster_02.png"
                        totalFrames={12}
                        currentFrame={getFrameFromProgress(progress, 0, 0.2, 0, 11)}
                        frameWidth={544}
                        frameHeight={544}
                        delay={2}
                        className="absolute 2xl:scale-[0.94] 2xl:top-[56.6rem] 2xl:right-[-12.6rem]
                        scale-[0.8] top-[49.6rem] right-[-16.6rem] -translate-x-1/2 -translate-y-1/2"
                    />
                    <Image src="/Corals_Background_1920x2798_00000.png" placeholderSrc="/Corals_Background_1920x2798_00000.png" alt="Coral background layer" className="absolute top-[8rem] left-0 w-full h-full" delay={2} />
                    <SpriteImage
                        src="/moving-coral-clusters/Blue_Coral.png"
                        totalFrames={12}
                        currentFrame={getFrameFromProgress(progress, 0, 0.2, 0, 11)}
                        frameWidth={544}
                        frameHeight={544}
                        delay={2}
                        className="absolute 3xl:scale-[1.2]  3xl:top-[131.5rem] 3xl:right-[8.3rem]
                        2xl:top-[114.5rem] 2xl:right-[1.3rem]
                        top-[112.3rem] right-[1.6rem] -translate-x-1/2 -translate-y-1/2"
                    />
                    <SpriteImage
                        src="/moving-coral-clusters/Coral_Cluster_04.png"
                        totalFrames={12}
                        currentFrame={getFrameFromProgress(progress, 0, 0.2, 0, 11)}
                        frameWidth={544}
                        delay={2}
                        frameHeight={544}
                        className="absolute 3xl:scale-[1.4] 3xl:top-[119.6rem] 3xl:left-[32.4rem]
                        2xl:scale-[1.2] 2xl:top-[105.6rem] 2xl:left-[28.4rem]
                        scale-[1.15] top-[102.4rem] left-[27.6rem] -translate-x-1/2 -translate-y-1/2"
                    />
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
                        className="absolute scale-[1] top-[82.6rem] left-[32.6rem] -translate-x-1/2 -translate-y-1/2"
                    />
                    <CustomTooltip
                        className="absolute 3xl:top-[73.4rem] 3xl:right-[8.9rem] 2xl:top-[63.4rem] 2xl:right-[8.9rem] top-[64.4rem] right-[8.9rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer !z-[999]"
                        content="Discover how cloud seeding technology can help restore coral reefs by creating optimal conditions for marine life to flourish."
                    >
                        <Image src="/pointer.svg" alt="Info pointer" showSpinner={false} />
                    </CustomTooltip>
                    <CustomTooltip
                        className="absolute 3xl:top-[120.4rem] 3xl:left-[15.9rem] 2xl:top-[107.4rem] 2xl:left-[14.9rem] top-[103.4rem] left-[14.9rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer !z-[999]"
                        content="Discover how cloud seeding technology can help restore coral reefs by creating optimal conditions for marine life to flourish."
                    >
                        <Image src="/pointer.svg" alt="Info pointer" showSpinner={false} />
                    </CustomTooltip>
                </main>
            </LenisProvider>
        </>
    );
}

export default App;
