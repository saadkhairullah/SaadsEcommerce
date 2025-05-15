import React from 'react'
import { useState } from 'react'

const SignUpForm = ({ClosePopUp}: any) => {
// function PopUp({ClosePopUp}: any)  {

    const [FName, setfName] = useState('')
    const [LName, setlName] = useState('')
    const [Email, setEmail] = useState('')
    const [error, setError] = useState(null)

    const handleSubmmit = async (e: any)=> {
        e.preventDefault()

        const UserInfo = {FName,LName, Email}

        const response = await fetch('http://localhost:8080/api/home/', {
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
            setfName('')
            setlName('')
            console.log('New User Created', userJson)
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
        <input type="password" placeholder="Password"></input>
        <button id ="SubmitBtn" className="SubmitBtn">Submit</button>
    </div>
</form>
}
// }

export default SignUpForm