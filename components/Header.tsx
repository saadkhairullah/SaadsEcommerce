import React, { useState } from "react";
import SignUpForm from "./PopUp";


function Header()
{
    const [Open, isOpen] = useState(false)
    return <header className="MainHeader">
    <button  onClick={() => {isOpen(true)}}id = "signup" className="signup">Sign up</button>
    <button  onClick={() => {isOpen(true)}}className="signin" id="signin">Log in</button>
    {Open && <SignUpForm ClosePopUp={isOpen}/>}
    <img src="photos/logo.webp"  alt="logo" className ="logo"></img>
    <h1>Sign up for Glimmer Guard's</h1>
</header>

}
export default Header;