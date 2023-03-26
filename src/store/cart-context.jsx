import React, { useContext, useEffect, useReducer } from 'react';
import { ADD_TO_CART, CLEAR_CART, DELETE_CART_ITEM, UPDATE_CART_ITEM } from '../utils/constants';
import cartReducer from './reducers/cartReducer';

const getCartStateFromLocalStorage = () => {
    if (localStorage.getItem('cart_state')) return JSON.parse(localStorage.getItem('cart_state'));
    return {
        cartList: [],
        totalCartItems: 0,
        totalShippingFee: 0,
    };
};

const initialState = getCartStateFromLocalStorage();

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart_state', JSON.stringify(state));
    }, [state]);

    const addToCart = productDetails => {
        dispatch({ type: ADD_TO_CART, payload: productDetails });
    };

    const updateCartItem = (id, activity) => {
        dispatch({ type: UPDATE_CART_ITEM, payload: { id, activity } });
    };

    const deleteCartItem = id => {
        dispatch({ type: DELETE_CART_ITEM, payload: id });
    };

    const clearCart = () => {
        dispatch({
            type: CLEAR_CART,
            payload: {
                cartList: [],
                totalCartItems: 0,
                totalShippingFee: 0,
            },
        });
    };

    return (
        <CartContext.Provider value={{ ...state, addToCart, updateCartItem, deleteCartItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);

export default CartProvider;
