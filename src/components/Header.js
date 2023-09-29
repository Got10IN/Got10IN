import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './header.css';

function Header() {
    const headerStyle = {
      paddingLeft: '150px',
      paddingRight: '150px',
    };

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('isLoggedIn'));

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn')) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={headerStyle}>
            <div className="container">
                <Link to="/" className="navbar-brand logo-header">
                    <img src="/logo.png" alt="Your Logo" className="logo-img" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                        <Link to="/" className="nav-link special-link">Home</Link>
                    </li>
                    <li className={`nav-item ${isActive('/my-college-ranking') ? 'active' : ''}`}>
                        <Link to="/my-college-ranking" className="nav-link">My College Ranking</Link>
                    </li>
                    <li className={`nav-item ${isActive('/find-mentor') ? 'active' : ''}`}>
                        <Link to="/find-mentor" className="nav-link special-link">Find a Mentor</Link>
                    </li>
                    <li className={`nav-item ${isActive('/about-us') ? 'active' : ''}`}>
                        <Link to="/about-us" className="nav-link">About Us</Link>
                    </li>
                    </ul>
                </div>
                <div className="ml-auto">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="custom-button">Logout</button>
                    ) : (
                        <Link to="/login-signup" className="custom-button">Login/Signup</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;
