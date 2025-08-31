import React from "react";
import { cn } from "../../utils";

interface CustomTooltipContentProps {
    content: string;
    onClose?: () => void;
    pointerDown?: boolean;
    contentClassName?: string;
}

/**
 * CustomTooltipContent component for displaying a tooltip content
 * @param {CustomTooltipContentProps} props - The props for the CustomTooltipContent component
 * @returns {React.FC<CustomTooltipContentProps>} The CustomTooltipContent component
 */
const CustomTooltipContent: React.FC<CustomTooltipContentProps> = ({ content, onClose, pointerDown = false, contentClassName = "" }) => {
    const prefersReducedMotion = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

    const animationClass = prefersReducedMotion ? "" : "animate-in fade-in duration-200";

    return (
        <div className={cn("relative w-[352px] h-[161px] bg-white border border-black rounded-md shadow-lg -translate-x-1/8", animationClass, contentClassName)}>
            {onClose && (
                <button className="absolute z-50 top-3.5 left-4 w-6 h-6 cursor-pointer" onClick={onClose}>
                    <div className="w-full h-full transform rotate-45 relative">
                        <div className="absolute top-1/2 left-0 w-full h-[3px] bg-black transform -translate-y-1/2"></div>
                        <div className="absolute left-1/2 top-0 w-[3px] h-full bg-black transform -translate-x-1/2"></div>
                    </div>
                </button>
            )}

            <div className="absolute left-4 right-4 bottom-4">
                <p className="text-black text-xl leading-5">{content}</p>
            </div>

            {pointerDown && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-white"></div>
                </div>
            )}
        </div>
    );
};

export default CustomTooltipContent;
