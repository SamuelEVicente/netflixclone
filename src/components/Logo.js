import React from 'react'
import { Link } from 'react-router-dom'

const logoUrl = require('../netflix_logo.png')

export const Logo = ({ changeMenuMarker }) => (
  <div className="navbar-logo-container">
    <Link to='/' onClick={() => changeMenuMarker('home')}>
      <img className="navbar-logo" src={logoUrl} alt='navbar-logo' />
    </Link>
  </div>
)
