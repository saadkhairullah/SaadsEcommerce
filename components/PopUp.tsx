import React from 'react'
import { useState } from 'react'

function PopUp({ClosePopUp}: any)  {

    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmmit = async (e: any)=> {
        e.preventDeafult()

        const UserInfo = {fName,lName, email}

        const response = await fetch('/', {
            method: 'POST',
            body: JSON.stringify(UserInfo),
            headers: {
            'Content-Type': 'application/json'
            }
        })
 //continue work here ??????????????????????????????????????????????????????????????????????????????????????????????????????????
    }
  
    return   <div className="popup" onSubmit={handleSubmmit}> 
        <div className="popupcontent">
        <h2>Sign Up</h2>
        <img src ="photos/logo.webp" className="PopUpLogo"></img>
        <button onClick={()=> ClosePopUp(false)}className="xbtn" id="xbtn">
            <img src="photos/x.png" alt="xbtn" className="xbtn" id="xbtn"></img>
        </button>
        <input type="text" placeholder="First Name"
        onChange={(e)=> setfName(e.target.value)}
        value = {fName}
        />
      
        <input type="text" placeholder="Last Name" 
        onChange={(e)=> setlName(e.target.value)}
        value = {lName}
        />

        <input type="email" placeholder="Email" 
        onChange={(e)=> setEmail(e.target.value)}
        value = {email}
        />
        <input type="password" placeholder="Password"></input>
        <button id ="SubmitBtn" className="SubmitBtn">Submit</button>
    </div>
</div> 

  
}

export default PopUp