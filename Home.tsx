import React, { useEffect, useState } from 'react'
import Header from "./components/Header"
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";


function Home() {

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

    {/* This is where i left off */}
    
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