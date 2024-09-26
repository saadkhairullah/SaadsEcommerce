import React, { useState } from "react";
import PopUp from "./PopUp";


function Header(){
    const [Open, isOpen] = useState(false)
    return <header className="MainHeader">
    <a href = "#"  onClick={() => {isOpen(true)}}id = "signup" className="signup">Sign up</a>
    <a href = "#"  onClick={() => {isOpen(true)}}className="signin" id="signin">Log in</a>
    {Open && <PopUp ClosePopUp={isOpen}/>}
    <img src="logo.webp"  alt="logo" className ="logo"></img>
    <h1>Sign up for Glimmer Guard's</h1>
</header>
}
export default Header;