import { m, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import styles from './Hero.module.css';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const windowWidth = window.innerWidth;
let ellipseStartingY = 70;
const borderThickness = 2;
const mobileDeviceWidth = 600;

const startingViewport = 1300;

if (windowWidth > startingViewport) {
    const diff = (windowWidth - startingViewport) / 30;
    ellipseStartingY -= diff;
}

const Hero = () => {
    const heroSectionRef = useRef();
    const heroContentRef = useRef();

    const [isMobileDevice, setIsMobileDevice] = useState(false);
    useEffect(() => {
        if (window.innerWidth < mobileDeviceWidth) {
            setIsMobileDevice(true);
        }
    }, []);
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < mobileDeviceWidth) {
                setIsMobileDevice(true);
            } else {
                setIsMobileDevice(false);
            }
        });
        return () => {
            window.removeEventListener('resize', () => {});
        };
    }, []);

    // For ellipse:
    const [ellipseYRadius, setEllipseYRadius] = useState(`${ellipseStartingY}%`);

    const { scrollYProgress: heroSectionYProgress } = useScroll({
        target: heroSectionRef,
        offset: ['start start', 'end end'],
    });

    const clipDimensions = useTransform(heroSectionYProgress, [0, 1], [`${ellipseStartingY}%`, '150%']);

    useMotionValueEvent(clipDimensions, 'change', latest => {
        setEllipseYRadius(latest);
    });

    const ellipseContXRadius = Math.trunc(parseFloat(ellipseYRadius)) / 2;
    const heroImgContEllipseXRadius = Math.trunc(parseFloat(ellipseYRadius) - borderThickness) / 2;

    const ellipseContClipDimensions = `ellipse(${
        isMobileDevice ? parseFloat(ellipseYRadius) : ellipseContXRadius
    }% ${ellipseYRadius} at 50% 100%)`;

    const heroImgContClipDimensions = `ellipse(${
        isMobileDevice ? parseFloat(ellipseYRadius) - borderThickness : heroImgContEllipseXRadius
    }% ${parseFloat(ellipseYRadius) - borderThickness}% at 50% 100%)`;

    // For parallax effect:
    const { scrollYProgress: parallaxYProgress } = useScroll({
        target: heroSectionRef,
        offset: ['1 1.3', 'end start'], // How early we want the hero-img-parallax to start.
    });
    const y = useTransform(parallaxYProgress, [0, 1], ['0%', '17%']);

    // Hero content:
    const { scrollYProgress: heroContentYProgress } = useScroll({
        target: heroContentRef,
        offset: ['end end', '1 0.7'],
    });

    const heroContentScale = useTransform(heroContentYProgress, [0, 1], [0.8, 1.1]);
    const heroContentY = useTransform(heroContentYProgress, [0, 1], ['10px', '-50px']);

    return (
        <m.section ref={heroSectionRef} className={`${styles.hero_section}`}>
            <m.div
                style={{
                    clipPath: ellipseContClipDimensions,
                }}
                className={styles.ellipse_cont}
            >
                <m.div
                    style={{
                        y,
                        clipPath: heroImgContClipDimensions,
                    }}
                    className={styles.hero_img_cont}
                ></m.div>
                <m.div
                    ref={heroContentRef}
                    style={{ scale: heroContentScale, y: heroContentY }}
                    className={styles.hero_content_cont}
                >
                    <h1 className={styles.hero_title}>
                        <p>Affordable</p>
                        <p>&</p>
                        <p>Adequate</p>
                    </h1>
                    <p className={styles.hero_subtitle}>Your home, your style, our furniture.</p>
                    <Link to="/products">
                        <Button classes={`${styles.hero_btn}`}>Shop now</Button>
                    </Link>
                </m.div>
            </m.div>
        </m.section>
    );
};

export default Hero;
