import React, { useContext, useEffect, useReducer } from 'react';
import {
    products_url,
    GET_PRODUCTS_LIST,
    PRODUCTS_LIST_LOADING,
    PRODUCTS_LIST_ERROR,
    SINGLE_PRODUCT_LOADING,
    SINGLE_PRODUCT_ERROR,
    GET_SINGLE_PRODUCT,
} from '../utils/constants';

import productsReducer from './reducers/productsReducer';

const initialState = {
    productsList: [],
    productsListLoading: false,
    productsListError: null,
    featuredProducts: [],
    singleProduct: {},
    singleProductLoading: false,
    singleProductError: null,
};

const ProductsContext = React.createContext();

const ProductsProvider = function ({ children }) {
    const [state, dispatch] = useReducer(productsReducer, initialState);

    const fetchData = async url => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error when fetching products data, ${response.status}`);
        }

        const data = await response.json();
        return data;
    };

    useEffect(() => {
        (async () => {
            try {
                dispatch({ type: PRODUCTS_LIST_LOADING });

                const data = await fetchData(products_url);

                dispatch({ type: GET_PRODUCTS_LIST, payload: data });
            } catch (e) {
                dispatch({ type: PRODUCTS_LIST_ERROR, payload: e.message });
            }
        })();
    }, []);

    const fetchSingleProduct = async url => {
        try {
            dispatch({ type: SINGLE_PRODUCT_LOADING });
            const data = await fetchData(url);
            dispatch({ type: GET_SINGLE_PRODUCT, payload: data });
        } catch (e) {
            console.log(e);
            dispatch({ type: SINGLE_PRODUCT_ERROR, payload: "Couldn't fetch the product's details" });
        }
    };

    return (
        <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => useContext(ProductsContext);

export default ProductsProvider;
