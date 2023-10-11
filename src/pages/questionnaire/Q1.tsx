import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateEffect } from 'usehooks-ts'
import { updateQ1 } from '../../utils/redux/questionnaire'
import type { RootState } from '../../utils/redux/store'
import './Questionnaire.css'
import { FieldWithDropdown } from './components'
import { Q1Options as initialOptions } from '../../data/questionnaire/Questionnaire.data'
import { Combobox, Transition } from '@headlessui/react'

const Q1 = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    const [inputFieldValue, setInputFieldValue] = useState('')
    const [query, setQuery] = useState('')

    const [filteredOptions, setFilteredOptions] = useState(initialOptions)

    useEffect(() => {
        setFilteredOptions(
            initialOptions.filter((option) => {
                return option.toLowerCase().includes(query.toLowerCase())
            })
        )
    }, [query])

    const handleSelectOption = (option: string) => {
        if (selectedOptions.length < 3) {
            setSelectedOptions([...selectedOptions, option])
        }
    }

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
        <div className='Q-left-container' /*style={{height:'280px'}}*/>
            <p className='main-text'>1. What are your fields of interest?</p>
            <p className='small-text'>*You can choose up to 3 fields</p>

            <div className='selected-options-container'>
                {selectedOptions.map((option, index) => (
                    <div key={index} className='selected-option'>
                        {option}
                        <span
                            className='remove-option'
                            onClick={() => handleRemoveOption(index)}
                        >
                            X
                        </span>
                    </div>
                ))}
            </div>
            <Combobox
                value={selectedOptions}
                onChange={fai setSelectedOptions}
                multiple
            >
                {selectedOptions.length > 0 && (
                    <ul className='flex flex-wrap gap-4 mb-4 whitespace-nowrap'>
                        {selectedOptions.map((option, index) => (
                            <li key={index} className='flex items-center justify-center bg-accent text-white text-sm font-black rounded-full px-4 py-2'>{option}<button /></li>
                        ))}
                    </ul>
                )}
                <Combobox.Input
                    className='rounded-lg w-full h-10 border-text border-[1px] border-solid px-3 py-2'
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
                <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                >
                    <Combobox.Options>
                        {filteredOptions.map((option, index) => {
                            return (
                                <Combobox.Option
                                    key={index}
                                    value={option}
                                    onClick={() => {
                                        setSelectedOptions([
                                            ...selectedOptions,
                                            option,
                                        ])
                                    }}
                                >
                                    {option}
                                </Combobox.Option>
                            )
                        })}
                    </Combobox.Options>
                </Transition>
            </Combobox>
            {/* <FieldWithDropdown
                options={initialOptions}
                selectedOptions={selectedOptions}
                onSelect={handleSelectOption}
            /> */}
            <p className='small-text' style={{ paddingTop: '5%' }}>
                *If you cannot find your interested field in our list, enter one
            </p>
            <div className='flex justify-between items-center'>
                <input
                    type='text'
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
        </div>
    )
}

export default Q1
