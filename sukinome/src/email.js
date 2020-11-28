import React from 'react'
import './all.css'
import './check'

function Email() {
    return (
        <div className='email'>
            <label for="inputEmail" class="sr-only">Email address</label>
<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>

            
        </div>
    )
}

export default Email
