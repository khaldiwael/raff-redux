import React from 'react'

function ContactCards() {
  return (
  <div>
    <div className='content-card'>
        <img src='' />
        <h1>name</h1>
        <p>cin</p>
        <p>
            <b>number</b>
        </p>
    </div>
    <div className='content-card-extra'>
        <div className='ui-tow-buttons'>
            <button>edit</button>
            <button>delete</button>
        </div>
    </div>
</div>
  )
}

export default ContactCards