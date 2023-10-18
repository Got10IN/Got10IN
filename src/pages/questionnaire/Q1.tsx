import { Fragment, useEffect, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { Q1Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux.hook'
import { updateQ1 } from '../../utils/redux/questionnaire'

import { FormTitle, MultiSelectDropdownField } from './components'

const Q1 = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    const [inputFieldValue, setInputFieldValue] = useState('')

    const handleRemoveOption = (index: number) => {
        const updatedOptions = [...selectedOptions]
        updatedOptions.splice(index, 1)
        setSelectedOptions(updatedOptions)
    }

    const handleConfirmClick = () => {
        if (inputFieldValue.trim() !== '') {
            setSelectedOptions([...selectedOptions, inputFieldValue])
            setInputFieldValue('')
        }
    }

    const questionnaire = useAppSelector((state) => state.questionnaire.value)

    const dispatch = useAppDispatch()

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
            <p className='text-text mb-4'>
                *feel free to choose any number of fields you are interested in
            </p>
            <MultiSelectDropdownField
                initialOptions={initialOptions}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                removeOptionHandler={handleRemoveOption}
            />
            <p className='text-text mb-4 mt-8'>
                *if your interested field is not in our list, enter it here
            </p>
            <div className='flex justify-between items-center'>
                <input
                    type='flex-1'
                    className='Q-form-control'
                    placeholder='Please enter a field'
                    value={inputFieldValue}
                    onChange={(e) => {
                        setInputFieldValue(e.target.value)
                    }}
                    style={{ width: '80%' }}
                />
                <button
                    className='text-sm font-semibold text-white border-none rounded-full inline-block cursor-pointer w-3/20 min-w-fit h-full py-1.5 px-4 bg-accent-dark ml-4'
                    onClick={handleConfirmClick}
                >
                    Confirm
                </button>
            </div>
        </Fragment>
    )
}

export default Q1
