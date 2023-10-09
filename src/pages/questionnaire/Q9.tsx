import React, { useState } from 'react';
import './Questionaire.css';  
import { Link } from 'react-router-dom';

function Q9() {
    const currentPage = 9;
    const totalPages = 11;

    const progressPercentage = (currentPage / totalPages) * 100;

    const progressBarStyle = {
        width: `${progressPercentage}%`,
    };
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]); 

    const handleOptionSelect = (option: string) => {
        
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
                <p className='main-text' style={{paddingBottom:'2%'}}>9. What is the GPA range that meets your expectations for the school you wish to attend?</p>
                <label>
                    <input
                        type="checkbox"
                        value="I don’t care"
                        checked={selectedOptions.includes("I don’t care")}
                        onChange={() => handleOptionSelect("I don’t care")}
                    />
                    I don’t care
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="3.0+"
                        checked={selectedOptions.includes("3.0+")}
                        onChange={() => handleOptionSelect("3.0+")}
                    />
                    3.0+
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="3.0-3.5"
                        checked={selectedOptions.includes("3.0-3.5")}
                        onChange={() => handleOptionSelect("3.0-3.5")}
                    />
                    3.0-3.5
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="above 3.5"
                        checked={selectedOptions.includes("above 3.5")}
                        onChange={() => handleOptionSelect("above 3.5")}
                    />
                    above 3.5
                </label>
            </div>
            <div className="Q-center-container">
                <Link to="/my-college-ranking" className="small-button" style={{backgroundColor:'#96B2CF',height:'10%',padding:'1% 3%',flex:'0.02',marginRight:'15%'}}>Exit</Link>
                <div className='Q-Button-container' style={{flex:'0.98'}}>
                    <Link to="/question8" className="small-button" style={{backgroundColor:'#96B2CF',height:'100%',padding:'1% 4%'}}>&lt;</Link>
                    <div className="skip-button-container">
                        <Link to="/question10" className="small-text-blue">Skip</Link>
                    </div>
                    <Link to="/question10" className="small-button" style={{backgroundColor:'#003362',height:'100%',padding:'1% 4%'}}>&gt;</Link>
                </div>
            </div>
        </div>
    );
}

export default Q9;
