import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productReducers";

const reducers=combineReducers({
    allproducts:productReducer,
    product:selectedProductReducer,


});
export default reducers;