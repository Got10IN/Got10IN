import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ6 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { FormTitle, TendencySlider } from './components'
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
        <Fragment>
            <FormTitle>6. What's your ideal college vibe?</FormTitle>

            <TendencySlider
                onValueChange={setTendencyValue}
                labelLeading='🤓 Hardcore'
                labelTrailing='🥳 Party'
            />
        </Fragment>
    )
}

export default Q6
