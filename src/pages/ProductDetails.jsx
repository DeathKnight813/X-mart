import { CiDeliveryTruck, GiCardExchange, RiSecurePaymentLine, SiAdguard } from '../utils/index';

import SecondaryError from '../components/UI/SecondaryError';

import styles from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../store/products-context';
import Loading from '../components/UI/Loading';
import { useEffect } from 'react';

import { single_product_url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import Stars from '../components/ProductDetails/Stars';
import ProductDetailsImages from '../components/ProductDetails/ProductDetailsImages';
import ProductDetailsAddToCart from '../components/ProductDetails/ProductDetailsAddToCart';
import { useCartContext } from '../store/cart-context';

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const { addToCart } = useCartContext();

    const { singleProduct, singleProductLoading, singleProductError, fetchSingleProduct } =
        useProductsContext();

    useEffect(() => {
        fetchSingleProduct(`${single_product_url}${productId}`);
    }, [productId]);

    if (singleProductLoading) {
        return <Loading />;
    }

    if (singleProductError) {
        return (
            <SecondaryError errorMsg={singleProductError} navigateTo={'/products'} buttonMsg={'All products'} />
        );
    }

    if (Object.keys(singleProduct).length === 0) {
        return (
            <SecondaryError errorMsg={'No product found'} navigateTo={'/products'} buttonMsg={'All products'} />
        );
    }

    const { id, name, description, price, stars, reviews, images, colors, company, stock, shipping } =
        singleProduct;

    const oldPrice = price * 2;

    const formattedCurrPrice = formatPrice(price);
    const formattedOldPrice = formatPrice(oldPrice);

    const addToCartHandler = addToCartInfo => {
        const addToCartProductInfo = {
            ...addToCartInfo,
            id,
            name,
            price,
            image: images[0].url,
            company,
            stock,
            shipping,
        };

        addToCart(addToCartProductInfo);
    };

    return (
        <section className={`${styles.product_details_section} section_wrapper`}>
            <ProductDetailsImages images={images} />
            <div className={styles.product_info_container}>
                <h1 className={styles.product_title}>{name}</h1>
                <div className={styles.product_feedback}>
                    <div className={styles.product_stars_cont}>
                        <Stars rating={stars} />
                    </div>
                    <p>({reviews} customer reviews)</p>
                </div>
                <div className={styles.product_prices_container}>
                    <p className={styles.product_curr_price_cont}>
                        <span className={styles.product_curr_price}>{formattedCurrPrice}</span>
                        <span>50% off</span>
                    </p>
                    <p className={styles.product_old_price_cont}>
                        MRP: <span className={styles.product_old_price}>{formattedOldPrice}</span>
                    </p>
                </div>
                <p className={styles.product_description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error sunt sapiente aut
                    laborum, quibusdam, esse ullam cumque quis incidunt recusandae perspiciatis molestias sit
                    dicta, optio natus! Quisquam, error nulla nobis sunt dolorem laudantium aut, nemo nisi
                    animi totam qui?
                </p>
                <div className={styles.icons_container}>
                    <div className={styles.icon_cont}>
                        <CiDeliveryTruck />
                        <p>Fast delivery</p>
                    </div>
                    <div className={styles.icon_cont}>
                        <RiSecurePaymentLine />
                        <p>Secure payment</p>
                    </div>
                    <div className={styles.icon_cont}>
                        <GiCardExchange />
                        <p>10 days replacement</p>
                    </div>
                    <div className={styles.icon_cont}>
                        <SiAdguard />
                        <p>3 yrs warranty</p>
                    </div>
                </div>
                <div className={styles.product_more_info}>
                    <p>
                        <span className={styles.product_more_info_title}>Availability:</span>
                        {stock > 0 ? 'In stock' : 'Out of stock'} {stock > 0 ? `(${stock})` : ''}
                    </p>
                    <p>
                        <span className={styles.product_more_info_title}>Brand: </span>
                        {company}
                    </p>
                </div>
                {stock > 0 && (
                    <ProductDetailsAddToCart
                        colors={colors}
                        stock={stock}
                        addToCartHandler={addToCartHandler}
                    />
                )}
            </div>
        </section>
    );
};

export default ProductDetailsPage;
