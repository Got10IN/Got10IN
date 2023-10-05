import React from 'react';
import './Questionaire.css';

function Q1() {
    const currentPage = 1;
    const totalPages = 12;

    const progressPercentage = (currentPage / totalPages) * 100;

    const progressBarStyle = {
        width: `${progressPercentage}%`,
    };

    return ( 
        <div className="fullscreen-container">
            <div className="center-container">
                <div className="progress-container">
                    <div className="progress-title">Progress</div>
                    <div className="barbackground">
                        <div className="progress-fill" style={progressBarStyle}></div>
                    </div>
                    <div className="progress-text">{`${currentPage}/${totalPages}`}</div>
                </div>
            </div>
        </div>
    );
}

export default Q1;
