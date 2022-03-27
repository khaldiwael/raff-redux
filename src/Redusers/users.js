
const initialState = {
    users:[],
    loading:false,
    error:null,
    show: true,
};

export const usersReducer = (state =[],action ) =>{
    switch(action.type){
        case "ADD_USER":return;
        case "DELETE_USER":return;
        default: return state;
    };
}