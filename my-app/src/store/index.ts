import { productReducer } from './../components/home/store/productReducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    product: productReducer
});

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));