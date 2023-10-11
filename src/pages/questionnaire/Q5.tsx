import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ5 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { TendencySlider } from './components'
import { useUpdateEffect } from 'usehooks-ts'

const Q5 = () => {
    const [tendencyValue, setTendencyValue] = useState(50) // 初始值为50

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(
            updateQ5({
                tendency: tendencyValue,
            })
        )
    }, [tendencyValue])

    useEffect(() => {
        const tendency = questionnaire.q5.tendency
        setTendencyValue(tendency)
    }, [])

    return (
        <div className='Q-left-container' style={{ height: '300px' }}>
            <p className='main-text'>
                5. What kind of lifestyle do you prefer?
            </p>
            <TendencySlider
                onValueChange={setTendencyValue}
                labelLeading='🤓 Rural'
                labelTrailing='🥳 Urban'
            />
        </div>
    )
}

export default Q5
