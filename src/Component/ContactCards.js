import React ,{ useState,useEffect } from 'react'
import '../App.css'
import img from  '../img/img1.jpg'


function ContactCards(props) {
  
  

    return (
    <div>
      <div key={props.contact.id}>
          <div className='content-card'>
            <div>
              <div className='content*'>
                <img className='image-contact' src={img} />
              </div>
              <div className='info-contact'>
                <p><b>name:</b>  {props.contact.name}</p>
                <p><b>cin:</b>  {props.contact.cin}</p>
                <p><b>number:</b> {props.contact.phone}</p>
              </div>
            </div>
            <div className='content-card-extra'>
                <div className='ui-tow-buttons'>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
          </div>
        </div>
    </div>
    )
  }

export default ContactCards



//  function ContactCards({contact,key}) {
 
//   return (
//   <div>
//         <div key={key}>
            
//             <div className='content-card'>
//             <img src='' />
//             <p><b>name:</b>  {contact.name}</p>
//             <p><b>cin:</b>  {contact.cin}</p>
//             <p><b>number:</b> {contact.phone}</p>

//             <div className='content-card-extra'>
//                 <div className='ui-tow-buttons'>
//                     <button>edit</button>
//                     <button>delete</button>
//                 </div>
//             </div>
//         </div>
//          </div>
    

    
    
// </div>
//   )
// }