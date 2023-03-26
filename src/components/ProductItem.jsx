import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

import { formatPrice } from '../utils/helpers';

import styles from '../pages/ProductsList.module.css';

const ProductItem = ({ id, name, description, price, category, company, image }) => {
    const formattedPrice = formatPrice(price);

    description =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt dolore molestias molestiae doloribus aliquid perspiciatis error illo. Explicabo, sunt.';

    return (
        <m.li className={styles.product_container} layout transition={{ duration: 0.7 }}>
            <div className={styles.product_img_cont}>
                <Link className={styles.product_link} to={`/products/${id}`}>
                    <img src={image} alt={`${name} image`} />
                </Link>
            </div>
            <div className={styles.product_info_container}>
                <h2 className={styles.product_title}>
                    <Link to={`/products/${id}`}>{name}</Link>
                </h2>
                <p className={styles.product_company}>{company}</p>
                <p className={styles.product_price}>{formattedPrice}</p>
                <p className={styles.product_description}>{description}</p>
            </div>
        </m.li>
    );
};

export default ProductItem;
