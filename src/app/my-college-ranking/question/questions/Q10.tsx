'use client'

import { Fragment, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { Q10Factors as factors } from '../../../../data/questionnaire/Questionnaire.data'
import { IQTendency } from '../../../../utils/types/IQuestionnaire'
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks/redux.hook'
import { updateQ10 } from '../../../../utils/redux/questionnaire'
import { FormSubtitle, FormTitle, TendencySlider } from '../components/components'

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

    const questionnaire = useAppSelector((state) => state.questionnaire.value)

    const dispatch = useAppDispatch()

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
                        <section
                            key={factor}
                            className='flex flex-row items-center'
                        >
                            <FormSubtitle className='basis-1/5 sm:basis-2/5 pt-[2%]'>
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

export default Q10
