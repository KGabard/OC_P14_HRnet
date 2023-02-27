import React from 'react'
import { NavLink } from 'react-router-dom'
import hrnetLogo from '../assets/logos/hrnet-logo.png'

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img
          src={hrnetLogo}
          alt="HRnet logo"
          className="header__logo-container__logo"
        />
        <p className="header__logo-container__text">HRnet</p>
      </div>
      <nav className="header__navbar">
        <NavLink to={'/'} className="header__navbar__link">
          Home
        </NavLink>
        <NavLink to={'/employees'} className="header__navbar__link">
          Employees
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
