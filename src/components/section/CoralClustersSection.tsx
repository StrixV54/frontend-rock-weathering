import React from "react";
import SpriteImage from "../ui/SpriteImage";
import { getFrameFromProgress } from "../../utils";

interface CoralClustersSectionProps {
    progress: number;
}

const CoralClustersSection: React.FC<CoralClustersSectionProps> = ({ progress }) => {
    return (
        <>
            {/* Coral Cluster 03 */}
            <SpriteImage
                src="/moving-coral-clusters/Coral_Cluster_03.png"
                totalFrames={12}
                currentFrame={getFrameFromProgress(progress, 0, 0.2, 0, 11)}
                frameWidth={871}
                frameHeight={871}
                delay={2.5}
                className="absolute 3xl:scale-[1] 3xl:top-[69.5rem] 3xl:left-[28rem]
                2xl:top-[60.5rem] 2xl:left-[23.6rem]
                scale-[0.8] top-[59rem] left-[22.6rem] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Coral Cluster 02 */}
            <SpriteImage
                src="/moving-coral-clusters/Coral_Cluster_02.png"
                totalFrames={12}
                currentFrame={getFrameFromProgress(progress, 0, 0.2, 0, 11)}
                frameWidth={544}
                frameHeight={544}
                delay={2.5}
                className="absolute 2xl:scale-[0.94] 2xl:top-[56.6rem] 2xl:right-[-12.6rem]
                scale-[0.8] top-[49.6rem] right-[-16.6rem] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Blue Coral */}
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

            {/* Coral Cluster 04 */}
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
        </>
    );
};

export default CoralClustersSection;
