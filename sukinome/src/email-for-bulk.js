import React from 'react'
import './all.css'
import './Bulk-Email-Check.js'
import './BulkEmail'

function Email() {

    function openModal(){
        let BulkModal = document.getElementById('BulkModal');
    
        BulkModal.classList.add('is-active');
        return false;
    }
    
    return (
        <div className='email-container mb-3'>
        
        <form className='email card' id='emailFormTwo' onSubmit={openModal}>
        <label className="label ">Enter-Email </label>
         <span className='has-text-danger'>(Enter more than one email with space between them)</span>
        <div className="field">
  <p className="control has-icons-left has-icons-right">
    <input id='inputEmail' className="input is-success inputEmailBulk"   required/>
    
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>


<div className="field">
  <p className="control ">
    <button className="button is-success is-rounded is-hovered"  type='submit' id='checkall'>
      Check All
    </button>
  </p>
</div>
</form>
</div>
    )
}

export default Email
