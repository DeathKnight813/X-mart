import {
    LOAD_PRODUCTS,
    SORT_PRODUCTS_LIST,
    SORT_ALPHABETICAL_ASCENDING,
    SORT_ALPHABETICAL_DESCENDING,
    SORT_NUM_ASCENDING,
    SORT_NUM_DESCENDING,
    UPDATE_FILTER,
    TWO_WAY_BIND,
    CLEAR_FILTERS,
} from '../../utils/constants';

const filterReducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        const maxPrice = action.payload.reduce((acc, curr) => (acc < curr.price ? curr.price : acc), 0);

        return {
            ...state,
            allProductsList: action.payload,
            filteredProductsList: action.payload,
            filters: { ...state.filters, max: maxPrice, currFilterPrice: maxPrice },
        };
    }

    if (action.type === SORT_PRODUCTS_LIST) {
        let tempFilteredProductsList = [...state.filteredProductsList];

        if (action.payload === SORT_NUM_ASCENDING) {
            tempFilteredProductsList.sort((a, b) => a.price - b.price);
        }
        if (action.payload === SORT_NUM_DESCENDING) {
            tempFilteredProductsList.sort((a, b) => b.price - a.price);
        }
        if (action.payload === SORT_ALPHABETICAL_ASCENDING) {
            tempFilteredProductsList.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        }
        if (action.payload === SORT_ALPHABETICAL_DESCENDING) {
            tempFilteredProductsList.sort((a, b) => {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
        }

        return {
            ...state,
            filters: { ...state.filters, ['sortType']: action.payload },
            filteredProductsList: tempFilteredProductsList,
        };
    }

    if (action.type === TWO_WAY_BIND) {
        return {
            ...state,
            filters: { ...state.filters, [action.payload.filterKey]: action.payload.filterValue }, // 2 way binding.
        };
    }

    if (action.type === UPDATE_FILTER) {
        let tempFilteredProductsList = [...state.allProductsList];

        tempFilteredProductsList = tempFilteredProductsList.filter(
            productData =>
                productData.colors.includes(state.filters['color']) || state.filters['color'] === 'all'
        );

        tempFilteredProductsList = tempFilteredProductsList.filter(
            productData =>
                productData.name.startsWith(state.filters['searchTerm']) || state.filters['searchTerm'] === ''
        );

        tempFilteredProductsList = tempFilteredProductsList.filter(
            productData =>
                productData.category === state.filters['category'] || state.filters['category'] === 'all'
        );

        tempFilteredProductsList = tempFilteredProductsList.filter(
            productData => productData.price <= state.filters['currFilterPrice']
        );

        tempFilteredProductsList = tempFilteredProductsList.filter(
            productData =>
                productData.shipping === state.filters['freeDelivery'] || !state.filters['freeDelivery']
        );

        return {
            ...state,
            filteredProductsList: tempFilteredProductsList,
        };
    }

    if (action.type === CLEAR_FILTERS) {
        return {
            ...state,
            filteredProductsList: state.allProductsList,
            filters: { ...action.payload, max: state.filters.max, currFilterPrice: state.filters.max },
        };
    }

    throw new Error('Invalid action type', action.type, `in ${filterReducer.name}.`);
};

export default filterReducer;
