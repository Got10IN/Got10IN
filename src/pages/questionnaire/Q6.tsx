import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ6 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { TendencySlider } from './components'
import { useUpdateEffect } from 'usehooks-ts'

const Q6 = () => {
    const [tendencyValue, setTendencyValue] = useState(50) // 初始值为50

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(
            updateQ6({
                tendency: tendencyValue,
            })
        )
    }, [tendencyValue])

    useEffect(() => {
        const tendency = questionnaire.q6.tendency
        setTendencyValue(tendency)
    }, [])

    return (
        <div className='Q-left-container' style={{ height: '300px' }}>
            <p className='main-text'>6. What's your ideal college vibe?</p>
            <p className='small-text'>*Your Tendency: {tendencyValue}</p>
            <TendencySlider
                onValueChange={setTendencyValue}
                labelLeading='🤓 Hardcore'
                labelTrailing='🥳 Party'
            />
        </div>
    )
}

export default Q6
