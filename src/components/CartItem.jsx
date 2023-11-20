import { m } from 'framer-motion';

import { formatPrice } from '../utils/helpers';

import styles from '../pages/Cart.module.css';
import Button from './UI/Button';
import { useCartContext } from '../store/cart-context';
import { Link } from 'react-router-dom';

const CartItem = ({
    productId,
    cartId,
    name,
    price: productPrice,
    company,
    stock,
    image,
    color,
    quantity,
}) => {
    const { updateCartItem, deleteCartItem } = useCartContext();

    const totalPrice = productPrice * quantity;

    const formattedProductPrice = formatPrice(productPrice);
    const formattedTotalPrice = formatPrice(totalPrice);

    return (
        <m.li
            className={styles.cart_item_container}
            exit={{ height: 0, padding: 0, margin: 0, opacity: 0 }}
            transition={{
                opacity: { duration: 0.5 },
                // LEARN: trick...
                default: { delay: 0.5 },
            }}
            layout
        >
            <m.div className={styles.cart_item_first_cont}>
                <div className={styles.cart_item_img_cont}>
                    <img src={image} alt="" />
                </div>
                <Link to={`/products/${productId}`}>
                    <h3 className={styles.cart_item_title}>
                        {name} | {company}
                    </h3>
                </Link>
                <p>{formattedProductPrice}</p>
                <p className={styles.cart_item_color_cont}>
                    <span>Color:</span>
                    <span
                        style={{
                            backgroundColor: color,
                            height: '1rem',
                            width: '1rem',
                            borderRadius: '10%',
                        }}
                    ></span>
                </p>
            </m.div>
            <m.div className={styles.cart_item_second_cont}>
                <div className={styles.cart_item_subtotal_cont}>
                    <p>{formattedTotalPrice}</p>
                </div>
                <div className={styles.qty_update_cont}>
                    <Button
                        classes={`px-0 py-0 flex justify-center items-center w-8 h-8 rounded-[50%] bg-[var(--secondary-background-300)]`}
                        clickHandler={updateCartItem.bind(null, cartId, 'inc')}
                    >
                        +
                    </Button>
                    <div className={styles.cart_item_qty}>{quantity}</div>
                    <Button
                        classes={`px-0 py-0 flex justify-center items-center w-8 h-8 rounded-[50%] bg-[var(--secondary-background-300)]`}
                        clickHandler={updateCartItem.bind(null, cartId, 'dec')}
                    >
                        -
                    </Button>
                </div>
                <div className={styles.cart_item_delete_cont}>
                    <Button
                        classes={`${styles.cart_item_delete_btn} py-1.5 px-8 bg-[var(--secondary-background-300)]`}
                        clickHandler={deleteCartItem.bind(null, cartId)}
                    >
                        Delete
                    </Button>
                </div>
            </m.div>
        </m.li>
    );
};
export default CartItem;
