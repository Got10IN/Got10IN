import { ChangeEvent, useEffect, useState } from 'react'
import { useQuestionaireContext } from '../../utils/hooks/QuestionaireContext.hook'
import './Questionaire.css'
import { FieldWithDropdown } from './components'

const Q1 = () => {
    const initialOptions = [
        'Technology',
        'Science',
        'Health',
        'Business',
        'Education',
        'Arts',
        'Music',
        'Sports',
        'Travel',
        'Food',
        'Fashion',
        'Finance',
        'Literature',
        'History',
        'Environment',
        'Psychology',
        'Gaming',
        'Photography',
        'Politics',
        'Design',
    ]

    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    const [inputFieldValue, setInputFieldValue] = useState('')
    const [generatedOptions, setGeneratedOptions] = useState<string[]>([])
    const [confirming, setConfirming] = useState(false)

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
            setGeneratedOptions([...generatedOptions, inputFieldValue])
            setSelectedOptions([...selectedOptions, inputFieldValue])
            setInputFieldValue('')
        }
        setConfirming(false)
    }

    const [questionaire, setQuestionaire] = useQuestionaireContext()

    useEffect(() => {
        setQuestionaire({
            ...questionaire,
            q1: {
                options: selectedOptions,
            },
        })
    }, [selectedOptions])

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
            <FieldWithDropdown
                options={initialOptions}
                selectedOptions={selectedOptions}
                onSelect={handleSelectOption}
            />
            <p className='small-text' style={{ paddingTop: '5%' }}>
                *If you cannot find your interested field in our list, enter one
            </p>
            <div className='Q-button-container'>
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
