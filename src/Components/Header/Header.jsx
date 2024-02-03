import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <header className='header'>
      <Link style={{textDecoration: "none", color: "black"}} to='/'>Home</Link>
      <Link style={{textDecoration: "none", color: "black"}} to='/about'>About</Link>
      <Link style={{textDecoration: "none", color: "black"}} to='/contact'>Contact</Link>
      <Link style={{textDecoration: "none", color: "black"}} to='/exam'>Exam</Link>
    </header>
  )
}

export default Header
