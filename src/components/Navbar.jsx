import React, { useState } from 'react'
import './navbar.css'

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    return (
        <nav>
            <div className="navbar-container">
                <div>
                    <img className="logo" src="https://www.ishangry.com/_next/static/images/hangry-animated-3561f21703587a6386cb983b3fb36c40.gif" alt="" />
                </div>
                <div className="navbar-menu">
                    <p>Tentang Kami</p>
                    <p>Semua Outlet</p>
                    <p>Promo</p>
                    <p>Karier</p>
                    <p id="downloadTxt">Download App</p>
                </div>
                <div onClick={() => setOpenMobileMenu(!openMobileMenu)} className="burger-menu-container">
                    <svg style={{ width: '1rem', height: '1rem' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="burger-menu" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                </div>
            </div>
            <div className="mobile-dropdown-menu" style={openMobileMenu ? {} : { display: 'none' }} >
                <div className="mobile-dropdown-menu-container">
                    <p>Tentang Kami</p>
                    <p>Semua Outlet</p>
                    <p>Promo</p>
                    <p>Karier</p>
                    <p id="downloadTxt">Download App</p>
                </div>
            </div>
        </nav>
    )
}
