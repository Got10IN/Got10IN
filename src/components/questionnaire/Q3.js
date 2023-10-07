import React, { useState, useEffect } from 'react';
import './Questionaire.css';  
import { Link } from 'react-router-dom';

function FieldWithDropdown({ options, selectedOptions, onSelect }) {
    const [field, setField] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);

    useEffect(() => {
        setField('');
    }, [selectedOptions]);

    const handleFieldChange = (e) => {
        const inputValue = e.target.value;
        setField(inputValue);

        const filtered = options.filter(option =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        );

        setFilteredOptions(filtered);
    };

    const handleOptionClick = (option) => {
        onSelect(option);
    };

    return (
        <div>
            <input
                type="text"
                className="Q-form-control"
                placeholder="Please enter letters to retrieve"
                value={field}
                onChange={handleFieldChange}
            />
            <div className="dropdown">
                {filteredOptions.map((option, index) => (
                    <div
                        key={index}
                        className="dropdown-option"
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}

function Q3() {
    const currentPage = 3;
    const totalPages = 11;

    const progressPercentage = (currentPage / totalPages) * 100;

    const progressBarStyle = {
        width: `${progressPercentage}%`,
    };
    const initialOptions = ["Sunny","Rainy","Stormy","Snowy","Icy","Foggy","Windy","Muggy","Dry","Tropical","Polar","Tornado-prone","Drought","Mild","Hailstorm","Psychology","Overcast","Blizzard","Heatwave","Tropical Cyclone","Dust Storm"];

    const [selectedOptions1, setSelectedOptions1] = useState([]);
    const [selectedOptions2, setSelectedOptions2] = useState([]);

    const handleSelectOption1 = (option) => {
        if (selectedOptions1.length < 3) {
            setSelectedOptions1([...selectedOptions1, option]);
        }
    };

    const handleRemoveOption1 = (index) => {
        const updatedOptions = [...selectedOptions1];
        updatedOptions.splice(index, 1);
        setSelectedOptions1(updatedOptions);
    };

    const handleSelectOption2 = (option) => {
        if (selectedOptions2.length < 3) {
            setSelectedOptions2([...selectedOptions2, option]);
        }
    };

    const handleRemoveOption2 = (index) => {
        const updatedOptions = [...selectedOptions2];
        updatedOptions.splice(index, 1);
        setSelectedOptions2(updatedOptions);
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
                <p className='main-text'>3.Tell us about your weather preference</p>
                <p className='main-text' style={{ paddingTop: '2%'}}>I like:</p>
                <p className='small-text'>*You can choose up to 3 weathers</p>
                <div className="selected-options-container">
                    {selectedOptions1.map((option, index) => (
                        <div key={index} className="selected-option">
                            {option}
                            <span className="remove-option" onClick={() => handleRemoveOption1(index)}>X</span>
                        </div>
                    ))}
                </div>
                <FieldWithDropdown options={initialOptions} selectedOptions={selectedOptions1} onSelect={handleSelectOption1} />
                <p className='main-text' style={{ paddingTop: '5%' }}>I don't like:</p>
                <p className='small-text'>*You can choose up to 3 weathers</p>
                <div className="selected-options-container">
                    {selectedOptions2.map((option, index) => (
                        <div key={index} className="selected-option">
                            {option}
                            <span className="remove-option" onClick={() => handleRemoveOption2(index)}>X</span>
                        </div>
                    ))}
                </div>
                <FieldWithDropdown options={initialOptions} selectedOptions={selectedOptions2} onSelect={handleSelectOption2} />
            </div>
            <div className="Q-center-container" style={{ paddingTop: '5%' }}>
                <Link to="/my-college-ranking" className="small-button" style={{backgroundColor:'#96B2CF',height:'10%',padding:'1% 3%',flex:'0.02',marginRight:'15%'}}>Exit</Link>
                <div className='Q-Button-container' style={{flex:'0.98'}}>
                    <Link to="/question2" className="small-button" style={{backgroundColor:'#96B2CF',height:'100%',padding:'1% 4%'}}>&lt;</Link>
                    <div className="skip-button-container">
                        <Link to="/question4" className="small-text-blue">Skip</Link>
                    </div>
                    <Link to="/question4" className="small-button" style={{backgroundColor:'#003362',height:'100%',padding:'1% 4%'}}>&gt;</Link>
                </div>
            </div>
        </div>
    );
}

export default Q3;
