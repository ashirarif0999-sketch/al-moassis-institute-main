import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';

interface GradientButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'gold';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const GradientButton: React.FC<GradientButtonProps> = ({
    variant = 'primary',
    children,
    className,
    icon,
    iconPosition = 'right',
    style,
    ...props
}) => {
    const variants = {
        primary: 'text-white shadow-[0_10px_20px_rgba(27,94,32,0.2)]',
        secondary: 'bg-white text-[#1B5E20] border-2 border-[#1B5E20]/10 hover:border-[#1B5E20]',
        gold: 'text-[#1B5E20] shadow-[0_10px_20px_rgba(255,215,0,0.2)]',
    };

    const gradientStyles = {
        primary: { background: 'var(--grad-green-primary)' },
        secondary: {},
        gold: { background: 'var(--grad-gold)' },
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{ ...gradientStyles[variant], ...style }}
            className={cn(
                'relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 group',
                variants[variant],
                className
            )}
            {...(props as any)}
        >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {icon && iconPosition === 'left' && (
                <span className="button-icon flex items-center justify-center relative z-10">{icon}</span>
            )}

            <span className="relative z-10">{children}</span>

            {icon && iconPosition === 'right' && (
                <span className="button-icon flex items-center justify-center transition-transform group-hover:translate-x-1 relative z-10">{icon}</span>
            )}
        </motion.button>
    );
};

export default GradientButton;
