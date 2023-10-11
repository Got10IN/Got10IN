import { useEffect, useState } from 'react'
import './Questionnaire.css'
import { TendencySlider } from './components'
import { IQTendency } from '../../interface/IQuestionnaire'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ10 } from '../../utils/redux/questionnaire'
import { useUpdateEffect } from 'usehooks-ts'

const Q10 = () => {
    const [tendencyValues, setTendencyValues] = useState<IQTendency[]>([
        { tendency: 0 },
        { tendency: 0 },
        { tendency: 0 },
        { tendency: 0 },
        { tendency: 0 },
        { tendency: 0 },
        { tendency: 0 },
    ])

    const handleTendencyChange = (value: number, index: number) => {
        setTendencyValues([
            ...tendencyValues.slice(0, index),
            { tendency: value },
            ...tendencyValues.slice(index + 1),
        ])
    }

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(updateQ10(tendencyValues))
    }, [tendencyValues])

    useEffect(() => {
        const tendencyValues = questionnaire.q10

        setTendencyValues(tendencyValues)
    }, [])

    return (
        <div className='Q-left-container'>
            <p className='main-text' style={{ paddingBottom: '1%' }}>
                10. How much do the following factors matter to you?
            </p>
            <div className='Q-slider-container'>
                {factors.map((factor, index) => {
                    return (
                        <section key={factor}>
                            <p className='main-text'>{factor}</p>
                            <TendencySlider
                                onValueChange={(value) =>
                                    handleTendencyChange(value, index)
                                }
                                width={100}
                            />
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

const factors: string[] = [
    'Diversity',
    'Food',
    'Safety',
    'Career path',
    'Research opportunieis',
    'School reputation',
    'Sports culture',
]

export default Q10
