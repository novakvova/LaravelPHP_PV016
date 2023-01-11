import { Action } from '@remix-run/router';
import { IProductState, ProductActionTypes, ProductActions } from './types';

const initialState : IProductState = {
    list: [],
    count_pages: 0,
    current_page: 0,
    total: 0
};

export const productReducer = (state= initialState, action: ProductActions) : IProductState => {
    switch(action.type) {
        case ProductActionTypes.PRODUCT_LIST: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}