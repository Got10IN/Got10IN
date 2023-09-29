import React from 'react';
import './FindMentor.css';  // Import the CSS file

function FindMentor() {
    return (
        <div className="mentor-fullscreen-container">
            <div className="mentor-center-content">
                <img src="/Mentor1.png" alt="Logo" className="image-blue"/>
                <div className="text-body-right">   
                    <p className="medium-text-blue">Stay tuned, feature is coming soon!</p>
                    <img src="/MentorWords.png" alt="MentorWords" className="MentorWords" style={{ width: '400px', height: 'auto' }}/>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScEu6YWaiO3aV0yNXqRpwTs3j6jV6gflemDeNW_ZC0FE6BiBQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="subscribe-button" style={{marginTop:'50px'}}>Join wishlist</a>
                </div>
            </div>
        </div>
    );
}

export default FindMentor;
