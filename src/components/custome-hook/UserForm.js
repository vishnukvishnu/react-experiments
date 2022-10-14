import React, {useState} from 'react'
import {useInput} from './useInput'

import '../../index.css'
const UserForm = () =>{
    const [firstName, bindFirstName, resetFirstName ] = useInput('')
    const [lastName, bindLastName, resetLastName ] = useInput('')
    const submitHandler = e => {
        e.preventDefault()
        console.log(firstName)
        console.log(lastName)
        resetFirstName()
        resetLastName()
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="">First Name</label>
                <input type="text" 
              {...bindFirstName}/>
            </div>
            <div className = 'mt'>
                <label htmlFor="">Last Name</label>
                <input type="text" 
                {...bindLastName} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default UserForm