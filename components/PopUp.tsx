import React from 'react'

function PopUp({ClosePopUp}: any)  {
  
    return   <div className="popup">
        <div className="popupcontent">
        <h2>Sign Up</h2>
        <a href="#" onClick={()=> ClosePopUp(false)}className="xbtn" id="xbtn">
            <img src="photos/x.png" alt="xbtn" className="xbtn" id="xbtn"></img>
        </a>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button id ="SubmitBtn" className="SubmitBtn">Submit</button>
    </div>
</div> 

  
}

export default PopUp