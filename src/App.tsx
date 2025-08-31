import LenisProvider from "./lenis";
import Logo from "./components/common/Logo";
import { PLACEHOLDERS } from "./utils/placeholders";
import BackgroundSection from "./components/section/BackgroundSection";
import HeroSection from "./components/section/HeroSection";
import MarineLifeSection from "./components/section/MarineLifeSection";
import CoralClustersSection from "./components/section/CoralClustersSection";
import TooltipsSection from "./components/section/TooltipsSection";
import { useScrollProgress } from "./hooks/useScrollProgress";

function App() {
    const { containerRef, progress } = useScrollProgress();

    return (
        <>
            <LenisProvider>
                <main
                    ref={containerRef}
                    className="flex relative min-h-screen max-w-screen overflow-hidden"
                    style={{
                        backgroundImage: `url(${PLACEHOLDERS.coralsSea})`, // initial background placeholder
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Logo />
                    <BackgroundSection />
                    <HeroSection />
                    <MarineLifeSection progress={progress} />
                    <CoralClustersSection progress={progress} />
                    <TooltipsSection />
                </main>
            </LenisProvider>
        </>
    );
}

export default App;
