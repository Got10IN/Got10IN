import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateEffect } from 'usehooks-ts'
import { Q3Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'
import { updateQ3 } from '../../utils/redux/questionnaire'
import { RootState } from '../../utils/redux/store'
import './Questionnaire.css'
import { FormSubtitle, FormTitle, MultiSelectDropdownField } from './components'

const Q3 = () => {
    const [selectedOptions1, setSelectedOptions1] = useState<string[]>([])
    const [selectedOptions2, setSelectedOptions2] = useState<string[]>([])

    const handleRemoveOption1 = (index: number) => {
        const updatedOptions = [...selectedOptions1]
        updatedOptions.splice(index, 1)
        setSelectedOptions1(updatedOptions)
    }

    const handleRemoveOption2 = (index: number) => {
        const updatedOptions = [...selectedOptions2]
        updatedOptions.splice(index, 1)
        setSelectedOptions2(updatedOptions)
    }

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(
            updateQ3([
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
        const [selectedOptions1, selectedOptions2] = questionnaire.q3
        setSelectedOptions1(selectedOptions1.options)
        setSelectedOptions2(selectedOptions2.options)
    }, [])

    return (
        <Fragment>
            <FormTitle>
                3. Tell us a bit about your weather preference
            </FormTitle>
            <FormSubtitle className='mt-4'>I am looking for:</FormSubtitle>
            <MultiSelectDropdownField
                initialOptions={initialOptions}
                selectedOptions={selectedOptions1}
                setSelectedOptions={setSelectedOptions1}
                removeOptionHandler={handleRemoveOption1}
            />
            <FormSubtitle className='mt-4'>
                Weathers I'd want to avoid:
            </FormSubtitle>
            <MultiSelectDropdownField
                initialOptions={initialOptions}
                selectedOptions={selectedOptions2}
                setSelectedOptions={setSelectedOptions2}
                removeOptionHandler={handleRemoveOption2}
            />
        </Fragment>
    )
}

export default Q3
