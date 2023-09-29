import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    const headerStyle = {
      paddingLeft: '150px',  // 左侧 padding
      paddingRight: '150px', // 右侧 padding
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
                        <li className="nav-item active">
                          <Link to="/" className="nav-link special-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/my-college-ranking" className="nav-link">My College Ranking</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/find-mentor" className="nav-link">Find a Mentor</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link">About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="ml-auto">
                    <Link to="/login-signup" className="custom-button">Login/Signup</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
