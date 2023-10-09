import React, { useState } from 'react'
import './Questionaire.css'
import { Link } from 'react-router-dom'
import { TendencySlider } from './components'

function Q6() {
    const currentPage = 6
    const totalPages = 11

    const progressPercentage = (currentPage / totalPages) * 100

    const progressBarStyle = {
        width: `${progressPercentage}%`,
    }

    const [tendencyValue, setTendencyValue] = useState(50) // 初始值为50

    const handleTendencyChange = (value: number) => {
        setTendencyValue(value)
    }

    return (
        <div
            className='Q-fullscreen-container'
            style={{ paddingTop: '15%', paddingBottom: '10%' }}
        >
            <div className='Q-center-container' style={{ paddingBottom: '3%' }}>
                <div className='progress-container'>
                    <div className='progress-title'>Progress</div>
                    <div className='barbackground'>
                        <div
                            className='progress-fill'
                            style={progressBarStyle}
                        ></div>
                    </div>
                    <div className='progress-text'>{`${currentPage}/${totalPages}`}</div>
                </div>
            </div>
            <div className='Q-left-container' style={{ height: '300px' }}>
                <p className='main-text'>6. What's your ideal college vibe?</p>
                <p className='small-text'>*Your Tendency: {tendencyValue}</p>
                <TendencySlider
                    onValueChange={handleTendencyChange}
                    labelLeading='🤓 Hardcore'
                    labelTrailing='🥳 Party'
                />
            </div>
            <div className='Q-center-container'>
                <Link
                    to='/my-college-ranking'
                    className='small-button'
                    style={{
                        backgroundColor: '#96B2CF',
                        height: '10%',
                        padding: '1% 3%',
                        flex: '0.02',
                        marginRight: '15%',
                    }}
                >
                    Exit
                </Link>
                <div className='Q-Button-container' style={{ flex: '0.98' }}>
                    <Link
                        to='/question5'
                        className='small-button'
                        style={{
                            backgroundColor: '#96B2CF',
                            height: '100%',
                            padding: '1% 4%',
                        }}
                    >
                        &lt;
                    </Link>
                    <div className='skip-button-container'>
                        <Link to='/question7' className='small-text-blue'>
                            Skip
                        </Link>
                    </div>
                    <Link
                        to='/question7'
                        className='small-button'
                        style={{
                            backgroundColor: '#003362',
                            height: '100%',
                            padding: '1% 4%',
                        }}
                    >
                        &gt;
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Q6