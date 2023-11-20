import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import sellImage from '../../assets/sell-image-min.jpg';

import Button from '../UI/Button';

import styles from './SellMarketPlace.module.css';

const SellMarketPlace = () => {
    const sellContainerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sellContainerRef,
        offset: ['start end', '1 0.6'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['-45%', '0%']);
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

    return (
        <section
            className={`relative z-[var(--z-index-400)] bg-[var(--primary-background-900)] pt-20 pb-8 overflow-hidden`}
        >
            <div className={`section_wrapper ${styles.sell_container}`} ref={sellContainerRef}>
                <div className={styles.sell_content_container}>
                    <h2 className={`intro_title ${styles.sell_title}`}>
                        Become <span style={{ textTransform: 'lowercase' }}>a</span> seller on X-Mart
                    </h2>
                    <p className={styles.sell_description}>
                        Sell on X-Mart and get access to our large and growing customer base.
                    </p>
                    <p className={styles.sell_extra_info}>
                        Avail 1-Click Launch Support at no additional cost.
                    </p>
                    <Button classes={styles.sell_btn}>Start selling</Button>
                </div>
                <div className={`gradient_border ${styles.sell_right_container}`}>
                    <m.div className={styles.parallax_img_container} style={{ y, scale }}>
                        <img src={sellImage} />
                    </m.div>
                </div>
            </div>
        </section>
    );
};

export default SellMarketPlace;
