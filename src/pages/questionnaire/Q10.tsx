import { Fragment, useEffect, useState } from 'react'
import './Questionnaire.css'
import { FormSubtitle, FormTitle, TendencySlider } from './components'
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
        <Fragment>
            <FormTitle>
                10. How much do the following factors matter to you?
            </FormTitle>
            <div className='flex flex-col [&>*]:flex-1'>
                {factors.map((factor, index) => {
                    return (
                        <section key={factor} className='flex flex-row items-center'>
                            <FormSubtitle className='basis-1/5 pt-[2%]'>
                                {factor}
                            </FormSubtitle>

                            <TendencySlider
                                onValueChange={(value) =>
                                    handleTendencyChange(value, index)
                                }
                                initialValue={0}
                            />
                        </section>
                    )
                })}
            </div>
        </Fragment>
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
