import React from 'react'
import './SignUp.css';
//  import './fonts.css'

const SignUp = () => {
    return (
        <div>
           <>
            <h1 className="content1">Sign Up</h1>

            <form className="form-group" >
            <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email address"></input>
                <input type="text" placeholder="Password"></input>
                <button className='sign'>Submit</button>
            </form>
            <div className='empty2'></div>
            </>
        </div>
    )
}

export default SignUp