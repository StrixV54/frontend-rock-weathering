import React from "react";
import Image from "../common/Image";
import { PLACEHOLDERS } from "../../utils/placeholders";

const BackgroundSection: React.FC = () => {
    return (
        <>
            {/* Main coral sea background */}
            <Image
                src="/Corals_Sea_1920x2798.png"
                placeholderSrc={PLACEHOLDERS.coralsSea}
                alt="Coral sea background"
                className="w-full h-full"
            />

            {/* Added light layer with coral sway animation */}
            <Image
                src="/Corals_AddedLight_1920x2798_LIGHTERCOLOR_01.png"
                placeholderSrc={PLACEHOLDERS.coralsAddedLight}
                alt="Coral added light layer"
                className="absolute top-[0] left-[0] w-full h-full coral-sway"
            />

            {/* Background coral layer */}
            <Image
                src="/Corals_Background_1920x2798_00000.png"
                placeholderSrc="/Corals_Background_1920x2798_00000.png"
                alt="Coral background layer"
                className="absolute top-[8rem] left-0 w-full h-full"
                delay={2}
            />
        </>
    );
};

export default BackgroundSection;
