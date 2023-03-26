import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CartProvider from './store/cart-context';
import FilterProvider from './store/filter-context';
import AppProvider from './store/global-context';
import ProductsProvider from './store/products-context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </AppProvider>
    </React.StrictMode>
);
