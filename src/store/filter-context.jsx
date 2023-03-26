import React, { useContext, useEffect, useReducer } from 'react';
import {
    CLEAR_FILTERS,
    LOAD_PRODUCTS,
    SORT_NUM_ASCENDING,
    SORT_PRODUCTS_LIST,
    TWO_WAY_BIND,
    UPDATE_FILTER,
} from '../utils/constants';
import { useProductsContext } from './products-context';
import filterReducer from './reducers/filterReducer';

const initialState = {
    allProductsList: [],
    filteredProductsList: [],
    filters: {
        sortType: 'SORT_ALPHABETICAL_ASCENDING',
        searchTerm: '',
        color: 'all',
        category: 'all',
        max: 0,
        currFilterPrice: 0,
        freeDelivery: false,
    },
};

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, initialState);
    const { productsList } = useProductsContext();

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: productsList });
    }, [productsList]);

    const handleProductsSorting = sortType => {
        dispatch({ type: SORT_PRODUCTS_LIST, payload: sortType });
    };

    const handleFilterChange = function (e) {
        let filterType = this;
        let value;

        if (filterType === 'clear_search_term') {
            value = '';
            filterType = 'searchTerm';
        } else {
            value = e.target?.value;

            if (value && typeof value === 'string') {
                value = value.toLowerCase();
            }

            if (e.target?.dataset?.filterColor) {
                value = e.target.dataset?.filterColor;
            } else if (e.target?.type === 'button') {
                value = e.target.textContent.toLowerCase();
            } else if (e.target.type === 'checkbox') {
                value = e.target.checked;
            }
        }

        dispatch({ type: TWO_WAY_BIND, payload: { filterKey: filterType, filterValue: value } });
        dispatch({ type: UPDATE_FILTER });

        handleProductsSorting(state.filters['sortType']);
    };

    const handleClearFilters = () => {
        dispatch({ type: CLEAR_FILTERS, payload: initialState.filters });
    };

    return (
        <FilterContext.Provider
            value={{ ...state, handleProductsSorting, handleFilterChange, handleClearFilters }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => useContext(FilterContext);

export default FilterProvider;
