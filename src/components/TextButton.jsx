import React from 'react';

const TextButton = ({ className, color, children }) => {
    return (
        <button
            className={`text-sm font-heading uppercase font-extrabold tracking-wider 
                ${color === 'fuchsia' && 'text-fuchsia-500'} 
                ${color === 'lime' && 'text-lime-500'} 
                ${color === 'cyan' && 'text-cyan-500'} 
                ${color === 'violet' && 'text-violet-500 '} ${className}`}
        >
           {children}
        </button>
    );
};

export default TextButton;
