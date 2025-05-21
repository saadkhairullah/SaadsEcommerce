import React from 'react'
import { useState } from 'react'

const SignInForm = ({ClosePopUp}: any) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmmit = async (e: any)=> {
        e.preventDefault()

        const UserInfo = {Email ,Password}

        const response = await fetch('http://localhost:8080/api/home/Login', {
            method: 'POST',
            body: JSON.stringify(UserInfo),
            headers: {
            'Content-Type': 'application/json'
            }
            
        })

        const userJson = await response.json()

 //if the user could not be created print an error

        if(!response.ok){
          setError(userJson.error)
        }

// user was created, now we reset the form so we can add another one again 

        if(response.ok){

            setError(null)
            setEmail('')
            setPassword('')
            console.log('New User Logged', userJson)
        }
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
        <button id ="LogInSubmitBtn" className="LogInSubmitBtn">Submit</button>
    </div>
</form>
}
// }

export default SignInForm