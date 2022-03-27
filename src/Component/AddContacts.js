import React from 'react'

function AddContacts() {
  return (
      <form>
          <div className='form-feild'>
            <label>name</label>
            <input placeholder='name' name='name' type='text'/>
            <label>phone</label>
            <input placeholder='number' name='number' type='number'/>
            <label>CIN</label>
            <input placeholder='cin' name='cin' type='number'/>
          </div>
          <button type='submit'>save</button>
      </form>
  )
}

export default AddContacts