import React from "react";

function Header(){
    return <header className="MainHeader">
    <a href = "#" id = "signup" className="signup">Sign up</a>
    <a href = "#" className="signin" id="signin">Log in</a>
    <img src="logo.webp"  alt="logo" className ="logo"></img>
    <h1>Sign up for Glimmer Guard's</h1>
</header>
}
export default Header;