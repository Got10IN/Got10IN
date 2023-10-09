import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import './Questionaire.css'
import { FieldWithDropdown } from './components'

function Q1() {
    const currentPage = 1
    const totalPages = 11

    const progressPercentage = (currentPage / totalPages) * 100

    const progressBarStyle = {
        width: `${progressPercentage}%`,
    }

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

    return (
        <div
            className='Q-fullscreen-container'
            style={{ paddingTop: '15%', paddingBottom: '10%' }}
        >
            <div className='Q-center-container' style={{ paddingBottom: '3%' }}>
                <div className='progress-container'>
                    <div className='progress-title'>Progress</div>
                    <div className='barbackground'>
                        <div
                            className='progress-fill'
                            style={progressBarStyle}
                        ></div>
                    </div>
                    <div className='progress-text'>{`${currentPage}/${totalPages}`}</div>
                </div>
            </div>
            <div className='Q-left-container' /*style={{height:'280px'}}*/>
                <p className='main-text'>
                    1. What are your fields of interest?
                </p>
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
                    *If you cannot find your interested field in our list, enter
                    one
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
            <div className='Q-center-container' style={{ paddingTop: '5%' }}>
                <Link
                    to='/my-college-ranking'
                    className='small-button'
                    style={{
                        backgroundColor: '#96B2CF',
                        height: '10%',
                        padding: '1% 3%',
                        flex: '0.02',
                        marginRight: '15%',
                    }}
                >
                    Exit
                </Link>
                <div className='Q-Button-container' style={{ flex: '0.98' }}>
                    <button
                        className='small-button'
                        style={{
                            backgroundColor: '#96B2CF',
                            height: '100%',
                            padding: '1% 4%',
                        }}
                    >
                        &lt;
                    </button>
                    <div className='skip-button-container'>
                        <Link to='/question2' className='small-text-blue'>
                            Skip
                        </Link>
                    </div>
                    <Link
                        to='/question2'
                        className='small-button'
                        style={{
                            backgroundColor: '#003362',
                            height: '100%',
                            padding: '1% 4%',
                        }}
                    >
                        &gt;
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Q1
