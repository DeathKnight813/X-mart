import { navLinks } from '../../utils/constants';

import { NavLink } from 'react-router-dom';
import { m } from 'framer-motion';

import Button from '../UI/Button';
import { FaShoppingCart } from '../../utils/index';

import mainNavbarStyles from '../Navbar/MainNavbar.module.css';
import { useCartContext } from '../../store/cart-context';
import { useEffect, useState } from 'react';

const parentVariants = {
    open: {
        height: 'auto',
        transition: { staggerChildren: 0.2, delayChildren: 0.1, when: 'beforeChildren' },
    },
    closed: {
        height: 0,
        transition: { staggerChildren: 0.1, staggerDirection: -1, when: 'afterChildren' },
    },
};

const childVariants = {
    open: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 100,
        opacity: 0,
        scale: 0,
        transition: {
            y: { stiffness: 700 },
        },
    },
};

const PrimaryNavbar = ({ parentClass, buttonClass, toggle }) => {
    const { totalCartItems } = useCartContext();

    const [bumpAnimate, setBumpAnimate] = useState(false);

    useEffect(() => {
        setBumpAnimate(true);

        const timerId = setTimeout(() => setBumpAnimate(false), 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [totalCartItems]);

    return (
        <>
            <m.ul className={parentClass} variants={parentVariants}>
                {navLinks.map(navLink => (
                    <m.li key={navLink.id} variants={childVariants} onClick={toggle}>
                        <NavLink className="white_hover_underline" to={navLink.link}>
                            {navLink.name}
                        </NavLink>
                    </m.li>
                ))}
            </m.ul>
            <NavLink to="/cart">
                <Button
                    classes={`${buttonClass} px-4 py-2 bg-blue-400 flex items-center gap-4 ${
                        bumpAnimate ? `${mainNavbarStyles.bump_animate}` : ''
                    }`}
                    propVariant={childVariants}
                    clickHandler={toggle}
                >
                    <FaShoppingCart />
                    <span>Your cart</span>
                    <span className="h-6 w-6 rounded-[50%] font-bold flex justify-center items-center bg-[var(--secondary-background-500)] text-white">
                        {totalCartItems}
                    </span>
                </Button>
            </NavLink>
        </>
    );
};

export default PrimaryNavbar;
