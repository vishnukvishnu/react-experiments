import React from 'react'
import { Link } from "react-router-dom"
import auth from './Auth'

const Login =(props) =>{
    return (
        <div>
            <button>Login</button> <br />
            <button><Link to='/'>Logout</Link></button>
        </div>
    )
}

export default Login
