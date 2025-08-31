    import clsx from "clsx";
    import { twMerge } from "tailwind-merge";

    // Helper function to map progress range to frame range
    export const getFrameFromProgress = (
        progress: number,
        startProgress: number,
        endProgress: number,
        startFrame: number = 0,
        endFrame: number = 12
    ): number => {
        if (progress < startProgress) return startFrame;

        // Calculate the range size
        const progressRange = endProgress - startProgress;

        // If progress exceeds endProgress, loop it back within the range
        let adjustedProgress = progress;
        if (progress > endProgress) {
            const excessProgress = (progress - startProgress) % progressRange;
            adjustedProgress = startProgress + excessProgress;
        }

        const normalizedProgress = (adjustedProgress - startProgress) / progressRange;
        return Math.round(normalizedProgress * (endFrame - startFrame) + startFrame);
    };


    export const cn = (...classes: string[]) => {
        return twMerge(clsx(classes));
    };
