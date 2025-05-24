import React, { useEffect, useState } from 'react'
import Header from "./components/Header"
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";


function Home() {

// this is just a test function that retreives all users ever created and prints them to the screen,
// to test if my backend is operating
  const [user, setUsers] = useState(null)
  useEffect(() =>{
    const fetchUsers = async ()=>{
      const response = await fetch('http://localhost:8080/api/home/')
      const json = await response.json()
      

      if (response.ok){
        setUsers(json)
      }
      
    }
    fetchUsers()
  }, [])
  return (
    <div>

    {/* {user && user.map} checks if there is users fetched, then prints them all */}
    
        <Header></Header>
        <Link to ="/about">about</Link>
        <div className='Users'>
          {user && user.map((user) =>(
          <p key = {user._id}>{user._id}</p>)
        )}
        </div>
    </div>
  )
}

export default Home