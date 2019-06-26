import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = ({ changeMenuMarker, page }) => (
    <div className="navbar-menu-option-container">
        <Link to='/' onClick={() => changeMenuMarker('home')}>
            <span
                className="navbar-menu-option"
                style={{ borderColor: page === 'home' ? '#B8130D' : null }}
            >
                Home
      </span>
        </Link>
        {/* <Link to='/favorites' onClick={() => changeMenuMarker('favorites')}>
            <span
                className="navbar-menu-option"
                style={{ borderColor: page === 'favorites' ? '#B8130D' : null }}
            >
                Favorites
      </span>
        </Link> */}
    </div>
)
