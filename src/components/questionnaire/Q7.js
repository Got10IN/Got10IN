import React, { useState } from 'react';
import './Questionaire.css';  
import { Link } from 'react-router-dom';

function Q7() {
    const currentPage = 7;
    const totalPages = 11;

    const progressPercentage = (currentPage / totalPages) * 100;

    const progressBarStyle = {
        width: `${progressPercentage}%`,
    };

    const [selectedOptions, setSelectedOptions] = useState([]); 

    const handleOptionSelect = (option) => {
        
        if (selectedOptions.includes(option)) {
           
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return ( 
        <div className="Q-fullscreen-container" style={{paddingTop:'15%',paddingBottom:'10%'}}>
            <div className="Q-center-container" style={{ paddingBottom: '3%' }}>
                <div className="progress-container">
                    <div className="progress-title">Progress</div>
                    <div className="barbackground">
                        <div className="progress-fill" style={progressBarStyle}></div>
                    </div>
                    <div className="progress-text">{`${currentPage}/${totalPages}`}</div>
                </div>
            </div>
            <div className="Q-left-container" style={{ height: '300px' }}>
                <p className='main-text' style={{paddingBottom:'2%'}}>7. What type(s) of college do you prefer?</p>
                <label>
                    <input
                        type="checkbox"
                        value="Public"
                        checked={selectedOptions.includes("Public")}
                        onChange={() => handleOptionSelect("Public")}
                    />
                    Public
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="Private"
                        checked={selectedOptions.includes("Private")}
                        onChange={() => handleOptionSelect("Private")}
                    />
                    Private
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="Liberal arts"
                        checked={selectedOptions.includes("Liberal arts")}
                        onChange={() => handleOptionSelect("Liberal arts")}
                    />
                    Liberal arts
                </label>
            </div>
            <div className="Q-center-container">
                <Link to="/my-college-ranking" className="small-button" style={{backgroundColor:'#96B2CF',height:'10%',padding:'1% 3%',flex:'0.02',marginRight:'15%'}}>Exit</Link>
                <div className='Q-Button-container' style={{flex:'0.98'}}>
                    <Link to="/question6" className="small-button" style={{backgroundColor:'#96B2CF',height:'100%',padding:'1% 4%'}}>&lt;</Link>
                    <div className="skip-button-container">
                        <Link to="/question8" className="small-text-blue">Skip</Link>
                    </div>
                    <Link to="/question8" className="small-button" style={{backgroundColor:'#003362',height:'100%',padding:'1% 4%'}}>&gt;</Link>
                </div>
            </div>
        </div>
    );
}

export default Q7;
