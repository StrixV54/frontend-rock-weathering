import React, { useState } from "react";
import { Tooltip } from "antd";
import type { TooltipProps } from "antd";
import CustomTooltipContent from "./CustomTooltipContent";

interface CustomTooltipProps extends Omit<TooltipProps, 'title' | 'open' | 'onOpenChange'> {
    children: React.ReactNode;
    content: string;
    pointerDown?: boolean;
    contentClassName?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
    children,
    content,
    pointerDown = false,
    contentClassName,
    ...tooltipProps
}) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    return (
        <Tooltip
            title={
                <CustomTooltipContent
                    content={content}
                    onClose={handleClose}
                    pointerDown={pointerDown}
                    contentClassName={contentClassName}
                />
            }
            open={open}
            onOpenChange={handleOpenChange}
            arrow={false}
            trigger="hover"
            placement="top"
            overlayStyle={{ padding: 0 }}
            overlayInnerStyle={{ padding: 0, backgroundColor: 'transparent', boxShadow: 'none' }}
            {...tooltipProps}
        >
            {children}
        </Tooltip>
    );
};

export default CustomTooltip;
