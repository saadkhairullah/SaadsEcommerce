import React from 'react'
import { useState, useEffect } from 'react'
import { useLogin } from '../hooks/useLogin'


const SignInForm = ({ClosePopUp}: any) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmmit = async (e: any)=> {
        e.preventDefault()


        await login(Email, Password)

    }
  
    return  <form onSubmit={handleSubmmit} className='loginpopup'> 
        <div className="loginpopupcontent">
        <h2>Sign In</h2>
        <img src ="photos/logo.webp" className="LogInPopUpLogo"></img>
        <button onClick={()=> ClosePopUp(false)}className="loginxbtn" id="loginxbtn">
            <img src="photos/x.png" alt="loginxbtn" className="loginxbtn" id="loginxbtn"></img>
        </button>
        <input type="email" placeholder="Email" 
        onChange={(e)=> setEmail(e.target.value)}
        value = {Email}
        />
        <input type="password" placeholder="Password" 
        onChange={(e)=> setPassword(e.target.value)}
        value = {Password}
        />
        <button disabled = {isLoading} id ="LogInSubmitBtn" className="LogInSubmitBtn">Submit</button>
        {error && <div className="error">{error}</div>}
    </div>
</form>

}
// }

export default SignInForm