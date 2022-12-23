import { Action } from '@remix-run/router';
import { IProductState, ProductActionTypes } from './types';

const initialState : IProductState = {
    list: []
};

export const productReducer = (state= initialState, action: any) : IProductState => {
    switch(action.type) {
        case ProductActionTypes.PRODUCT_LIST: {
            return {
                ...state,
                list: [...action.payload]
            }
        }
        default:
            return state;
    }
}