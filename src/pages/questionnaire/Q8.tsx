import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questionaire.css';

function Q8() {
    const currentPage = 8;
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
                <p className='main-text' style={{paddingBottom:'2%'}}>8. What’s your ideal tuition range?</p>
                <label>
                    <input
                        type="checkbox"
                        value="1"
                        checked={selectedOptions.includes("Below 15k/semester")}
                        onChange={() => handleOptionSelect("Below 15k/semester")}
                    />
                    Below 15k/semester
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="2"
                        checked={selectedOptions.includes("15-20k/semester")}
                        onChange={() => handleOptionSelect("15-20k/semester")}
                    />
                    15-20k/semester
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="3"
                        checked={selectedOptions.includes("20-25k/semester")}
                        onChange={() => handleOptionSelect("20-25k/semester")}
                    />
                    20-25k/semester
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="4"
                        checked={selectedOptions.includes("25-30k/semester")}
                        onChange={() => handleOptionSelect("25-30k/semester")}
                    />
                    25-30k/semester
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        value="5"
                        checked={selectedOptions.includes("Above 30k/semester")}
                        onChange={() => handleOptionSelect("Above 30k/semester")}
                    />
                    Above 30k/semester
                </label>
            </div>
            <div className="Q-center-container">
                <Link to="/my-college-ranking" className="small-button" style={{backgroundColor:'#96B2CF',height:'10%',padding:'1% 3%',flex:'0.02',marginRight:'15%'}}>Exit</Link>
                <div className='Q-Button-container' style={{flex:'0.98'}}>
                    <Link to="/question7" className="small-button" style={{backgroundColor:'#96B2CF',height:'100%',padding:'1% 4%'}}>&lt;</Link>
                    <div className="skip-button-container">
                        <Link to="/question9" className="small-text-blue">Skip</Link>
                    </div>
                    <Link to="/question9" className="small-button" style={{backgroundColor:'#003362',height:'100%',padding:'1% 4%'}}>&gt;</Link>
                </div>
            </div>
        </div>
    );
}

export default Q8;
