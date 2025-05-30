import  { Fragment,useEffect, useState } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { useUpdateInfo } from "./hooks/useUpdateInfo";
import { useAuthContext } from "./hooks/useAuthContext";


function UserSettings(){
    const [FName, setfName] = useState('')
        const [LName, setlName] = useState('')
        const [Email, setEmail] = useState('')
        const [Error, setError] = useState('')
        const {updateInfo, isLoading, error} = useUpdateInfo()
        const { user } = useAuthContext();

        useEffect(() => {
        if (user) {
            setfName(user.FName || '');
            setlName(user.LName || '');
            setEmail(user.Email || '');
        }
    }, [user]);

        const handleSubmmit = async (e: React.FormEvent)=> {
            e.preventDefault()
            
            if (!user){
                setError('Please Log in!')
                return
            }

    // go to useUpdateInfo.js
        await updateInfo(FName,LName,Email)
        
        }
        
    return (<Fragment><form onSubmit={handleSubmmit}>
        <header>
        <img src="/photos/logo.webp"  alt="logo" className ="logo"></img>
        <h1>User Settings Page</h1>
        </header>
         <div className="popupcontent">
        <h2>Sign Up</h2>
        <img src ="photos/logo.webp" className="PopUpLogo"></img>
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
        
        <button id ="SubmitBtn" className="SubmitBtn" disabled= {isLoading}>Submit</button>
        {error && <div className = "error" > {error} </div>}
    </div>
    </form>
        <Link to ="/">Home</Link>
    </Fragment>
)
}
export default UserSettings;