import { actionsTypes } from "../constants/actionsTypes"
const initialState={
    products:[],
    seletedProdut:{},
}
export const productReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case actionsTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
            

    }

}
export const selectedProductReducer=(state=initialState,{ type, payload })=>{
    switch (type) {
        case actionsTypes.SELECTED_PRODUCT:
            
            return {...state,seletedProdut:payload};
        case actionsTypes.REMOVE_SELECTED_PRODUCT:
                return {};
        default:
            return state;
    }
}
    