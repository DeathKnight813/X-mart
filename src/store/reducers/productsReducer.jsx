import {
    GET_PRODUCTS_LIST,
    PRODUCTS_LIST_LOADING,
    PRODUCTS_LIST_ERROR,
    GET_SINGLE_PRODUCT,
    SINGLE_PRODUCT_LOADING,
    SINGLE_PRODUCT_ERROR,
} from '../../utils/constants';

const personalFeaturedIndexes = [2, 4, 8, 11, 12, 21];

const productsReducer = (state, action) => {
    if (action.type === PRODUCTS_LIST_LOADING) {
        return { ...state, productsListLoading: true };
    }

    if (action.type === PRODUCTS_LIST_ERROR) {
        return { ...state, productsListLoading: false, productsListError: action.payload };
    }

    if (action.type === GET_PRODUCTS_LIST) {
        const featuredProducts = action.payload.filter((productData, i) =>
            personalFeaturedIndexes.includes(i)
        );

        return {
            ...state,
            productsListLoading: false,
            productsListError: null,
            featuredProducts,
            productsList: action.payload,
        };
    }

    if (action.type === SINGLE_PRODUCT_LOADING) {
        return { ...state, singleProductLoading: true };
    }

    if (action.type === SINGLE_PRODUCT_ERROR) {
        return { ...state, singleProductLoading: false, singleProductError: action.payload };
    }

    if (action.type === GET_SINGLE_PRODUCT) {
        return {
            ...state,
            singleProductLoading: false,
            singleProductError: null,
            singleProduct: action.payload,
        };
    }

    throw new Error('Invalid action type', action.type, `in ${productsReducer.name}.`);
};

export default productsReducer;
