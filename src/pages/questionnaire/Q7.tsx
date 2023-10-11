import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { updateQ7 } from '../../utils/redux/questionnaire'
import './Questionnaire.css'
import { useUpdateEffect } from 'usehooks-ts'

const Q7 = () => {
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
        dispatch(updateQ7({ options: selectedOptions }))
    }, [selectedOptions])

    useEffect(() => {
        const options = questionnaire.q7.options

        setSelectedOptions(options)
    }, [])

    return (
        <div className='Q-left-container' style={{ height: '300px' }}>
            <p className='main-text' style={{ paddingBottom: '2%' }}>
                7. What type(s) of college do you prefer?
            </p>
            <label>
                <input
                    type='checkbox'
                    value='Public'
                    checked={selectedOptions.includes('Public')}
                    onChange={() => handleOptionSelect('Public')}
                />
                Public
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='Private'
                    checked={selectedOptions.includes('Private')}
                    onChange={() => handleOptionSelect('Private')}
                />
                Private
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    value='Liberal arts'
                    checked={selectedOptions.includes('Liberal arts')}
                    onChange={() => handleOptionSelect('Liberal arts')}
                />
                Liberal arts
            </label>
        </div>
    )
}

export default Q7
