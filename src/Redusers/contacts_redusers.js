import { ADD_CONTACT, DELETE_CONTACT } from "../Redux/ActionTypes/Contacts_actions";

const initialState = {
    contacts:[],
    loading:false,
    error:null,
    show: true,
};

export const contactReducer = (state =initialState,action ) =>{
    switch(action.type){
        case ADD_CONTACT:
            return{ ...state,contacts:[...state.contacts,action.payload]};
        case DELETE_CONTACT:
            return {...state,contacts:state.contacts.filter((contact)=>{contact.id !==action.payload})}
        default: 
            return state;
    };
}