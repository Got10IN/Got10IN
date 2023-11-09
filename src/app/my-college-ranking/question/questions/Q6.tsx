'use client'

import { Fragment, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks/redux.hook'
import { updateQ6 } from '../../../../utils/redux/questionnaire'
import { FormTitle, TendencySlider } from '../components/components'

const Q6 = () => {
    const [tendencyValue, setTendencyValue] = useState(50) // 初始值为50

    const questionnaire = useAppSelector(
        (state) => state.questionnaire.value
    )

    const dispatch = useAppDispatch()

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
