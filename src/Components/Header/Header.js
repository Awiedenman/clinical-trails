import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

export const Header = () => {

  return(
    <header>
      <h1>Clinical Trials</h1>
      <NavLink className='navlink' to='signup/login'> SignUp/ LogIn</NavLink>
    </header>
  )
}