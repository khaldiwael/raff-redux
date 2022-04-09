import axios from "axios"
import { ADD_CONTACT, DELETE_CONTACT, FAIL_CONTACTS, GET_CONTACT } from "../ActionTypes/actionstype"

export const getCantacts = () => async (dispatch) => {
    try{
        const res=await axios.get(
           " http://localhost:3500/contacts" );console.log(res)
        dispatch({
            type:GET_CONTACT,
            payload:res.data,
        });
    } catch (error) {
        dispatch({
            type:FAIL_CONTACTS,
            payload:error,
        });
    }
}
export const addContact = (contact) => {
    return {
        type  :ADD_CONTACT,
        payload: contact,
    };
}
export const removeContact = (id)=>{
    return {
        type: DELETE_CONTACT,
        paylead:id,
    }
}