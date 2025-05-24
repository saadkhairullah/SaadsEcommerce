import  { Fragment,useEffect, useState } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";


function About(){
    return <Fragment>
        <header>
        <img src="/photos/logo.webp"  alt="logo" className ="logo"></img>
        <h1>About Glimmer Guard</h1>
        </header>
        <Link to ="/">Home</Link>
    </Fragment>
}
export default About;