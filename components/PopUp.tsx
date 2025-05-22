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

//         const UserInfo = {FName,LName, Email,Password}

//         const response = await fetch('http://localhost:8080/api/home/Signup', {
//             method: 'POST',
//             body: JSON.stringify(UserInfo),
//             headers: {
//             'Content-Type': 'application/json'
//             }
            
//         })

//         const userJson = await response.json()

//  //if the user could not be created print an error

//         if(!response.ok){
//           setError(userJson.error)
//         }

// // user was created, now we reset the form so we can add another one again 

//         if(response.ok){

//             setEmail('')
//             setfName('')
//             setlName('')
//             setPassword('')
//             console.log('New User Created', userJson)
//         }
//     }
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
        
        <button id ="SubmitBtn" className="SubmitBtn">Submit</button>
        {/* {error && <div className = "error" > {error} </div>} */}
    </div>
</form>
}
 

export default SignUpForm
