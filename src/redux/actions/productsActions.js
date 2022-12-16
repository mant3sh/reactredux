import {actionsTypes} from "../constants/actionsTypes.js";
export const setProducts=(products)=>{
    return{
        type:actionsTypes.SET_PRODUCTS,
        payload:products,
    };

};
export const selectedProduct=(product)=>{
    return {
        type:actionsTypes.SELECTED_PRODUCT,
        playload:product,
    };
}
export const removeSelectedProduct=()=>{
    return {
        type:actionsTypes.REMOVE_SELECTED_PRODUCT,
      
    };
}