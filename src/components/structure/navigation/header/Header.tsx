import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './header.css'

function Header() {
    const location = useLocation()
    const isActive = (path: string) => location.pathname === path

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('isLoggedIn')
    )

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn')) {
            setIsLoggedIn(true)
        }
    }, [])

    const handleLogout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn')
    }

    return (
        <nav className='container'>
            <div
                className='navbar navbar-expand-lg fixed-top'
                style={{
                    paddingLeft: '10%',
                    paddingRight: '10%',
                    paddingTop: '3%',
                    paddingBottom: '1.5%',
                }}
            >
                <Link to='/' className='navbar-brand'>
                    <img src='/logo.png' alt='Logo' className='logo-img' />
                </Link>
                <div
                    className='navbar-collapse justify-content-center'
                    id='navbarNav'
                >
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className={`link1 ${
                                    isActive('/') ? 'active' : ''
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/my-college-ranking'
                                className={`link1 ${
                                    isActive('/my-college-ranking')
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                My College Ranking
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/find-mentor'
                                className={`link1 ${
                                    isActive('/find-mentor') ? 'active' : ''
                                }`}
                            >
                                Find a Mentor
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/about-us'
                                className={`link1 ${
                                    isActive('/about-us') ? 'active' : ''
                                }`}
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='ml-auto'>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className='custom-button'
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to='/login-signup' className='custom-button'>
                            Login/Signup
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header
