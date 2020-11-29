import React from 'react'
import './all.css'


function Email() {
    return (
        <div className='email-container mb-3'>
        
        <form className='email card' id='emailForm'>
        <label className="label">Enter-Email: </label>
        <div className="field">
  <p className="control has-icons-left has-icons-right">
    <input id='inputEmail' className="input is-success" type="email" placeholder="Email" required/>
    
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
    <button className="button is-success is-rounded is-hovered"  type='submit' id= 'checkBtn'>
      Check
    </button>
  </p>
</div>
</form>
</div>
    )
}

export default Email
