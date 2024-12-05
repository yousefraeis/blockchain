import React from 'react';
import { motion } from 'framer-motion';
const testimonials = [
    {
        text: 'The user experience is phenomenal, and the support team is always there to help. Highly recommended!',
        name: 'Erica Wyatt',
        title: 'Product Manger - BlockLine',
        avatatImage: '/assets/images/avatar-erica-wyatt.jpg',
    },
    {
        text: "Our productivity has skyrocketed since we started using Blockfoge. It's a game-changer for our team.",
        name: 'Noel Baldwin',
        title: 'Lead Developer - BitBridge',
        avatatImage: '/assets/images/avatar-noel-baldwin.jpg',
    },
    {
        text: 'The integration process was seamless, and the performance improvements are beyound our expectations.',
        name: 'Harry Bender',
        title: 'CTO - CryptoSolutions',
        avatatImage: '/assets/images/avatar-harry-bender.jpg',
    },
];

const TestimonialsSection = () => {
    return (
        <section className='py-32 bg-zinc-800'>
            <div className='container '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-11 lg:gap-12'>
                    {testimonials.map((testimonials, testimonialsIndex) => (
                        <motion.blockquote
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: testimonialsIndex * 0.6,
                                ease: 'easeInOut',
                                duration: 1,
                            }}
                            key={testimonialsIndex}
                            className={`${testimonialsIndex === 2 && 'md:hidden lg:block'}`}
                        >
                            <p className='font-heading text-3xl lg:text-4xl font-black'>
                                &ldquo;{testimonials.text}&rdquo;
                            </p>
                            <cite className='mt-8 block'>
                                <div className='flex gap-3 items-center'>
                                    <div
                                        className='size-16 bg-zinc-700 rounded-full bg-cover'
                                        style={{
                                            backgroundImage: `url(${testimonials.avatatImage})`,
                                        }}
                                    />

                                    <div>
                                        <div className='text-lg not-italic font-black'>
                                            {testimonials.name}
                                        </div>
                                        <div className='text-zinc-400 not-italic'>
                                            {testimonials.title}
                                        </div>
                                    </div>
                                </div>
                            </cite>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
