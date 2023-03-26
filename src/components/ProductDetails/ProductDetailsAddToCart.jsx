import styles from '../../pages/ProductDetails.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from '../../utils/index';

import Button from '../UI/Button';

const ProductDetailsAddToCart = ({ colors, stock, addToCartHandler }) => {
    const [activeColor, setActiveColor] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const updateQuantity = inc => {
        if (inc) {
            if (quantity === stock) return;
            setQuantity(quantity => quantity + 1);
        } else {
            if (quantity === 1) return;
            setQuantity(quantity => quantity - 1);
        }
    };

    return (
        <>
            <div className={styles.colors_container}>
                <span>Color:</span>
                {colors.map((color, id) => (
                    <button
                        key={id}
                        className={styles.product_color_btn}
                        style={{ backgroundColor: `${color}` }}
                        onClick={() => {
                            setActiveColor(id);
                        }}
                    >
                        {activeColor === id ? <AiFillCheckCircle /> : null}
                    </button>
                ))}
            </div>
            <div className={styles.quantity_update_container}>
                <Button
                    classes="bg-[var(--secondary-background-300)] px-0 py-0 rounded-[50%] h-8 w-8"
                    clickHandler={updateQuantity.bind(null, true)}
                >
                    +
                </Button>
                <span>{quantity}</span>
                <Button
                    classes="bg-[var(--secondary-background-300)] px-0 py-0 rounded-[50%] h-8 w-8"
                    clickHandler={updateQuantity.bind(null, false)}
                >
                    -
                </Button>
            </div>
            <Link
                to="/cart"
                onClick={addToCartHandler.bind(null, {
                    productColor: colors[activeColor],
                    productQty: quantity,
                })}
            >
                <Button classes={`bg-blue-gradient ${styles.add_to_cart_btn}`}>Add to cart</Button>
            </Link>
        </>
    );
};

export default ProductDetailsAddToCart;
