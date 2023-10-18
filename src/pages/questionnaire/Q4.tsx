import { Fragment, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { Q4Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux.hook'
import { updateQ4 } from '../../utils/redux/questionnaire'
import { FormSubtitle, FormTitle, MultiSelectGrid } from './components'

const Q4 = () => {
    const [selectedOptions1, setSelectedOptions1] = useState<string[]>([])
    const [selectedOptions2, setSelectedOptions2] = useState<string[]>([])

    const questionnaire = useAppSelector(
        (state) => state.questionnaire.value
    )

    const dispatch = useAppDispatch()

    useUpdateEffect(() => {
        dispatch(
            updateQ4([
                {
                    options: selectedOptions1,
                },
                {
                    options: selectedOptions2,
                },
            ])
        )
    }, [selectedOptions1, selectedOptions2])

    useEffect(() => {
        const [selectedOptions1, selectedOptions2] = questionnaire.q4
        setSelectedOptions1(selectedOptions1.options)
        setSelectedOptions2(selectedOptions2.options)
    }, [])

    // @todo look into https://www.npmjs.com/package/react-simple-maps

    return (
        <Fragment>
            <FormTitle>
                4. Tell us a bit about your location preference
            </FormTitle>
            <FormSubtitle className='mt-4'>I am thinking about:</FormSubtitle>
            <MultiSelectGrid
                initialOptions={initialOptions}
                selectedOptions={selectedOptions1}
                setSelectedOptions={setSelectedOptions1}
            />
            <FormSubtitle className='mt-4'>
                Places I want to avoid:
            </FormSubtitle>
            <MultiSelectGrid
                initialOptions={initialOptions}
                selectedOptions={selectedOptions2}
                setSelectedOptions={setSelectedOptions2}
            />
        </Fragment>
    )
}

export default Q4
