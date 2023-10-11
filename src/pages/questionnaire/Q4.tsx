import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateEffect } from 'usehooks-ts'
import { updateQ4 } from '../../utils/redux/questionnaire'
import { RootState } from '../../utils/redux/store'
import './Questionnaire.css'
import {
    FormSubtitle,
    FormTitle,
    MultiSelectDropdownField,
    MultiSelectGrid,
} from './components'
import { Q4Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'

const Q4 = () => {
    const [selectedOptions1, setSelectedOptions1] = useState<string[]>([])
    const [selectedOptions2, setSelectedOptions2] = useState<string[]>([])

    const handleSelectOption1 = (option: string) => {
        if (selectedOptions1.length < 3) {
            setSelectedOptions1([...selectedOptions1, option])
        }
    }

    const handleRemoveOption1 = (index: number) => {
        const updatedOptions = [...selectedOptions1]
        updatedOptions.splice(index, 1)
        setSelectedOptions1(updatedOptions)
    }

    const handleSelectOption2 = (option: string) => {
        if (selectedOptions2.length < 3) {
            setSelectedOptions2([...selectedOptions2, option])
        }
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
