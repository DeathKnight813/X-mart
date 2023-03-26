import React from 'react';
import Loading from '../components/UI/Loading';

const AboutPage = React.lazy(() => import('../pages/About'));
const CartPage = React.lazy(() => import('../pages/Cart'));
const ProductsListPage = React.lazy(() => import('../pages/ProductLists'));
const ProductDetailsPage = React.lazy(() => import('../pages/ProductDetails'));

import HomePage from '../pages/Home';

export const products_url = 'https://course-api.com/react-store-products';
export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

export const SHIPPING_COST = 1000; // In cents. In usd: $1. In inr: Rs. 80
export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';
export const PRODUCTS_LIST_LOADING = 'PRODUCTS_LIST_LOADING';
export const PRODUCTS_LIST_ERROR = 'PRODUCTS_LIST_ERROR';
export const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
export const SINGLE_PRODUCT_LOADING = 'SINGLE_PRODUCT_LOADING';
export const SINGLE_PRODUCT_ERROR = 'SINGLE_PRODUCT_ERROR';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const SORT_PRODUCTS_LIST = 'SORT_PRODUCTS_LIST';
export const SORT_NUM_ASCENDING = 'SORT_NUM_ASCENDING';
export const SORT_NUM_DESCENDING = 'SORT_NUM_DESCENDING';
export const SORT_ALPHABETICAL_ASCENDING = 'SORT_ALPHABETICAL_ASCENDING';
export const SORT_ALPHABETICAL_DESCENDING = 'SORT_ALPHABETICAL_DESCENDING';

export const TWO_WAY_BIND = 'TWO_WAY_BIND';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

const Fallback = (
    <>
        <div style={{ height: '30vh' }}></div>
        <Loading />
    </>
);

export const routes = [
    { path: '/', name: 'Home', element: <HomePage /> },
    {
        path: '/about',
        name: 'About',
        element: (
            <React.Suspense fallback={Fallback}>
                <AboutPage />
            </React.Suspense>
        ),
    },
    {
        path: '/cart',
        name: 'Cart',
        element: (
            <React.Suspense fallback={Fallback}>
                <CartPage />
            </React.Suspense>
        ),
    },
    {
        path: '/products',
        name: 'Products',
        element: (
            <React.Suspense fallback={Fallback}>
                <ProductsListPage />
            </React.Suspense>
        ),
    },
    { path: '/products/:productId', name: 'Product Details', element: (
        <React.Suspense fallback={Fallback}>
            <ProductDetailsPage />
        </React.Suspense>
    ), },
];

export const navLinks = [
    { id: 1, link: '/', name: 'Home' },
    { id: 2, link: '/about', name: 'About' },
    { id: 3, link: '/products', name: 'Products' },
];
