import React from 'react';

const Tag = ({ children, color, className }) => {
    return (
        <div
            className={`px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs inline-flex rounded-full ${className}
                    ${color === 'fuchsia' && 'bg-fuchsia-500/15 text-fuchsia-500'} 
                    ${color === 'lime' && 'bg-lime-500/15 text-lime-500'} 
                    ${color === 'cyan' && 'bg-cyan-500/15 text-cyan-500'} 
                    ${color === 'violet' && 'bg-violet-500/15 text-viole5-400'}
                `}
        >
            {children}
        </div>
    );
};

export default Tag;
