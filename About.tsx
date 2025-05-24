import  { Fragment,useEffect, useState } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";




function About(){
    const [user, setUsers] = useState(null)
      useEffect(() =>{
        const fetchUsers = async ()=>{
          const response = await fetch('http://localhost:8080/api/home')
          const json = await response.json()
          
    
          if (response.ok){
            setUsers(json)
          }
          
        }
        fetchUsers()
      }, [])


    return <Fragment>
        <header>
        <img src="/photos/logo.webp"  alt="logo" className ="logo"></img>
        <h1>About Glimmer Guard</h1>
        </header>
        <Link to ="/">Home</Link>
        {user && user.map((user) =>(
          <p key = {user._id}>{user._id}</p>)
        )}
    </Fragment>
}
export default About;