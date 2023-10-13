import { ChangeEvent, Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateEffect } from 'usehooks-ts'
import { Q1Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'
import { updateQ1 } from '../../utils/redux/questionnaire'
import type { RootState } from '../../utils/redux/store'
import './Questionnaire.css'
import { FormTitle, MultiSelectDropdownField } from './components'

const Q1 = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    const [inputFieldValue, setInputFieldValue] = useState('')

    const handleRemoveOption = (index: number) => {
        const updatedOptions = [...selectedOptions]
        updatedOptions.splice(index, 1)
        setSelectedOptions(updatedOptions)
    }

    const handleInputFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputFieldValue(e.target.value)
    }

    const handleConfirmClick = () => {
        if (inputFieldValue.trim() !== '') {
            setSelectedOptions([...selectedOptions, inputFieldValue])
            setInputFieldValue('')
        }
    }

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(updateQ1({ options: selectedOptions }))
    }, [selectedOptions])

    useEffect(() => {
        const options = questionnaire.q1.options

        setSelectedOptions(options)
    }, [])

    return (
        <Fragment>
            <FormTitle>1. What are your fields of interest?</FormTitle>
            <p className='small-text mb-4'>
                *feel free to choose any number of fields you are interested in
            </p>
            <MultiSelectDropdownField
                initialOptions={initialOptions}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                removeOptionHandler={handleRemoveOption}
            />
            <p className='small-text mb-4 mt-8'>
                *if your interested field is not in our list, enter it here
            </p>
            <div className='flex justify-between items-center'>
                <input
                    type='flex-1'
                    className='Q-form-control'
                    placeholder='Please enter a field'
                    value={inputFieldValue}
                    onChange={handleInputFieldChange}
                    style={{ width: '80%' }}
                />
                <button
                    className='confirm-button'
                    onClick={handleConfirmClick}
                    style={{
                        backgroundColor: '#003362',
                        width: '15%',
                        height: '100%',
                        padding: '1% 2%',
                        marginLeft: '5%',
                    }}
                >
                    Confirm
                </button>
            </div>
        </Fragment>
    )
}

export default Q1
