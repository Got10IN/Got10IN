import { Fragment, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux.hook'
import { updateQ5 } from '../../../utils/redux/questionnaire'
import { FormTitle, TendencySlider } from './components'

const Q5 = () => {
    const [tendencyValue, setTendencyValue] = useState(50) // 初始值为50

    const questionnaire = useAppSelector(
        (state) => state.questionnaire.value
    )

    const dispatch = useAppDispatch()

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
