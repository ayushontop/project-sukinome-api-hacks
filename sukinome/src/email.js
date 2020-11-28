import React from 'react'
import './all.css'
import './check';

function Email() {
    return (
        <div className='email-container'>
        
        <div className='email card'>
        <label className="label">Enter-Email: </label>
        <div className="field">
  <p className="control has-icons-left has-icons-right">
    <input className="input" id='inputEmail' type="email" placeholder="Email" />
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
    <button className="button is-success is-rounded" id= 'checkBtn'>
      check
    </button>
  </p>
</div>
</div>
</div>
    )
}

export default Email
