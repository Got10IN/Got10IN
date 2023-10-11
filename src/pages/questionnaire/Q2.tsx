import { Fragment, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { Q2Options as mbtiOptions } from '../../data/questionnaire/Questionnaire.data'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux.hook'
import { updateQ2 } from '../../utils/redux/questionnaire'
import { FormTitle } from './components'

const Q2 = () => {
    const [selectedMBTI, setSelectedMBTI] = useState('')

    const questionnaire = useAppSelector((state) => state.questionnaire.value)

    const dispatch = useAppDispatch()

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
        <Fragment>
            <FormTitle>2. What's your MBTI?</FormTitle>
            <div className='grid grid-cols-4 gap-8'>
                {mbtiOptions.map((mbti, index) => {
                    const selected = mbti === selectedMBTI
                    return (
                        <div
                            key={index}
                            className={`${
                                selected
                                    ? 'bg-accent-dark'
                                    : 'bg-accent-light hover:bg-accent'
                            } hover:scale-110 hover:duration-300 duration-150 cursor-pointer text-white rounded-xl text-center py-2`}
                            onClick={() => setSelectedMBTI(mbti)}
                        >
                            {mbti}
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default Q2
