import { ChangeEvent, useContext, useEffect, useState } from 'react'
import './Questionaire.css'
import QuestionaireContext from '../../context/Questionaire.context'

const Q2 = () => {
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

    const { questionaire, setQuestionaire } = useContext(QuestionaireContext)

    useEffect(() => {
        setQuestionaire({ ...questionaire, q2: { option: selectedMBTI } })
    }, [selectedMBTI])

    return (
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
    )
}

export default Q2
