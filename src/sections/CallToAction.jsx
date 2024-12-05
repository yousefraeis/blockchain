import React, { useRef } from 'react';
import CutCornerButton from '../components/CutCornerButton';
import Hexagon from '../components/Hexagon';
import Circle from '../components/Circle';
import { useTransform, motion, useScroll } from 'framer-motion';

const CallToAction = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);
    return (
        <section className='py-60 overflow-hidden' ref={sectionRef}>
            <div className='container'>
                <div className='relative'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Hexagon size={700} />
                    </div>
                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                        <Hexagon size={1100} reverse duration={50} />
                    </div>
                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                        <Circle
                            className='absolute left-0 -top-[400px]'
                            animate
                        >
                            <motion.img
                                src='/assets/images/cuboid.png'
                                className='size-[140px]'
                                alt='Cuboid 3D shape'
                                style={{ rotate: rotate }}
                            />
                        </Circle>
                    </div>
                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                        <Circle
                            className='absolute -left-[600px] -top-[70px]'
                            animate
                        >
                            <motion.img
                                style={{ rotate }}
                                src='/assets/images/cylinder.png'
                                className='size-[140px]'
                                alt='Cylinder 3D shape'
                            />
                        </Circle>
                    </div>

                    <h2 className='h2 text-center'>
                        Ready to <span className='block'>get started?</span>
                    </h2>
                    <p className='description text-center mt-8 max-w-sm mx-auto'>
                        Start building using blockchain technology, with
                        Blockforge.
                    </p>
                    <div className='flex justify-center mt-12'>
                        <CutCornerButton>Get Started</CutCornerButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
