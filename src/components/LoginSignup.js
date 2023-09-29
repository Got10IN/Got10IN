import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';

function LoginSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('https://got10in-backend-cfba39007310.herokuapp.com/login/', { email, password });
          if (response.status === 200 && response.data.success) {
              console.log("Login successful!", response.data);
              localStorage.setItem('isLoggedIn', 'true');
              alert("Login successful!");
          } else {
              console.log("Login failed!");
              alert("Login failed!");
          }
      } catch (error) {
          console.error("Error during login:", error);
          alert("Error during login. Please try again.");
      }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h1>Login/Signup Page</h1>
                <div className="login-form">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
                <p>Our login and signup features are under development. Please check back soon!</p>
            </div>
        </div>
    );
}

export default LoginSignup;
