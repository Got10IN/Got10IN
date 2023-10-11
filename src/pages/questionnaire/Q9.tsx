import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ9 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { useUpdateEffect } from 'usehooks-ts'

const Q9 = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])

    const handleOptionSelect = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(
                selectedOptions.filter((item) => item !== option)
            )
        } else {
            setSelectedOptions([...selectedOptions, option])
        }
    }

    const questionnaire = useSelector(
        (state: RootState) => state.questionnaire.value
    )

    const dispatch = useDispatch()

    useUpdateEffect(() => {
        dispatch(updateQ9({ options: selectedOptions }))
    }, [selectedOptions])

    useEffect(() => {
        const options = questionnaire.q9.options

        setSelectedOptions(options)
    }, [])

    return (
        <div className='Q-left-container' style={{ height: '300px' }}>
            <p className='main-text' style={{ paddingBottom: '2%' }}>
                9. What is the GPA range that meets your expectations for the
                school you wish to attend?
            </p>
            <label>
                <input
                    type='checkbox'
                    value='I don’t care'
                    checked={selectedOptions.includes('I don’t care')}
                    onChange={() => handleOptionSelect('I don’t care')}
                />
                I don’t care
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='3.0+'
                    checked={selectedOptions.includes('3.0+')}
                    onChange={() => handleOptionSelect('3.0+')}
                />
                3.0+
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='3.0-3.5'
                    checked={selectedOptions.includes('3.0-3.5')}
                    onChange={() => handleOptionSelect('3.0-3.5')}
                />
                3.0-3.5
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='above 3.5'
                    checked={selectedOptions.includes('above 3.5')}
                    onChange={() => handleOptionSelect('above 3.5')}
                />
                above 3.5
            </label>
        </div>
    )
}

export default Q9
