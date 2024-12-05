import React, { useRef } from 'react';
import CutCornerButton from '../components/CutCornerButton';
import TextButton from '../components/TextButton';
import { motion, useScroll, useTransform } from 'framer-motion';

const listItems = [
    'Experience unparalled security and scalability',
    'Fully benefit from scalable network effects',
    'Unlock the potential of decentralized networks',
];
const FeaturesGrid = () => {
    const torusKnotRef = useRef(null);
    const firstHemisphereRef = useRef(null);
    // Start Image , End Image
    // End   ViewP , Start ViewPort

    // TorusKnot Motion
    const { scrollYProgress: torusKnotScrollYProgress } = useScroll({
        target: torusKnotRef,
        offset: ['start end', 'end start'],
    });

    const torusKnotTranslateY = useTransform(
        torusKnotScrollYProgress,
        [0, 1],
        [100, -100]
    );

    const torusKnotRotate = useTransform(
        torusKnotScrollYProgress,
        [0, 1],
        [30, -30]
    );
    // Hemisphere Motion
    const { scrollYProgress: firstHemisphereScrollYProgress } = useScroll({
        target: firstHemisphereRef,
        offset: ['start end', 'end start'],
    });

    const firstHemisphereTranslateY = useTransform(
        firstHemisphereScrollYProgress,
        [0, 1],
        [50, -50]
    );

    const firstHemisphereRotate = useTransform(
        firstHemisphereScrollYProgress,
        [0, 1],
        [-20, -50]
    );

    const coneRef = useRef(null);
    const secondHemisphereRef = useRef(null);

    // Cone Motion
    const { scrollYProgress: coneScrollYProgress } = useScroll({
        target: coneRef,
        offset: ['start end', 'end start'],
    });

    const coneTranslateY = useTransform(
        coneScrollYProgress,
        [0, 1],
        [100, -100]
    );

    const coneRotate = useTransform(coneScrollYProgress, [0, 1], [12, 45]);

    // Hemisphere Motion
    const { scrollYProgress: secondHemisphereScrollYProgress } = useScroll({
        target: secondHemisphereRef,
        offset: ['start end', 'end start'],
    });

    const secondHemisphereTranslateY = useTransform(
        secondHemisphereScrollYProgress,
        [0, 1],
        [50, -50]
    );

    const secondHemisphereRotate = useTransform(
        secondHemisphereScrollYProgress,
        [0, 1],
        [-20, 10]
    );
    return (
        <section className='py-24 overflow-x-clip'>
            <div className='container'>
                <div className='flex flex-col gap-56 md:gap-48 lg:gap-80'>
                    <div className='grid grid-cols-1 md:grid-cols-3 grid-flow-col gap-8'>
                        <div className='col-span-2'>
                            <h2 className='h2'>
                                Empowering the future of blockchain.
                            </h2>
                            <p className='body-text mt-8'>
                                Blockforge provides robust and secure
                                infrastucture to support the next generation of
                                decentralized appliztions.
                            </p>

                            <ul className='flex flex-col gap-8 mt-12'>
                                {listItems.map((item, i) => (
                                    <li
                                        key={i}
                                        className='flex items-center gap-3'
                                    >
                                        <div className='inline-flex justify-center items-center flex-shrink-0 size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full'>
                                            <div className='size-1.5 bg-fuchsia-500 rounded-full'></div>
                                        </div>
                                        <span className='text-xl font-bold'>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className='flex gap-8 mt-12'>
                                <CutCornerButton>Get Started</CutCornerButton>
                                <TextButton>Learn More</TextButton>
                            </div>
                        </div>

                        <div className='hidden md:block md:col-span-1'>
                            <div className='relative inline-flex z-0'>
                                <motion.img
                                    src='/assets/images/torus-knot.png'
                                    alt='Torus Knot 3D image'
                                    className='size-96 max-w-none'
                                    ref={torusKnotRef}
                                    style={{
                                        translateY: torusKnotScrollYProgress,
                                        rotate: torusKnotRotate,
                                    }}
                                />
                                <motion.img
                                    src='/assets/images/hemisphere.png'
                                    alt='Hemisphere 3D shape'
                                    className='absolute size-96 top-3/4 -z-10 scale-x-[-1]'
                                    ref={firstHemisphereRef}
                                    style={{
                                        translateY:
                                            firstHemisphereScrollYProgress,
                                        rotate: firstHemisphereRotate,
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='hidden md:block md:col-span-1 relative'>
                            <div className='absolute right-0 '>
                                <motion.img
                                    src='/assets/images/cone.png'
                                    alt='Cone 3D shape'
                                    className='size-96 max-w-none z-0 rotate-12'
                                    ref={coneRef}
                                    style={{
                                        translateY: coneScrollYProgress,
                                        rotate: coneRotate,
                                    }}
                                />
                                <motion.img
                                    src='/assets/images/hemisphere.png'
                                    alt='Hemisphere 3D shape'
                                    className='absolute top-3/4 -z-10 left-0'
                                    ref={secondHemisphereRef}
                                    style={{
                                        translateY: secondHemisphereTranslateY,
                                        rotate: secondHemisphereRotate,
                                    }}
                                />
                            </div>
                        </div>

                        <div className='col-span-2'>
                            <h2 className='h2'>Blockforge leads the way.</h2>
                            <div className='flex flex-col body-text mt-6 gap-6'>
                                <p>
                                    Blockforge is dedicated to supporting the
                                    evolution of Web3 applications by delivering
                                    the necessary infrastucture and security for
                                    Web3.
                                </p>
                                <p>
                                    Blockforge champtions Web3 for everyone. As
                                    a decentralized blockchain scaling platform,
                                    Blockforge enables developers to create
                                    secable, user-friendly dApps with low
                                    transaction costs, all while ensuring robust
                                    security.
                                </p>
                            </div>{' '}
                            <div className='flex gap-8 mt-12'>
                                <CutCornerButton>Get Started</CutCornerButton>
                                <TextButton>Learn More</TextButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
