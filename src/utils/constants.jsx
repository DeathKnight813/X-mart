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
    {
        path: '/products/:productId',
        name: 'Product Details',
        element: (
            <React.Suspense fallback={Fallback}>
                <ProductDetailsPage />
            </React.Suspense>
        ),
    },
];

export const navLinks = [
    { id: 1, link: '/', name: 'Home' },
    { id: 2, link: '/about', name: 'About' },
    { id: 3, link: '/products', name: 'Products' },
];

export const dummyProductsList = [
    {
        id: 1,
        name: 'Minimalist Shelves',
        company: 'Artifex',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Kids',
        image: 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '43999',
        shipping: false,
        colors: ['#FF5733', '#FFFF00'],
    },
    {
        id: 2,
        name: 'chic chair',
        company: 'Luxora',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Chairs',
        image: 'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '33999',
        shipping: true,
        colors: ['#FF5733', '#33FF57', '#3366FF'],
    },
    {
        id: 3,
        name: 'coffee table',
        company: 'Modenza',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: true,
        category: 'Tables',
        image: 'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '17999',
        shipping: false,
        colors: ['#FF5733', '#FFFF00'],
    },
    {
        id: 4,
        name: 'comfy bed',
        company: 'Homestead',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: true,
        category: 'Beds',
        image: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '12999',
        shipping: false,
        colors: ['#FF5733'],
    },
    {
        id: 5,
        name: 'contemporary sofa',
        company: 'Comfora',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Sofas',
        image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '15999',
        shipping: false,
        colors: ['#FFFF00'],
    },
    {
        id: 6,
        name: 'cutting-edge bed',
        company: 'Homestead',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Beds',
        image: 'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '8499',
        shipping: true,
        colors: ['#FFFF00', '#3366FF'],
    },
    {
        id: 7,
        name: 'futuristic shelves',
        company: 'Luxora',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Kids',
        image: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '9499',
        shipping: true,
        colors: ['#33FF57', '#FFFF00'],
    },
    {
        id: 8,
        name: 'glass table',
        company: 'Modenza',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Tables',
        image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '15999',
        shipping: false,
        colors: ['#FF5733', '#3366FF'],
    },
    {
        id: 9,
        name: 'King Bed',
        company: 'Homestead',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Beds',
        image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '18999',
        shipping: true,
        colors: ['#FF5733'],
    },
    {
        id: 10,
        name: 'avant-garde lamp',
        company: 'Modenza',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: true,
        category: 'Kids',
        image: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '17999',
        shipping: false,
        colors: ['#33FF57', '#3366FF'],
    },
    {
        id: 11,
        name: 'Lounge Chair',
        company: 'Luxora',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Chairs',
        image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '25999',
        shipping: false,
        colors: ['#FF5733', '#33FF57', '#3366FF'],
    },
    {
        id: 12,
        name: 'modern sofa',
        company: 'Comfora',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Sofas',
        image: 'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '29999',
        shipping: false,
        colors: ['#FF5733', '#33FF57', '#FFFF00'],
    },
    {
        id: 13,
        name: 'modern table',
        company: 'Modenza',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Tables',
        image: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '38999',
        shipping: true,
        colors: ['#33FF57', '#3366FF'],
    },
    {
        id: 14,
        name: 'reclining sofa',
        company: 'Comfora',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Sofas',
        image: 'https://images.pexels.com/photos/4316737/pexels-photo-4316737.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '32999',
        shipping: false,
        colors: ['#FF5733', '#33FF57', '#3366FF', '#FFFF00'],
    },
    {
        id: 15,
        name: 'Sectional Sofa',
        company: 'Comfora',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Sofas',
        image: 'https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '35999',
        shipping: true,
        colors: ['#FF5733', '#33FF57', '#3366FF', '#FFFF00'],
    },
    {
        id: 16,
        name: 'sleek bed',
        company: 'Homestead',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Beds',
        image: 'https://images.pexels.com/photos/16869701/pexels-photo-16869701/free-photo-of-modern-luxury-real-estate-property-interior-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '53999',
        shipping: true,
        colors: ['#FFFF00', '#3366FF'],
    },
    {
        id: 17,
        name: 'sleek chair',
        company: 'Luxora',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Chairs',
        image: 'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '19999',
        shipping: false,
        colors: ['#FF5733', '#33FF57', '#3366FF', '#FFFF00'],
    },
    {
        id: 18,
        name: 'streamlined table',
        company: 'Modenza',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Tables',
        image: 'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '20999',
        shipping: true,
        colors: ['#FF5733', '#3366FF'],
    },
    {
        id: 19,
        name: 'stylish bed',
        company: 'Homestead',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Beds',
        image: 'https://images.pexels.com/photos/6758398/pexels-photo-6758398.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '16999',
        shipping: true,
        colors: ['#FF5733'],
    },
    {
        id: 20,
        name: 'Toy Shelf',
        company: 'Luxora',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Kids',
        image: 'https://images.pexels.com/photos/3932929/pexels-photo-3932929.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '7999',
        shipping: false,
        colors: ['#33FF57', '#FFFF00'],
    },
    {
        id: 21,
        name: 'velvet sofa',
        company: 'Luxora',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Chairs',
        image: 'https://images.pexels.com/photos/4916510/pexels-photo-4916510.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '28999',
        shipping: true,
        colors: ['#FF5733', '#33FF57', '#FFFF00'],
    },
    {
        id: 22,
        name: 'wooden shelves',
        company: 'Artifex',
        description:
            'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        featured: false,
        category: 'Kids',
        image: 'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '11999',
        shipping: true,
        colors: ['#33FF57', '#3366FF'],
    },
];
