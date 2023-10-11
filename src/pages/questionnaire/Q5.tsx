import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ5 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { FormTitle, TendencySlider } from './components'
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
        <Fragment>
            <FormTitle>
                5. Which type of lifestyle do you lean towards?
            </FormTitle>
            <TendencySlider
                onValueChange={setTendencyValue}
                labelLeading='🤓 Rural'
                labelTrailing='🥳 Urban'
            />
        </Fragment>
    )
}

export default Q5
