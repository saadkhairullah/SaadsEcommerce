import React, { useEffect, useState } from 'react'
import Header from "./components/Header"
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";


function Home() {

  const [allUsers, setUsers] = useState([])
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
        <Header></Header>
        <Link to ="/about">about</Link>
        <div className='Users'>
          {allUsers && allUsers.map((user) =>(
          <p key = {user._id}>{user.fName}</p>)
        )}
        </div>
    </div>
  )
}

export default Home