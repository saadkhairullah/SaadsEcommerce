import React, { useState } from "react";
import SignUpForm from "./PopUp";
import SignInForm from "./Login";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate  } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Header()
{

const {logout} = useLogout()
const{ user } = useAuthContext()
const navigate = useNavigate()
const handleclick = () =>{
    logout()
}
    // state of the pop ups
    const [Open, isOpen] = useState(false)
    const [LOpen, isLOpen] = useState(false)
    return <header className="MainHeader">
    {user &&(<div> <button onClick={()=> navigate('userSettings')} className="userSettingsLink"><img src="photos/icons8-settings-50.png" className= "userSettingsLink"></img></button>
    <Button onClick={handleclick} variant="dark" id= 'logout' className="logout">Log Out</Button></div>)}
    {!user &&( <div><Button  onClick={() => {isOpen(true)}} variant="dark" id = "signup" className="signup">Sign up</Button>
    <Button  onClick={() => {isLOpen(true)}} className="signin" variant="dark" id="signin">Log in</Button></div>)}
    {Open && <SignUpForm ClosePopUp={isOpen}/>}
    {LOpen && <SignInForm ClosePopUp={isLOpen}/>}
    <img src="photos/logo.webp"  alt="logo" className ="logo"></img>
    {!user &&(<h1 className="headerText">Join Glimmer Guard’s Tint Services – Get Exclusive Access to Tint Kits & Tools!</h1>)}
    {user &&(<h1 className="headerText">Welcome, {user.FName}, Use Code "Member" for 5% OFF</h1>)}
</header>

}
export default Header;