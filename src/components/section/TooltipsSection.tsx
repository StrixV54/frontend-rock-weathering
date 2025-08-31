import React from "react";
import CustomTooltip from "../ui/CustomTooltip";
import Image from "../common/Image";

const TooltipsSection: React.FC = () => {
    return (
        <>
            {/* First tooltip - positioned on the right side */}
            <CustomTooltip
                className="absolute 3xl:top-[73.4rem] 3xl:right-[8.9rem] 2xl:top-[63.4rem] 2xl:right-[8.9rem] top-[64.4rem] right-[8.9rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer !z-[999]"
                content="Discover how cloud seeding technology can help restore coral reefs by creating optimal conditions for marine life to flourish."
            >
                <Image src="/pointer.svg" alt="Info pointer" showSpinner={false} />
            </CustomTooltip>

            {/* Second tooltip - positioned on the left side */}
            <CustomTooltip
                className="absolute 3xl:top-[120.4rem] 3xl:left-[15.9rem] 2xl:top-[107.4rem] 2xl:left-[14.9rem] top-[103.4rem] left-[14.9rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer !z-[999]"
                content="Discover how cloud seeding technology can help restore coral reefs by creating optimal conditions for marine life to flourish."
            >
                <Image src="/pointer.svg" alt="Info pointer" showSpinner={false} />
            </CustomTooltip>
        </>
    );
};

export default TooltipsSection;
