import { AnimatePresence, m } from 'framer-motion';
import { useRef } from 'react';

import { AiFillCheckCircle, ImCross } from '../utils/index';

import Button from '../components/UI/Button';
import { useFilterContext } from '../store/filter-context';
import styles from './ProductsFilterDropdown.module.css';

const parentVariants = {
    visible: {
        scale: 1,
        y: '0px',
        transition: {
            type: 'spring',
            when: 'beforeChildren',
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
    hidden: {
        scale: 0,
        y: '-100px',
        transition: {
            type: 'spring',
            when: 'afterChildren',
            staggerChildren: 0.2,
            staggerDirection: -1,
        },
    },
};

const childVariants = {
    visible: { y: '0px', opacity: 1 },
    hidden: { y: '-50px', opacity: 0 },
};

const ProductsFilterDropdown = ({ isFiltersDropdownVisible }) => {
    const searchInputRef = useRef();
    const filterDropdownRef = useRef();

    const { allProductsList, filters, handleFilterChange, handleClearFilters } = useFilterContext();
    const uniqueColorsArr = [...new Set(allProductsList.map(productData => productData.colors).flat())];

    const searchProductHandler = e => {
        e.preventDefault();
        searchInputRef.current.classList.remove(`${styles.active}`);
        searchInputRef.current.value = '';
        searchInputRef.current.blur();
        handleFilterChange.call('clear_search_term');
    };

    return (
        <AnimatePresence>
            {isFiltersDropdownVisible && (
                <m.div
                    ref={filterDropdownRef}
                    className={styles.products_filter_dropdown_container}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={parentVariants}
                    onClick={e => {
                        window.scrollTo(0, filterDropdownRef.current.getBoundingClientRect().height);
                    }}
                >
                    <m.div variants={childVariants} className={styles.filter_first_cont}>
                        <h3 className={styles.filter_title}>Categories</h3>
                        <div className={styles.filter_categories_cont}>
                            <button
                                type="button"
                                onClick={handleFilterChange.bind('category')}
                                className={`${styles.category_btn} ${
                                    filters['category'] === 'all' ? styles.active : ''
                                }`}
                            >
                                All
                            </button>
                            <button
                                type="button"
                                onClick={handleFilterChange.bind('category')}
                                className={`${styles.category_btn} ${
                                    filters['category'] === 'office' ? styles.active : ''
                                }`}
                            >
                                Office
                            </button>
                            <button
                                type="button"
                                onClick={handleFilterChange.bind('category')}
                                className={`${styles.category_btn} ${
                                    filters['category'] === 'living room' ? styles.active : ''
                                }`}
                            >
                                Living Room
                            </button>
                            <button
                                type="button"
                                onClick={handleFilterChange.bind('category')}
                                className={`${styles.category_btn} ${
                                    filters['category'] === 'kitchen' ? styles.active : ''
                                }`}
                            >
                                Kitchen
                            </button>
                            <button
                                type="button"
                                onClick={handleFilterChange.bind('category')}
                                className={`${styles.category_btn} ${
                                    filters['category'] === 'bedroom' ? styles.active : ''
                                }`}
                            >
                                Bedroom
                            </button>
                            <button
                                type="button"
                                onClick={handleFilterChange.bind('category')}
                                className={`${styles.category_btn} ${
                                    filters['category'] === 'dining' ? styles.active : ''
                                }`}
                            >
                                Dining
                            </button>
                        </div>
                    </m.div>
                    <m.div variants={childVariants} className={styles.filter_second_cont}>
                        <div>
                            <h3 className={styles.filter_title}>Colors</h3>
                            <div className={styles.filter_colors_container}>
                                <button
                                    data-filter-color={'all'}
                                    className={`${styles.first_color_btn} ${
                                        filters['color'] === 'all' ? styles.active : ''
                                    }`}
                                    onClick={handleFilterChange.bind('color')}
                                >
                                    All
                                </button>
                                {uniqueColorsArr.map(color => (
                                    <button
                                        key={color}
                                        className={styles.color_btn}
                                        style={{ backgroundColor: color }}
                                        data-filter-color={color}
                                        onClick={handleFilterChange.bind('color')}
                                    >
                                        {filters['color'] === color ? <AiFillCheckCircle /> : null}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.filter_title}>Price</h3>
                            <label htmlFor="price_range" className={styles.price_range_label}>
                                <input
                                    type="range"
                                    id="price_range"
                                    min="0"
                                    max={`${filters['max']}`}
                                    step="1000"
                                    value={`${filters['currFilterPrice']}`}
                                    onChange={handleFilterChange.bind('currFilterPrice')}
                                />
                                <span className={styles.price_tooltip}>{filters['currFilterPrice']}</span>
                            </label>
                        </div>
                    </m.div>
                    <m.div variants={childVariants} className={styles.filter_third_cont}>
                        <form className={styles.search_product_form} onSubmit={searchProductHandler}>
                            <input
                                type="text"
                                placeholder="Search for an item"
                                className={styles.search_product_input}
                                ref={searchInputRef}
                                onClick={e => {
                                    !e.target.classList.contains(`${styles.active}`) &&
                                        e.target.classList.add(`${styles.active}`);
                                }}
                                onChange={handleFilterChange.bind('searchTerm')}
                                value={filters['searchTerm']}
                            />
                            <m.button whileTap={{ scale: 0.9 }} className={styles.search_item_submit}>
                                <ImCross />
                            </m.button>
                        </form>
                        <label htmlFor="delivery" className={styles.delivery_label}>
                            <span>Free delivery</span>
                            <input
                                type="checkbox"
                                id="delivery"
                                onChange={handleFilterChange.bind('freeDelivery')}
                                checked={filters['freeDelivery']}
                            />
                        </label>
                        <Button
                            classes="py-2 px-4 sm:py-3 sm:px-6 rounded-md tracking-wide self-start bg-[var(--secondary-background-300)]"
                            clickHandler={handleClearFilters}
                        >
                            Clear Filters
                        </Button>
                    </m.div>
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default ProductsFilterDropdown;
