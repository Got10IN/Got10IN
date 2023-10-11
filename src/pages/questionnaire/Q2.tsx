import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ2 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { useUpdateEffect } from 'usehooks-ts'
import { Combobox, Transition } from '@headlessui/react'

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

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(updateQ2({ option: selectedMBTI }))
    }, [selectedMBTI])

    useEffect(() => {
        const MBTI = questionnaire.q2.option
        if (MBTI.length === 4) {
            setSelectedMBTI(MBTI)
        }
    }, [])

    return (
        <div className='Q-left-container' style={{ height: '300px' }}>
            <p className='main-text'>2. What is your MBTI type?</p>
            <div className='grid grid-cols-4 gap-8'>
                {mbtiOptions.map((mbti, index) => {
                    const selected = mbti === selectedMBTI
                    return (
                        <div
                            key={index}
                            className={`${
                                selected
                                    ? 'bg-accent-dark scale-110'
                                    : 'bg-accent-light hover:bg-accent-dark hover:scale-110 hover:duration-300'
                            } duration-150 cursor-pointer text-white rounded-xl text-center py-2`}
                            onClick={() => setSelectedMBTI(mbti)}
                        >
                            {mbti}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Q2
