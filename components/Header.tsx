import React, { useState } from "react";
import SignUpForm from "./PopUp";
import SignInForm from "./Login";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";



function Header()
{

const {logout} = useLogout()
const{ user } = useAuthContext()
const handleclick = () =>{
    logout()
}
    // state of the pop ups
    const [Open, isOpen] = useState(false)
    const [LOpen, isLOpen] = useState(false)
    return <header className="MainHeader">
    {user &&(<button onClick={handleclick} id= 'logout' className="logout">Log Out</button>)}
    {!user &&( <div><button  onClick={() => {isOpen(true)}}id = "signup" className="signup">Sign up</button>
    <button  onClick={() => {isLOpen(true)}}className="signin" id="signin">Log in</button></div>)}
    {Open && <SignUpForm ClosePopUp={isOpen}/>}
    {LOpen && <SignInForm ClosePopUp={isLOpen}/>}
    <img src="photos/logo.webp"  alt="logo" className ="logo"></img>
    <h1>Sign up for Glimmer Guard's</h1>
</header>

}
export default Header;