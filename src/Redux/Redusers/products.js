const initialState = {
    products:[],
    loading:false,
    error:null,
    show: true,
};
export const productsReducer = (state =initialState,action ) =>{
    switch(action.type){
        case "ADD_USER":return;
        case "DELETE_USER":return;
        default: return state;
    };
}