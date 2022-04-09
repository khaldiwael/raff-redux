import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACT } from "../ActionTypes/actionstype";

const initialState = {
    contacts:[],
    loading:false,
    error:null,
    show: true,
};
// let f = () => {fetch("http://localhost:3500/contacts")
// .then(response => response.json())
// .then(data =>{
//     // setstate({contact : data})
//     initialState.contacts = data
//     console.log(initialState.contacts)
// })}


export const contactsReducer = (state =initialState,action ) =>{
    switch(action.type){
        case GET_CONTACT:
            return{...state,contacts:action.payload}
        case ADD_CONTACT:
            return{ ...state,contacts:[...state.contacts,action.payload]};
        case DELETE_CONTACT:
            return;
            //  {...state,    contacts: state.contacts.filter((contact)=>{contact.id !==action.payload})}
        default:
            return state;
    };
}