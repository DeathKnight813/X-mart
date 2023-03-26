import { useRef } from 'react';

import { m, useCycle } from 'framer-motion';
import useDimensions from '../../hooks/use-dimensions';

import styles from './MainNavbar.module.css';

import HamMenuToggle from './HamMenuToggle';
import PrimaryNavbar from './PrimaryNavbar';

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 250px 45px)`,
        transition: {
            duration: 1.2,
        },
    }),
    closed: {
        clipPath: 'circle(30px at 250px 45px)',
        transition: {
            delay: 0.5,
        },
    },
};

const Hamburger = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <>
            <m.nav
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                custom={height}
                ref={containerRef}
                className={styles.hamburger_container}
            >
                <m.div className={styles.ham_white_background} variants={sidebar} />
                <HamMenuToggle toggle={() => toggleOpen()} />
                <PrimaryNavbar
                    parentClass={styles.mobile_navbar_container}
                    buttonClass={styles.mobile_nav_cart_btn}
                    toggle={() => toggleOpen()}
                />
            </m.nav>
            {isOpen && <div className={styles.ham_overlay}></div>}
        </>
    );
};

export default Hamburger;
