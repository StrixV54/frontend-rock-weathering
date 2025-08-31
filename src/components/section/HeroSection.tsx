import React from "react";
import AnimatedFishLeft from "../animations/AnimatedFishLeft";
import AnimatedFishRight from "../animations/AnimatedFishRight";
import BlurReveal from "../animations/BlurReveal";

const HeroSection: React.FC = () => {
    return (
        <>
            {/* Animated fish on the left */}
            <div className="absolute top-0 left-0">
                <AnimatedFishLeft />
            </div>

            {/* Animated fish on the right */}
            <div className="absolute top-0 right-0">
                <AnimatedFishRight />
            </div>

            {/* Main hero title */}
            <h1 className="uppercase w-[600px] text-8xl text-center text-white absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2">
                <BlurReveal text="CREATING CORALS FROM CLOUDS" duration={1} />
            </h1>
        </>
    );
};

export default HeroSection;
