import { m, LazyMotion, domMax } from 'framer-motion';
import { useEffect, useState } from 'react';

import ProductItem from '../components/ProductItem';
import AnimatedDropdown from '../components/AnimatedDropdown';
import ProductsFilterDropdown from '../components/ProductsFilterDropdown';
import SecondaryError from '../components/UI/SecondaryError';

import styles from './ProductsList.module.css';
import Button from '../components/UI/Button';
import { useGlobalContext } from '../store/global-context';
import { useProductsContext } from '../store/products-context';
import Loading from '../components/UI/Loading';
import { useFilterContext } from '../store/filter-context';

const ProductsListPage = () => {
    const { handleNavHeaderPosition } = useGlobalContext();
    const { productsList, productsListLoading, productsListError } = useProductsContext();
    const { filteredProductsList } = useFilterContext();

    const [isFiltersDropdownVisible, setIsFiltersDropdownVisible] = useState(false);

    useEffect(() => {
        handleNavHeaderPosition('absolute');
        return () => {
            handleNavHeaderPosition('fixed');
        };
    }, []);

    let productsSectionContent;

    if (productsListLoading) {
        productsSectionContent = <Loading />;
    } else if (productsListError) {
        productsSectionContent = <SecondaryError errorMsg={productsListError} buttonMsg={'Home'} />;
    } else if (productsList.length === 0) {
        productsSectionContent = <SecondaryError errorMsg={'Sorry. No product found :('} buttonMsg={'Home'} />;
    } else {
        productsSectionContent = (
            <LazyMotion features={domMax}>
                <div className={styles.products_section_header}>
                    <div className={styles.products_section_header_top}>
                        <p className={styles.products_count_info}>
                            {filteredProductsList.length} products found
                        </p>
                        <Button
                            classes={`bg-blue-gradient ${styles.filter_btn}`}
                            clickHandler={() => {
                                setIsFiltersDropdownVisible(prev => !prev);
                            }}
                        >
                            {isFiltersDropdownVisible ? 'Close' : 'Filters'}
                        </Button>
                        <AnimatedDropdown />
                    </div>
                    <ProductsFilterDropdown isFiltersDropdownVisible={isFiltersDropdownVisible} />
                </div>
                {filteredProductsList.length > 0 && (
                    <m.div className={styles.products_section_body} layout>
                        <m.ul layout>
                            {filteredProductsList.length > 0 &&
                                filteredProductsList.map(product => (
                                    <ProductItem key={product.id} {...product} />
                                ))}
                            {filteredProductsList.length === 0 &&
                                productsList.map(product => <ProductItem key={product.id} {...product} />)}
                        </m.ul>
                    </m.div>
                )}
                {filteredProductsList.length === 0 && (
                    <SecondaryError errorMsg={'Sorry. No product matches your filter :('} buttonMsg={'Home'} />
                )}
            </LazyMotion>
        );
    }

    return (
        <>
            <div className="page_intro_background">Products List</div>

            <section className={`section_wrapper ${styles.products_list_section}`}>
                {productsSectionContent}
            </section>
        </>
    );
};

export default ProductsListPage;
