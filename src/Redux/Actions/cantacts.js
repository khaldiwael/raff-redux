import { ADD_CONTACT, DELETE_CONTACT } from "../ActionTypes/Contacts_actions"

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