import React from 'react';
import TextButton from './TextButton';

const Card = ({ color, children, className, buttonText }) => {
    return (
        <div className={`relative z-0 p-8 md:p-10 group ${className}`}>
            <div
                className={`absolute size-16 rounded-xl top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transtion duration-300 
                    ${color === 'fuchsia' && 'bg-fuchsia-500'} 
                    ${color === 'lime' && 'bg-lime-500'} 
                    ${color === 'cyan' && 'bg-cyan-500'} 
                    ${color === 'violet' && 'bg-violet-500'}`}
            />
            <div
                className={`absolute size-16 rounded-xl transition-opacity duration-300 top-1.5 right-1.5 -z-10 
                    ${color === 'fuchsia' && 'bg-fuchsia-500 group-hover:bg-fuchsia-400'} 
                    ${color === 'lime' && 'bg-lime-500 group-hover:bg-lime-400'} 
                    ${color === 'cyan' && 'bg-cyan-500 group-hover:bg-cyan-400'} 
                    ${color === 'violet' && 'bg-violet-500 group-hover:bg-violet-400'}`}
            />
            <div className='absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)] masked-element' />

            <div>{children}</div>

            <div className='flex justify-between mt-12'>
                <TextButton color={color}>
                    {buttonText || 'Learn More'}
                </TextButton>

                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='size-8 text-zinc-500 group-hover:text-zinc-300 transtion duration-300 -translate-x-2 group-hover:translate-x-0'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                    />
                </svg>
            </div>
        </div>
    );
};

export default Card;
