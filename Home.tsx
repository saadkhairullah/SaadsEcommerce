import React from 'react'
import Header from "./components/Header"
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
        <Header></Header>
        <Link to ="/about">about</Link>
    </div>
  )
}

export default Home