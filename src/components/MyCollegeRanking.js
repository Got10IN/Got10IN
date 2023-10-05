import './FindMentor.css';  
import React from 'react';
import { Link } from 'react-router-dom';

function MyCollegeRanking() {
    return (
        <div className="mentor-fullscreen-container">
            <div className="mentor-center-content">
                <img src="/MyRanking.png" alt="Mentor" className="image-blue" style={{paddingRight:'100px'}}/>
                <div className="text-body-right">   
                    <img src="/MyRankingWords.png" alt="MyRankingWords" className="WordCard" style={{ width: '500px', height: 'auto'}}/>
                    <Link to="/question1" className="subscribe-button" style={{marginTop:'20%',width:"350px"}}>Get started</Link>
                    <img src="/Try.png" alt="Try" style={{maxWidth:'75%',paddingTop:'2%'}}/>
                </div>
            </div>
        </div>
    );
}

export default MyCollegeRanking;
