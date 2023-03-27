import {
    ADD_TO_CART,
    CLEAR_CART,
    DELETE_CART_ITEM,
    SHIPPING_COST,
    UPDATE_CART_ITEM,
} from '../../utils/constants';

const cartReducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        let tempTotalCartItems = state.totalCartItems;
        let tempShippingFee = state.totalShippingFee;

        const { id, name, price, company, stock, image, shipping, productQty, productColor } = action.payload;

        let tempCartList = [...state.cartList];
        const colorId = id + productColor;

        const productIdx = tempCartList.findIndex(product => product.cartId === colorId);

        if (productIdx === -1) {
            tempCartList.push({
                productId: id,
                name,
                price,
                company,
                stock,
                image,
                shipping,
                cartId: colorId,
                color: productColor,
                quantity: productQty,
            });

            tempTotalCartItems += productQty;
            shipping && (tempShippingFee += SHIPPING_COST);
        } else {
            let updatedQuantity = tempCartList[productIdx].quantity + productQty;
            if (updatedQuantity > stock) {
                updatedQuantity = stock;
            }

            tempTotalCartItems +=
                tempCartList[productIdx].quantity + productQty > stock
                    ? stock - tempCartList[productIdx].quantity
                    : productQty;

            tempCartList[productIdx] = {
                ...tempCartList[productIdx],
                quantity: updatedQuantity,
            };
        }

        return {
            ...state,
            cartList: tempCartList,
            totalCartItems: tempTotalCartItems,
            totalShippingFee: tempShippingFee,
        };
    }

    if (action.type === DELETE_CART_ITEM) {
        const tempCartList = [...state.cartList];
        let tempTotalCartItems = state.totalCartItems;
        let tempTotalShippingFee = state.totalShippingFee;

        const toDeleteItemIdx = tempCartList.findIndex(cartItem => cartItem.cartId === action.payload);

        if (tempCartList[toDeleteItemIdx].shipping) {
            tempTotalShippingFee -= SHIPPING_COST;
        }

        tempTotalCartItems -= tempCartList[toDeleteItemIdx].quantity;

        tempCartList.splice(toDeleteItemIdx, 1);

        return {
            ...state,
            cartList: tempCartList,
            totalCartItems: tempTotalCartItems,
            totalShippingFee: tempTotalShippingFee,
        };
    }

    if (action.type === UPDATE_CART_ITEM) {
        const tempCartList = [...state.cartList];
        let tempTotalCartItems = state.totalCartItems;

        const toUpdateItemIdx = tempCartList.findIndex(cartItem => cartItem.cartId === action.payload.id);

        let updatedQuantity;

        if (action.payload.activity === 'inc') {
            updatedQuantity = tempCartList[toUpdateItemIdx].quantity + 1;

            if (updatedQuantity > tempCartList[toUpdateItemIdx].stock) {
                updatedQuantity = tempCartList[toUpdateItemIdx].stock;
            } else {
                tempTotalCartItems++;
            }
        } else {
            updatedQuantity = tempCartList[toUpdateItemIdx].quantity - 1;

            if (updatedQuantity < 1) {
                updatedQuantity = 1;
            } else {
                tempTotalCartItems--;
            }
        }

        tempCartList[toUpdateItemIdx] = {
            ...tempCartList[toUpdateItemIdx],
            quantity: updatedQuantity,
        };

        return { ...state, cartList: tempCartList, totalCartItems: tempTotalCartItems };
    }

    if (action.type === CLEAR_CART) {
        return { ...state, ...action.payload };
    }

    throw new Error('Invalid action type', action.type, `in ${cartReducer.name}.`);
};

export default cartReducer;
