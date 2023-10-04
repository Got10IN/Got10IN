import React from 'react';
import './FindMentor.css';  

function FindMentor() {
    return (
        <div className="mentor-fullscreen-container">
            <div className="mentor-center-content">
                <img src="/Mentor.png" alt="Mentor" className="image-blue" style={{paddingRight:'100px'}}/>
                <div className="text-body-right">   
                    <img src="/MentorWords.png" alt="MentorWords" className="WordCard"/>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScEu6YWaiO3aV0yNXqRpwTs3j6jV6gflemDeNW_ZC0FE6BiBQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="subscribe-button" style={{marginTop:'15%',width:"350px"}}>Join wishlist</a>
                </div>
            </div>
        </div>
    );
}

export default FindMentor;
