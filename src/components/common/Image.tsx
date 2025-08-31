import React, { useState, useImperativeHandle, forwardRef } from "react";
import { cn } from "../../utils";
import { motion } from "motion/react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    placeholderSrc?: string | null;
    alt?: string;
    className?: string;
    placeholderClassName?: string;
    showSpinner?: boolean;
    duration?: number;
    delay?: number;
}

/**
 * Image component for displaying an image
 * @param {ImageProps} props - The props for the Image component
 * @returns {React.FC<ImageProps>} The Image component
 */
const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, placeholderSrc, alt = "", className = "", placeholderClassName = "", showSpinner = false, duration = 0, delay = 0, ...props }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [imgRef, setImgRef] = useState<HTMLImageElement | null>(null);

    useImperativeHandle(ref, () => imgRef as HTMLImageElement, [imgRef]);

    const handleLoad = () => {
        setIsLoaded(true);
        setIsError(false);
    };

    const handleError = () => {
        setIsError(true);
        setIsLoaded(false);
    };

    const prefersReducedMotion = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

    const transitionClass = prefersReducedMotion ? "" : "transition-opacity duration-300";

    return (
        <motion.div className={cn("relative bg-transparent", className)} initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0)", transition: { delay: delay } }} transition={{ duration: duration }}>
            {/* Placeholder */}
            {!isLoaded && !isError && placeholderSrc && (
                <div className={cn("absolute inset-0 bg-transparent", placeholderClassName)}>
                    {placeholderSrc && <img src={placeholderSrc} alt={`${alt} placeholder`} className={cn("w-full h-full object-cover", transitionClass)} style={{ filter: "blur(2px) brightness(0.8)" }} />}
                    {showSpinner && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className={cn("w-8 h-8 border-2 border-white border-t-transparent rounded-full", prefersReducedMotion ? "" : "animate-spin")} />
                        </div>
                    )}
                </div>
            )}

            {/* Fallback placeholder when no placeholderSrc provided */}
            {!isLoaded && !isError && !placeholderSrc && (
                <div className={cn("absolute inset-0 bg-gray-200 flex items-center justify-center", transitionClass, placeholderClassName)}>
                    {showSpinner && (
                        <div className="flex flex-col items-center gap-2">
                            <div className={cn("w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full", prefersReducedMotion ? "" : "animate-spin")} />
                            <span className="text-sm text-gray-500">Loading...</span>
                        </div>
                    )}
                </div>
            )}

            {/* Error state */}
            {isError && (
                <div className={cn("absolute inset-0 bg-gray-100 flex items-center justify-center", placeholderClassName)}>
                    <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-2 text-gray-400">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-sm text-gray-500">Failed to load</span>
                    </div>
                </div>
            )}

            {/* Actual image */}
            <img ref={setImgRef} src={src} alt={alt} onLoad={handleLoad} onError={handleError} className={cn(transitionClass, isLoaded ? "opacity-100" : "opacity-0 bg-transparent")} {...props} />
        </motion.div>
    );
});

Image.displayName = "Image";

export default Image;
