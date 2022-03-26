import React, {FC} from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar: FC = () => {
    return (
        <nav>
        <div className="nav-wrapper purple darken-2 px1">
          <NavLink end  to="/" className="brand-logo">React + Typescript</NavLink>
          <ul className="right hide-on-med-and-down">
            <li> <NavLink end to="/">Todo list</NavLink></li>  
            <li><NavLink end to="/about">About</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}