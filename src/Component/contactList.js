import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCantacts } from '../Redux/Actions/contacts_actions';
// import { connect } from 'react-redux'
import ContactCards from './ContactCards'


const ContactList=()=> {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getCantacts())
  }, []);
    const contacts = useSelector((state)=>state.contactsReducer.contacts)
    console.log(contacts)
  return (
    <>
        {/* {contacts.map((contact,key) =>{
    return(
      <ContactCards contact={contact} key={key} />
    )
      })} */}

{contacts.map((contact) =>{
    return(
      <ContactCards contact={contact} key={contact.id} />
    )
      })}
    </>
  )
}
export default ContactList;
