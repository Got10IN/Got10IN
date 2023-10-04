import React from 'react';
import './FindMentor.css';  

function MyCollegeRanking() {
    return (
        <div className="mentor-fullscreen-container">
            <div className="mentor-center-content">
                <img src="/MyRanking.png" alt="Mentor" className="image-blue" style={{paddingRight:'100px'}}/>
                <div className="text-body-right">   
                    <img src="/MyRankingWords.png" alt="MyRankingWords" className="WordCard" style={{ width: '500px', height: 'auto'}}/>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScEu6YWaiO3aV0yNXqRpwTs3j6jV6gflemDeNW_ZC0FE6BiBQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="subscribe-button" style={{marginTop:'20%',width:"350px"}}>Get started</a>
                    <img src="/Try.png" alt="Try" style={{maxWidth:'75%',paddingTop:'2%'}}/>
                </div>
            </div>
        </div>
    );
}

export default MyCollegeRanking;
