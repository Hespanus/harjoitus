import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Article from "./Article";
import App from './App';

export default function Navbar() {
  return (
    <>
    <div className='navbar'>
    <Link to="/article" className='links' >Artikkeli</Link>
        <Link to="/app" className='links'>Tehtävät</Link>
    </div>
        
        <Routes>
        
            
        <Route path="/article" element={<Article />} /> 
        <Route path="/app" element={<App />} />         
        
        </Routes>
        
        
            
      
            

            
            
    </>
  )
}
