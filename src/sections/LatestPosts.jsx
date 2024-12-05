import React, { useRef } from 'react';
import Card from '../components/Card';
import { getPostColorFromCategory } from '../utils/PostUtils.jsx';
import Tag from '../components/Tag';
import CutCornerButton from '../components/CutCornerButton.jsx';
import { motion, useScroll, useTransform } from 'framer-motion';
const LatestPosts = ({ latestPosts }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'start center'],
    });
    const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);
    return (
        <section className='py-60'>
            <div className='container'>
                <div className='max-w-3xl mx-auto'>
                    <h2 className='h2 text-center'>
                        Your portal to everything blockchain.
                    </h2>
                    <p className='description text-center mt-8'>
                        Keep up with the newest trends, updates, and insights in
                        the blockchain world, updated weekly.
                    </p>
                </div>

                <div className='mt-16 md:mt-28  grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className=' flex  flex-col gap-8'>
                        {latestPosts.map(
                            (
                                { data: { title, description, category } },
                                postIndex
                            ) => {
                                const oddCards = postIndex % 2 === 1;
                                const evenCards = postIndex % 2 === 0;
                                return (
                                    <Card
                                        key={postIndex}
                                        buttonText={'Read More'}
                                        color={getPostColorFromCategory(
                                            category
                                        )}
                                        className={`${oddCards ? 'md:hidden' : ''}`}
                                    >
                                        <Tag
                                            color={getPostColorFromCategory(
                                                category
                                            )}
                                        >
                                            {category}
                                        </Tag>
                                        <h3 className='h3 mt-3'>{title}</h3>
                                        <p className='text-lg text-zinc-400 mt-6'>
                                            {description}
                                        </p>
                                    </Card>
                                );
                            }
                        )}
                    </div>

                    <motion.div
                        className='hidden mt-16 md:flex  flex-col gap-8'
                        ref={targetRef}
                        style={{
                            marginTop,
                        }}
                    >
                        {latestPosts.map(
                            (
                                { data: { title, description, category } },
                                postIndex
                            ) => {
                                const oddCards = postIndex % 2 === 1;
                                const evenCards = postIndex % 2 === 0;
                                return (
                                    <Card
                                        key={postIndex}
                                        buttonText={'Read More'}
                                        color={getPostColorFromCategory(
                                            category
                                        )}
                                        className={`${evenCards ? 'md:hidden' : ''}`}
                                    >
                                        <Tag
                                            color={getPostColorFromCategory(
                                                category
                                            )}
                                        >
                                            {category}
                                        </Tag>
                                        <h3 className='h3 mt-3'>{title}</h3>
                                        <p className='text-lg text-zinc-400 mt-6'>
                                            {description}
                                        </p>
                                    </Card>
                                );
                            }
                        )}
                    </motion.div>
                </div>

                <div className='flex justify-center mt-48 md:mt-32'>
                    <CutCornerButton>Read the Blog</CutCornerButton>
                </div>
            </div>
        </section>
    );
};

export default LatestPosts;
