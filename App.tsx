import React, { useState } from "react";
import Message from "./About";
import Header from "./components/Header";
import About from "./About";
import Home from "./Home";
import UserSettings from "./userSettings";
import { Link, BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";




function App(){

    return<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userSettings" element={<UserSettings/>} />
      </Routes>
    </BrowserRouter>

    
}
export default App;