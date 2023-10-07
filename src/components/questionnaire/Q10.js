import React, { useState } from 'react';
import './Questionaire.css';  
import { Link } from 'react-router-dom';

function TendencySlider({ onValueChange }) {
    const [sliderValue, setSliderValue] = useState(0); 

    const handleSliderChange = (e) => {
        const newValue = parseInt(e.target.value);
        setSliderValue(newValue);
        onValueChange(newValue); 
    };

    return (
        <div className="tendency-slider" style={{ paddingTop: '2%'}}>
            <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                step="1"
                className="Q-form-control"
                style={{  width: '100%'}}
            />
        </div>
    );
}

function Q10() {
    const currentPage = 10;
    const totalPages = 11;

    const progressPercentage = (currentPage / totalPages) * 100;

    const progressBarStyle = {
        width: `${progressPercentage}%`,
    };

    const [tendencyValue, setTendencyValue] = useState(0); // 初始值为50

    const handleTendencyChange = (value) => {
        setTendencyValue(value);
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
            <div className="Q-left-container" >
                <p className='main-text' style={{paddingBottom:'1%'}}>10. How much do the following factors matter to you?</p>
                <div className="Q-slider-container">
                    <p className='main-text'>Diversity</p>
                    {/* <p className="small-text">*Your Tendency: {tendencyValue}</p> */}
                    <TendencySlider onValueChange={handleTendencyChange} />
                    <p className='main-text' style={{paddingTop:'5%'}}>Food</p>
                    {/* <p className="small-text">*Your Tendency: {tendencyValue}</p> */}
                    <TendencySlider onValueChange={handleTendencyChange} />
                    <p className='main-text' style={{paddingTop:'5%'}}>Safety</p>
                    {/* <p className="small-text">*Your Tendency: {tendencyValue}</p> */}
                    <TendencySlider onValueChange={handleTendencyChange} />
                    <p className='main-text' style={{paddingTop:'5%'}}>Career path</p>
                    {/* <p className="small-text">*Your Tendency: {tendencyValue}</p> */}
                    <TendencySlider onValueChange={handleTendencyChange} />
                    <p className='main-text' style={{paddingTop:'5%'}}>Research path</p>
                    {/* <p className="small-text">*Your Tendency: {tendencyValue}</p> */}
                    <TendencySlider onValueChange={handleTendencyChange} />
                    <p className='main-text' style={{paddingTop:'5%'}}>School reputation</p>
                    {/* <p className="small-text">*Your Tendency: {tendencyValue}</p> */}
                    <TendencySlider onValueChange={handleTendencyChange} />
                    <p className='main-text' style={{paddingTop:'5%'}}>Sports culture</p>
                    {/* <p className="small-text">*Your Tendency: {tendencyValue}</p> */}
                    <TendencySlider onValueChange={handleTendencyChange} />
                </div>
            </div>
            <div className="Q-center-container" style={{paddingTop:'5%'}}>
                <Link to="/my-college-ranking" className="small-button" style={{backgroundColor:'#96B2CF',height:'10%',padding:'1% 3%',flex:'0.02',marginRight:'15%'}}>Exit</Link>
                <div className='Q-Button-container' style={{flex:'0.98'}}>
                    <Link to="/question9" className="small-button" style={{backgroundColor:'#96B2CF',height:'100%',padding:'1% 4%'}}>&lt;</Link>
                    <div className="skip-button-container">
                        <Link to="/question11" className="small-text-blue">Skip</Link>
                    </div>
                    <Link to="/question11" className="small-button" style={{backgroundColor:'#003362',height:'100%',padding:'1% 4%'}}>&gt;</Link>
                </div>
            </div>
        </div>
    );
}

export default Q10;
