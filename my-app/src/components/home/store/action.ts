import { ProductActions, IProductResponse, ProductActionTypes, IProductSearch } from './types';
import { Dispatch } from "react";
import http from '../../../http_common';

export const GetProductList = (search: IProductSearch) => async (dispatch: Dispatch<ProductActions>) => {
    try {
        const resp = await http.get<IProductResponse>("/api/products");
        const {data} = resp;
        dispatch({
            type: ProductActionTypes.PRODUCT_LIST, 
            payload: {
                list: data.data,
                count_pages: data.last_page,
                current_page: data.current_page,
                total: data.total
            }});

    }
    catch(err: any)
    {

    }
}