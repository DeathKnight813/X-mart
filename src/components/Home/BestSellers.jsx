import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../store/products-context';

import Button from '../UI/Button';

import styles from './BestSellers.module.css';

const BestSellers = () => {
    const { featuredProducts } = useProductsContext();

    const bestSellers = [...featuredProducts];

    const bestSellersContRef = useRef();

    const { scrollYProgress } = useScroll({
        target: bestSellersContRef,
        offset: ['start end', 'end start'],
    });

    const scrollingSliderX1 = useTransform(scrollYProgress, [0, 1], ['-400px', '0px']);
    const scrollingSliderX2 = useTransform(scrollYProgress, [0, 1], ['-100px', '-400px']);

    return (
        <section className={`relative z-[var(--z-index-400)] bg-[var(--primary-background-900)] pt-20 pb-8`}>
            <div>
                <h2 className="intro_title mb-6">Our best sellers</h2>
                <div className={styles.best_sellers_cont} ref={bestSellersContRef}>
                    {featuredProducts.length > 0 && (
                        <>
                            <m.div className={styles.scrolling_slider} style={{ x: scrollingSliderX1 }}>
                                {bestSellers.map(data => (
                                    <div
                                        key={data.id}
                                        className={styles.best_seller_cont}
                                        style={{ backgroundImage: `url(${data.image})` }}
                                    >
                                        <Link to={`products/${data.id}`}>
                                            <Button classes={`${styles.scrolling_slider_btn} py-1`}>
                                                Details
                                            </Button>
                                        </Link>
                                    </div>
                                ))}
                            </m.div>
                            <m.div className={styles.scrolling_slider} style={{ x: scrollingSliderX2 }}>
                                {[
                                    bestSellers[3],
                                    bestSellers[2],
                                    bestSellers[0],
                                    bestSellers.at(-1),
                                    bestSellers[1],
                                    bestSellers[4],
                                ].map(data => (
                                    <div
                                        key={data.id}
                                        className={styles.best_seller_cont}
                                        style={{ backgroundImage: `url(${data.image})` }}
                                    >
                                        <Link to={`products/${data.id}`}>
                                            <Button classes={`${styles.scrolling_slider_btn} py-1`}>
                                                Details
                                            </Button>
                                        </Link>
                                    </div>
                                ))}
                            </m.div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
