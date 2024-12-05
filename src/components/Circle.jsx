import React from 'react';
import { easeIn, motion } from 'framer-motion';

const Circle = ({ className, children, animate = false }) => {
    return (
        <div
            className={`bg-zinc-900 h-[240px] w-[240px] inline-flex items-center justify-center rounded-full   ${className}`}
        >
            <motion.div
                animate={animate && { rotate: 360 }}
                transition={{
                    ease: 'linear',
                    duration: 15,
                    repeat: Infinity,
                }}
                className={`absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10  
                            ${animate && 'border-[6px] border-transparent border-t-fuchsia-500/35'}`}
            />
            {children}
        </div>
    );
};

export default Circle;
