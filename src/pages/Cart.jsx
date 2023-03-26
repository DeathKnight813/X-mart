import { m, AnimatePresence } from 'framer-motion';
import Button from '../components/UI/Button';

import CartItem from '../components/CartItem';

import styles from './Cart.module.css';
import SecondaryError from '../components/UI/SecondaryError';
import { useCartContext } from '../store/cart-context';
import { formatPrice } from '../utils/helpers';
import { useState } from 'react';

function CartPage() {
    const { cartList, totalCartItems, totalShippingFee, clearCart } = useCartContext();

    const [placeOrderContent, setPlaceOrderContent] = useState('Place order');

    const cartSubTotalPrice = cartList.reduce((acc, curr) => {
        const { price, quantity } = curr;
        return price * quantity + acc;
    }, 0);

    const totalCartAmount = totalShippingFee + cartSubTotalPrice;

    const formattedDeliveryCharge = formatPrice(totalShippingFee);
    const formattedCartSubTotalPrice = formatPrice(cartSubTotalPrice);
    const formattedTotalCartAmount = formatPrice(totalCartAmount);

    const placeOrderHandler = () => {
        setPlaceOrderContent("It's just a dummy button");
        setTimeout(() => {
            setPlaceOrderContent('Place order');
        }, 1000);
    };

    return (
        <>
            <div className="page_intro_background">Your Cart</div>
            <section className={`section_wrapper ${styles.cart_section}`}>
                {cartList.length === 0 && (
                    <SecondaryError
                        errorMsg="Your cart is empty"
                        navigateTo={'/products'}
                        buttonMsg={'Shop now'}
                    />
                )}
                {cartList.length > 0 && (
                    <>
                        <div className={styles.cart_list_container}>
                            <m.ul>
                                <AnimatePresence>
                                    {cartList.map(cartData => (
                                        <CartItem key={cartData.cartId} {...cartData} />
                                    ))}
                                </AnimatePresence>
                            </m.ul>
                        </div>
                        <div className={`gradient_border ${styles.cart_summary_container}`}>
                            <h2 className={styles.cart_summary_title}>Order details</h2>
                            <div className={styles.cart_details_container}>
                                <p className={styles.cart_detail_content}>
                                    <span className={styles.content_summary_label}>
                                        Subtotal ({totalCartItems} items):
                                    </span>
                                    <span>{formattedCartSubTotalPrice}</span>
                                </p>
                                <p className={styles.cart_detail_content}>
                                    <span className={styles.content_summary_label}>Delivery charges:</span>
                                    <span>{formattedDeliveryCharge}</span>
                                </p>
                                <p className={styles.cart_detail_content}>
                                    <span className={styles.content_summary_label}>Total amount:</span>
                                    <span>{formattedTotalCartAmount}</span>
                                </p>
                            </div>
                            <div className={styles.cart_summary_actions_container}>
                                <Button
                                    classes="py-2.5 px-6 bg-[var(--secondary-background-300)] bg-blue-gradient grow rounded-md"
                                    clickHandler={placeOrderHandler}
                                >
                                    {placeOrderContent}
                                </Button>
                                <Button
                                    classes="py-2.5 px-7 bg-[var(--secondary-background-300)] bg-blue-gradient grow rounded-md"
                                    clickHandler={() => {
                                        window.scrollTo(0, window.innerHeight / 3);
                                        clearCart();
                                    }}
                                >
                                    Clear cart
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </>
    );
}

export default CartPage;
