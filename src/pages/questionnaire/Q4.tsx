import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ4 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { FieldWithDropdown } from './components'
import { useUpdateEffect } from 'usehooks-ts'

const Q4 = () => {
    const initialOptions = [
        'Sunny',
        'Rainy',
        'Stormy',
        'Snowy',
        'Icy',
        'Foggy',
        'Windy',
        'Muggy',
        'Dry',
        'Tropical',
        'Polar',
        'Tornado-prone',
        'Drought',
        'Mild',
        'Hailstorm',
        'Psychology',
        'Overcast',
        'Blizzard',
        'Heatwave',
        'Tropical Cyclone',
        'Dust Storm',
    ]

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

    return (
        <div className='Q-left-container'>
            <p className='main-text'>
                4.Tell us about your location preference
            </p>
            <p className='main-text' style={{ paddingTop: '2%' }}>
                I like:
            </p>
            <p className='small-text'>*You can choose up to 3 locations</p>
            <div className='selected-options-container'>
                {selectedOptions1.map((option, index) => (
                    <div key={index} className='selected-option'>
                        {option}
                        <span
                            className='remove-option'
                            onClick={() => handleRemoveOption1(index)}
                        >
                            X
                        </span>
                    </div>
                ))}
            </div>
            <FieldWithDropdown
                options={initialOptions}
                selectedOptions={selectedOptions1}
                onSelect={handleSelectOption1}
            />
            <p className='main-text' style={{ paddingTop: '5%' }}>
                I don't like:
            </p>
            <p className='small-text'>*You can choose up to 3 locations</p>
            <div className='selected-options-container'>
                {selectedOptions2.map((option, index) => (
                    <div key={index} className='selected-option'>
                        {option}
                        <span
                            className='remove-option'
                            onClick={() => handleRemoveOption2(index)}
                        >
                            X
                        </span>
                    </div>
                ))}
            </div>
            <FieldWithDropdown
                options={initialOptions}
                selectedOptions={selectedOptions2}
                onSelect={handleSelectOption2}
            />
        </div>
    )
}

export default Q4
