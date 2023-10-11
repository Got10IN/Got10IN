import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ11 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { useUpdateEffect } from 'usehooks-ts'

const Q11 = () => {
    const [selectedOptions1, setSelectedOptions1] = useState<string[]>([])
    const [selectedOptions2, setSelectedOptions2] = useState<string[]>([])
    const [selectedOptions3, setSelectedOptions3] = useState<string[]>([])

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(
            updateQ11([
                {
                    options: selectedOptions1,
                },
                {
                    options: selectedOptions2,
                },
                {
                    options: selectedOptions3
                }
            ])
        )
    }, [selectedOptions1, selectedOptions2, selectedOptions3])

    useEffect(() => {
        const [selectedOptions1, selectedOptions2, selectedOptions3] = questionnaire.q11
        setSelectedOptions1(selectedOptions1.options)
        setSelectedOptions2(selectedOptions2.options)
        setSelectedOptions3(selectedOptions3.options)
    }, [])

    return <div className='Q-left-container'></div>
}

export default Q11
