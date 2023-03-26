import { useState } from 'react';
import { m } from 'framer-motion';

import styles from './AnimatedDropdown.module.css';
import Button from './UI/Button';
import { useFilterContext } from '../store/filter-context';

import {
    SORT_ALPHABETICAL_ASCENDING,
    SORT_ALPHABETICAL_DESCENDING,
    SORT_NUM_ASCENDING,
    SORT_NUM_DESCENDING,
} from '../utils/constants';

const parentVariants = {
    open: {
        clipPath: 'inset(0% 0% 0% 0% round 10px)',
        transition: {
            duration: 0.2,
            delayChildren: 0.3,
            staggerChildren: 0.05,
        },
    },
    closed: {
        clipPath: 'inset(10% 50% 90% 50% round 10px)',
        transition: {
            duration: 0.3,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 700 },
    },
    closed: { y: 20, opacity: 0, transition: { duration: 0.3 } },
};

const AnimatedDropdown = () => {
    const { handleProductsSorting } = useFilterContext();
    const [isOpen, setIsOpen] = useState(false);
    let dropdownTitle;

    const { filters } = useFilterContext();

    // 2 way binding:
    if(filters.sortType === SORT_NUM_ASCENDING) {
        dropdownTitle = 'Price (low to high)'
    } else if(filters.sortType === SORT_NUM_DESCENDING) {
        dropdownTitle = 'Price (high to low)'
    } else if(filters.sortType === SORT_ALPHABETICAL_ASCENDING) {
        dropdownTitle = 'Name (A to Z)'
    } else if(filters.sortType === SORT_ALPHABETICAL_DESCENDING) {
        dropdownTitle = 'Name (Z to A)'
    }

    const toggleDropdownVisibility = e => {
        if (
            e.target.className.includes('_dropdown_button') ||
            e.target.parentElement.className.includes('_dropdown_button')
        ) {
            setIsOpen(prev => !prev);
        }

        if (e.target.className.includes('_dropdown_item')) {
            setIsOpen(false);
        }
    };

    return (
        <m.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className={styles.dropdown_container}
            onClick={toggleDropdownVisibility}
        >
            <Button classes={`${styles.dropdown_button} bg-blue-gradient sm:px-8 sm:py-2 py-1.5 px-6`}>
                <span className="mr-2">{dropdownTitle}</span>
                <m.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </m.div>
            </Button>
            <m.ul
                className={styles.dropdown_list_container}
                variants={parentVariants}
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
                <m.li
                    className={styles.dropdown_item}
                    variants={itemVariants}
                    onClick={handleProductsSorting.bind(null, SORT_NUM_ASCENDING)}
                >
                    Price (low to high)
                </m.li>
                <m.li
                    className={styles.dropdown_item}
                    variants={itemVariants}
                    onClick={handleProductsSorting.bind(null, SORT_NUM_DESCENDING)}
                >
                    Price (high to low)
                </m.li>
                <m.li
                    className={styles.dropdown_item}
                    variants={itemVariants}
                    onClick={handleProductsSorting.bind(null, SORT_ALPHABETICAL_ASCENDING)}
                >
                    Name (A to Z)
                </m.li>
                <m.li
                    className={styles.dropdown_item}
                    variants={itemVariants}
                    onClick={handleProductsSorting.bind(null, SORT_ALPHABETICAL_DESCENDING)}
                >
                    Name (Z to A)
                </m.li>
            </m.ul>
        </m.div>
    );
};

export default AnimatedDropdown;
