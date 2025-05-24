import React from 'react'
import { useState } from 'react'
import { useSignup } from "../hooks/useSignup"

const SignUpForm = ({ClosePopUp}: any) => {
// function PopUp({ClosePopUp}: any)  {

    const [FName, setfName] = useState('')
    const [LName, setlName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()


    const handleSubmmit = async (e: React.FormEvent)=> {
        e.preventDefault()

    await signup(FName,LName,Email,Password)
    
    const exists = localStorage.getItem('user')
    if (exists){
        ClosePopUp(false)
    }

    }

    return  <form onSubmit={handleSubmmit} className='popup'> 
        <div className="popupcontent">
        <h2>Sign Up</h2>
        <img src ="photos/logo.webp" className="PopUpLogo"></img>
        <button onClick={()=> ClosePopUp(false)}className="xbtn" id="xbtn">
            <img src="photos/x.png" alt="xbtn" className="xbtn" id="xbtn"></img>
        </button>
        <input type="text" placeholder="First Name"
        onChange={(e)=> setfName(e.target.value)}
        value = {FName}
        />
      
        <input type="text" placeholder="Last Name" 
        onChange={(e)=> setlName(e.target.value)}
        value = {LName}
        />

        <input type="email" placeholder="Email" 
        onChange={(e)=> setEmail(e.target.value)}
        value = {Email}
        />
        <input type="password" placeholder="Password" 
        onChange={(e)=> setPassword(e.target.value)}
        value = {Password}
        />
        
        <button id ="SubmitBtn" className="SubmitBtn" disabled= {isLoading}>Submit</button>
        {error && <div className = "error" > {error} </div>}
    </div>
</form>
}
 

export default SignUpForm
