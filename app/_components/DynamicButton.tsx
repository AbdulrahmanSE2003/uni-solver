import React, { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

interface DynamicButtonProps {
    children?: ReactNode;
    text?: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

const DynamicButton = ({
    children,
    text,
    href,
    onClick,
    className,
    type = "button"
}: DynamicButtonProps) => {

    const commonClasses = cn(
        "flex w-fit gap-2 items-center bg-brand-blue/95 cursor-pointer hover:bg-brand-blue transition-all duration-500 shadow-lg shadow-brand-blue/50 text-white font-medium p-4 px-6 rounded-full group",
        className
    );

    if (href) {
        return (
            <Link href={href} className={commonClasses}>
                {text}
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={commonClasses}>
            {text}
            {children}
        </button>
    );
};

export default DynamicButton;