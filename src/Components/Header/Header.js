import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {

  return(
    <div>
      <h1>Clinical Trials</h1>
      <NavLink to='signup/login'> SignUp/ LogIn</NavLink>
    </div>
  )
}