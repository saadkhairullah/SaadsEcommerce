import React, { useState } from "react";
import Message from "./About";
import Header from "./components/Header";
import About from "./About";
import Home from "./Home";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";




function App(){
    
    return<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

    
}
export default App;