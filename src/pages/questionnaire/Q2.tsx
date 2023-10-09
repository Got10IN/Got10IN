import React, { ChangeEvent, useState } from 'react'
import './Questionaire.css'
import { Link } from 'react-router-dom'

function Q2() {
    const currentPage = 2
    const totalPages = 11

    const progressPercentage = (currentPage / totalPages) * 100

    const progressBarStyle = {
        width: `${progressPercentage}%`,
    }

    // 初始 MBTI 类型选项
    const mbtiOptions = [
        'ISTJ',
        'ISFJ',
        'INFJ',
        'INTJ',
        'ISTP',
        'ISFP',
        'INFP',
        'INTP',
        'ESTP',
        'ESFP',
        'ENFP',
        'ENTP',
        'ESTJ',
        'ESFJ',
        'ENFJ',
        'ENTJ',
    ]

    const [selectedMBTI, setSelectedMBTI] = useState('')

    const handleMBTISelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedMBTI(e.target.value)
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
                <p className='main-text'>2. What is your MBTI type?</p>
                <div className='mbti-select-container'>
                    <select
                        className='Q-form-control'
                        value={selectedMBTI}
                        onChange={handleMBTISelect}
                    >
                        <option value='' disabled>
                            --Please select your MBTI--
                        </option>
                        {mbtiOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='Q-center-container' style={{ paddingTop: '5%' }}>
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
                        to='/question1'
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
                        <Link to='/question3' className='small-text-blue'>
                            Skip
                        </Link>
                    </div>
                    <Link
                        to='/question3'
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

export default Q2
